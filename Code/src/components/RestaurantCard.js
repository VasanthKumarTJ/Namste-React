import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { restaurantData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    costForTwo,
    avgRating,
    areaName,
  } = restaurantData?.info;

  return (
    <div className="restaurant-Card m-4 p-3 w-[250px] hover:p-1 hover:duration-75	">
      <div>
        <img
          className="restaurant-logo h-[150px] w-full object-cover rounded-2xl"
          src={CDN_URL + cloudinaryImageId}
          alt="res-logo"
        />
      </div>
      <div>
        <h2 className="line-clamp-1 font-bold pt-3 pb-2 text-lg">{name}</h2>
        <h2 className="font-bold " >{avgRating} stars  &#183; {restaurantData?.info?.sla?.deliveryTime} Mins </h2>
        <h3 className=" line-clamp-1 break-words">{cuisines.join(",")}</h3>
        <h4>{areaName}</h4>
        <h4>{costForTwo}</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
