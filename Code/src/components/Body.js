import RestaurantCard from "./RestaurantCard";
import RestaurantList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  let [listOfRestaurants, setListOFRestaurants] = useState(RestaurantList);

  return (
    <div className="body">
      <div className="Top-rated">
        <button
          onClick={() => {
            const topRatedRestaurants = listOfRestaurants.filter((restaurant) => {
              return restaurant.info.avgRating > 4;
            });
            setListOFRestaurants(topRatedRestaurants);
          }}
        >
          Top rated
        </button>
      </div>

      <div className="restaurant-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.info.id}
            restaurantData={restaurant}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
