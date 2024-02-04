import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  const [restaurantInfo, setRestaurantInfo] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);

    const json = await data.json();
    console.log(json.data);

    setRestaurantInfo(json.data);
  };

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

