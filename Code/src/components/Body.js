import RestaurantCard, { withOffersLabel } from "./RestaurantCard";
import { useState, useEffect } from "react";
import ShimmerUI from "./Shimmers/ShimmerUI";
import { Await, Link } from "react-router-dom";
import { RESTAURANTLIST_API } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import debounce from "lodash/debounce";
import { FaSearch,  } from "react-icons/fa";

const Body = () => {
  //whenever state variable updates = reconsiliation
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();

  const RestaurantCardWithOffers = withOffersLabel(RestaurantCard);

  // console.log("Body rendered", listOfRestaurants);

  useEffect(() => {
    fetchData();
  }, []);

  const debouncedSearch = debounce((value) => {
    const filteredRestaurants = listOfRestaurants.filter((restaurant) => {
      return restaurant.info.name.toLowerCase().includes(value.toLowerCase());
    });
    setFilteredRestaurants(filteredRestaurants);
  }, 500);

  useEffect(() => {
    debouncedSearch(searchText);
  }, [searchText]);

  const fetchData = async () => {
    const data = await fetch(RESTAURANTLIST_API);

    const json = await data.json();
    // console.log(json);

    //Optional Chaining
    setListOfRestaurants(
      json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (onlineStatus === false)
    return <h1>something went wrong, please check you internet connection</h1>;

  //Conditional rendering - (Ternaray Operator (condition ? true : false))
  return listOfRestaurants.length === 0 ? (
    <ShimmerUI />
  ) : (
    <div className="body">
      <div className="filter flex w-10/12 mx-auto">
        <div className="search m-4 p-4 flex items-center">
          <input
            type="text"
            className="border border-solid border-black px-2 font-semibold text-sm py-1"
            value={searchText}
            placeholder="Search Restaurants"
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-100 m-2 rounded-lg flex items-center"
            onClick={() => {
              // filter the restaurants and update the UI
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
            <FaSearch className="mr-2" />
            <span>Search</span>
          </button>
        </div>

        <div className="top-rated m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-200 rounded-lg"
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
      </div>

      <div className="restaurant-container flex flex-wrap justify-start w-11/12 mx-auto px-10 gap-1">
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant?.info?.id}
            to={"/restaurant/" + restaurant?.info?.id}
          >
            {/* Terinary operator */}
            {restaurant.info.aggregatedDiscountInfoV3 ? (
              <RestaurantCardWithOffers restaurantData={restaurant} />
            ) : (
              <RestaurantCard restaurantData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
