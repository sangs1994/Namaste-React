import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API_URL } from "../utils/data.js";

function RestaurantMenu() {
  const [restInfo, setrestInfo] = useState(null);
  const [isActiveAcc, setIsActiveAcc] = useState(false);

  const { resid } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API_URL + resid);
    const json = await data.json();
    setrestInfo(json.data);
    console.log(restInfo);
  };

  if (restInfo === null) return <Shimmer />;

  const {
    name,
    avgRating,
    totalRatingsString,
    costForTwoMessage,
    cuisines,
    areaName,
    sla,
  } = restInfo?.cards[2]?.card?.card?.info;

  const { itemCards, title } =
    restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

  const myStyle = {
    color: "red",
    textDecoration: "underline",
  };

  return (
    <div className="RestaurantContainer">
      <h1>{name}</h1>

      <p>
        {" "}
        {avgRating} ({totalRatingsString}) ~ {costForTwoMessage}
      </p>
      <p style={myStyle}>{cuisines.join(", ")}</p>
      <p>Outlet : {areaName}</p>
      <p>{sla.slaString}</p>
      <div className="accordion-item">
        <div
          className="accordion-title"
          onClick={() => setIsActiveAcc(!isActiveAcc)}
        >
          <div>{title}</div>
          <div>{isActiveAcc ? "-" : "+"}</div>
        </div>
        {isActiveAcc && (
          <div className="accordion-content">
            <ul>
              {itemCards.map((item, index) => (
                <li key={index}>
                  <p>{item.card.info.name}</p>
                  <p>
                    Rs.{" "}
                    {item.card.info.price / 100 ||
                      item.card.info.defaultPrice / 100}
                  </p>
                  <p>{item.card.info.ratings.aggregatedRating.rating}</p>
                  <img
                    src={
                      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" +
                      item.card.info.imageId
                    }
                  />
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default RestaurantMenu;
