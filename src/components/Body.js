import RestCard from "./RestCard";
import { useEffect, useState } from "react";
import swiggy_data from "../utils/swiggy_data";
import Shimmer from "./Shimmer";

const Body = () => {
  const [resList, setResList] = useState([]);
  const [filterResList, setFilteredResList] = useState([]);
  const [searchText, setSearchText] = useState("");
  console.log(resList);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.89960&lng=80.22090&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setResList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredResList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return resList.length === 0 ? (
    <Shimmer count={10}></Shimmer>
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="search-btn"
            onClick={() => {
              console.log(searchText);
              const filteredItem = resList.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setFilteredResList(filteredItem);
            }}
          >
            Search Button
          </button>
        </div>

        <button
          className="top-rated-button"
          onClick={() => {
            const filteredItem = resList.filter(
              (res) => res.info.avgRating > 4
            );
            setFilteredResList(filteredItem);
          }}
        >
          Top Rated Button
        </button>
      </div>
      <div className="res-container">
        {filterResList.map((res) => (
          <RestCard key={res.id} resData={res}></RestCard>
        ))}
      </div>
    </div>
  );
};

export default Body;
