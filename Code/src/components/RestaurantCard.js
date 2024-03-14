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
    <div className="restaurant-Card m-4 p-3 w-[250px] hover:p-1 hover:text-lg ">

        <img
          className="restaurant-logo h-[150px] w-full object-cover rounded-2xl"
          src={CDN_URL + cloudinaryImageId}
          alt="res-logo"
        />

        <h2 className="line-clamp-1 font-bold pt-3 pb-2 text-lg">{name}</h2>
        <h2 className="font-bold ">
          {avgRating} stars &#183; {restaurantData?.info?.sla?.deliveryTime}{" "}
          Mins{" "}
        </h2>
        <h3 className=" line-clamp-1 break-words">{cuisines.join(",")}</h3>
        <h4>{areaName}</h4>
        <h4>{costForTwo}</h4>
    </div>
  );
};

export const withOffersLabel = (RestaurantCard) => {
  return (props) => {
    const { restaurantData } = props;
    const { aggregatedDiscountInfoV3 } = restaurantData?.info;
    return (
      <div className=" relative ">
        <label className="cursor-pointer absolute z-10 text-gray-700 top-20 pt-14 left-7 rounded-mdtext-xl font-bold text-xl rounded-md w-[80%] text-center ">
          {aggregatedDiscountInfoV3.header +
            " " +
            aggregatedDiscountInfoV3.subHeader}
        </label>

        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
