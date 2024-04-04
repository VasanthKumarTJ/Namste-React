import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestauarantMenu";
import RestaurantCategory from "./RestaurantCategory";
import ShimmerMenu from "./Shimmers/ShimmerMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const restaurantInfo = useRestaurantMenu(resId);

  if (!restaurantInfo) return <div> <ShimmerMenu/> </div>;
  console.log(restaurantInfo);

  const { name, cuisines, costForTwoMessage, areaName, locality, city } =
    restaurantInfo?.cards[2]?.card?.card?.info;
    

  // const {
  //   itemCards,
  //   title,
  // } = restaurantInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.cards;

  const categories =
    restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  // console.log(categories);

  return (
    <div className="text-center">
      <h1 className="font-semibold my-6 text-2xl text-gray-800">{name}</h1>
      <h2 className=" text-gray-900 text-xl">
        {cuisines.join(",")} - {costForTwoMessage}
      </h2>
      <p className=" text-gray-950 text-xl">
        {areaName}, {locality}, {city}
      </p>
      {/* {categories accordians}  */}
      {categories.map((category) => (
        // controled component
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
