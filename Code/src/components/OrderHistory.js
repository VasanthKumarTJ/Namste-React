import React, { useEffect, useState } from "react";
import { CDN_URL } from "../utils/constants.js";
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";
 

const orderHistory = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showItem, setShowItem] = useState(false);
  const [username, setUsername] = useState("");

  const handleClick = () => {
    setShowItem(!showItem);
  };

  useEffect(() => {
    // Retrieve cart items from local storage
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems"));
    if (storedCartItems) {
      setCartItems(storedCartItems);
      console.log(storedCartItems);
    }

    // Retrieve username from local storage
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const clearLocalStorage = () => {
    const orderHistory = JSON.parse(localStorage.getItem("orderHistory")) || [];
    orderHistory.push(cartItems);
    localStorage.setItem("orderHistory", JSON.stringify(orderHistory));
    localStorage.removeItem("username");

    localStorage.removeItem("cartItems");
    setCartItems([]);
  };
 
  return (
    <div className="w-8/12 mx-auto my-2"> 
      <div className=" flex flex-row justify-center items-center content-center"> 

        <button
          className="bg-blue-800 hover:bg-blue-500 active:bg-blue-950 text-white p-2 m-7 text-sm font-bold rounded-md"
          onClick={clearLocalStorage}
        >
          Clear history 
        </button>
        <button className="bg-blue-800 hover:bg-blue-500 active:bg-blue-950 text-white p-2 m-7 text-sm font-bold rounded-md">
          <Link to="/home"> Go back to Restaurants </Link>
        </button>
      </div>
      <div className="w-8/12 mx-auto my-2">
        <h2 className=" text-2xl mb-5">Order history:</h2>

        <div onClick={handleClick}>
          <div
            className="flex justify-between cursor-pointer border-b-[1px] border-gray-300 pb-5 items-center align-middle"
            onClick={handleClick}
          >
            <span className="font-semibold text-lg  ">
              {username} ({cartItems.length})
            </span>
            <span className=" mr-2">
              <FaChevronDown />
            </span>
          </div>
        </div>

        {/* Accordian Body */}
        {showItem && (
          <div>
            <ul>
              {cartItems.map((item, index) => (
                <div
                  className=" p-2 mt-2 border-b-[1px] border-gray-300 text-left flex align-middle "
                  key={item.card.info.id}
                >
                  <img
                    src={
                      item.card.info.imageId
                        ? CDN_URL + item.card.info.imageId
                        : item.card.info.nextAvailableAtMessage
                    }
                    alt={item.card.info.name}
                    className="rounded-lg  object-cover h-24 w-40"
                  />

                  <div className="w-8/12 self-center flex justify-between gap-5 ">
                    <div className="px-2">
                      <h1 className="font-medium mb-3 text-lg">
                        {item.card.info.name} - qty:({item.quantity})
                      </h1>
                      <p className="text-xs text-gray-600 line-clamp-1 ">
                        {item.card.info.description}
                      </p>
                    </div>

                    <div className="flex my-1 self-center text-lg  justify-around">
                      <h2 className=" mx-5 px-2 py-1">
                        ₹
                        {item.card.info.price
                          ? item.card.info.price / 100
                          : item.card.info.defaultPrice / 100}
                      </h2>
                    </div>
                  </div>
                </div>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default orderHistory;
