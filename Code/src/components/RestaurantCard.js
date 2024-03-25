import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { restaurantData } = props;
  const { cloudinaryImageId, name, cuisines, costForTwo, avgRating, areaName } =
    restaurantData?.info;

  return (
    <div className="restaurant-Card m-4 p-3 w-[250px] hover:scale-105 duration-200 shadow-lg">
      <img
        className="restaurant-logo h-[150px] w-full object-cover rounded-2xl"
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
      />

      <h2 className="line-clamp-1 font-bold pt-3 pb-2 text-lg font-serif ">{name}</h2>
      <h2 className="font-bold ">
       <span className=" bg-green-700 rounded-md text-white px-2 p-1 mr-1"> ★ {avgRating} </span> {restaurantData?.info?.sla?.deliveryTime} Mins{" "}
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
      <div className=" relative hover:scale-105">
        <label className="bg-gradient-to-t cursor-pointer absolute z-10 text-white from-black top-20 pt-14 left-7 rounded-mdtext-xl font-extrabold text-lg rounded-md w-[80%]  text-center ">
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
