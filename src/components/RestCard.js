import { CDN_URL } from "../utils/data";

const RestCard = (props) => {
  const { name, cuisines, avgRatingString, sla, cloudinaryImageId } =
    props.resData.info;

  return (
    <div className="res-card">
      <img className="res-card-image" src={CDN_URL + cloudinaryImageId}></img>
      <h3 className="res-card-name">{name}</h3>
      <h4 className="res-card-cuisine">{cuisines.join(", ")}</h4>
      <h4 className="res-card-rating">{avgRatingString}</h4>
      <h4 className="res-card-eta">{sla.deliveryTime}</h4>
    </div>
  );
};

export default RestCard;
