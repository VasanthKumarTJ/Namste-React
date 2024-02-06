import { useEffect, useState } from "react";
import { RESTAURANTLIST_API } from "./constants";

const useListOfRestaurants = () => {
  const [json, setJson] = useState(null); // Change initial state to null

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(RESTAURANTLIST_API);
      const jsonData = await data.json();
      setJson(jsonData);
    } catch (error) {
      console.error("Error fetching restaurant data:", error);
      // You may want to handle errors appropriately here
    }
  };

  return json;
};

export default useListOfRestaurants;
