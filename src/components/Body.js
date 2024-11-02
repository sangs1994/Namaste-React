import RestCard from "./RestCard";
import { useState } from "react";
import swiggy_data from "../utils/swiggy_data";

const Body = () => {
  const [resList, setResList] = useState(swiggy_data);
  console.log(resList);
  return (
    <div className="body">
      <div className="search">Search</div>
      <button
        className="top-rated-button"
        onClick={() => {
          const filteredItem = resList.filter((res) => res.info.avgRating > 4);
          setResList(filteredItem);
        }}
      >
        Top Rated Button
      </button>
      <div className="res-container">
        {resList.map((res) => (
          <RestCard key={res.id} resData={res}></RestCard>
        ))}
      </div>
    </div>
  );
};

export default Body;
