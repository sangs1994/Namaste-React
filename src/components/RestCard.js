import { CDN_URL } from "../utils/data";

const RestCard = (props) => {
  const {
    name,
    cuisines,
    avgRatingString,
    sla,
    cloudinaryImageId,
    costForTwo,
  } = props.resData.info;

  return (
    <div className="res-card">
      <img className="res-card-image" src={CDN_URL + cloudinaryImageId}></img>
      <h3 className="res-card-name">{name}</h3>
      <h4 className="res-card-cuisine">{cuisines.join(", ")}</h4>
      <h4 className="res-card-rating">{avgRatingString} stars</h4>
      <h4 className="res-card-eta">{sla.deliveryTime} minutes</h4>
      <h4 className="res-card-cost">{costForTwo}</h4>
    </div>
  );
};

export default RestCard;
