import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { RESTAURANTLIST_API } from "../utils/constants";

const Body = () => {
  //local State variable - Super Powerful
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  //Whenever statevariable updates or changes react triggers reconsiliatin (re-render or refreshes the component)
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURANTLIST_API);

    const json = await data.json();
    console.log(json);

    setListOfRestaurants(
      //Optional Chaining
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      //Optional Chaining
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  //Conditional rendering - (Ternaray Operator (condition ? true : false))
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <input
          type="search"
          className="search-bar"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            //filter the restaurants and update the UI
            //searchText
            console.log(searchText);
            const filteredRestaurants = listOfRestaurants.filter(
              (restaurant) => {
                return restaurant.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              }
            );
            setFilteredRestaurants(filteredRestaurants);
          }}
        >
          Search
        </button>

        <button
          className="top-restaurants-btn"
          onClick={() => {
            const topRatedRestaurants = listOfRestaurants.filter(
              (restaurant) => {
                return restaurant?.info?.avgRating > 4;
              }
            );
            setFilteredRestaurants(topRatedRestaurants);
          }}
        >
          Top rated
        </button>
      </div>

      <div className="restaurant-container">
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant?.info?.id}
            to={"/restaurant/" + restaurant?.info?.id}
          >
            <RestaurantCard restaurantData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
