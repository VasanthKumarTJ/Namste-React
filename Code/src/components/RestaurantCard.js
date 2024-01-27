import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { restaurantData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    costForTwo,
    avgRating,
  } = restaurantData?.info;

  return (
    <div className="restaurant-Card">
      <img
        className="restaurant-logo"
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
      />
      <h3>{name}</h3>
      <h4>{avgRating} stars</h4>
      <h4>{cuisines.join(",")}</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export default RestaurantCard;



