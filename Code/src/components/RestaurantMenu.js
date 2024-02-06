import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestauarantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const restaurantInfo = useRestaurantMenu(resId);

  if (!restaurantInfo) return <div> Loading...</div>;

  const { name, cuisines } = restaurantInfo?.cards[0]?.card?.card?.info;

  const {
    itemCards,
  } = restaurantInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  const {
    title,
  } = restaurantInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  return (
    <div>
      <h1>{name}</h1>
      <h2>{cuisines.join(",")}</h2>
      <ul>
        <h2>{title}</h2>
        {console.log(itemCards)}
        {itemCards.map((item) => (
          <li key={item?.card?.info?.id}> {item?.card?.info?.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
