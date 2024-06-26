import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaHeadset, FaShoppingCart } from "react-icons/fa";
import logo from "../../assets/logo/logo.png";
import useOnlineStatus from "../utils/useOnlineStatus";
import { selectCartQuantity } from "../store/selectCartQuantity";
import { MdOutlineHistory } from "react-icons/md";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login"); // State to control dropdown visibility
  const onlineStatus = useOnlineStatus();
  const totalQuantity = useSelector(selectCartQuantity);

  // Subscribing to store using a selector
  const cartItems = useSelector((store) => store.cart.items.quantity);
  console.log(cartItems);

  const linkCss =
    "pr-12 lg:pr-6 lg:text-sm xl:pr-12 xl:text-base font-bold  text-gray-600 hover:text-orange-300";

  return (
    <div className="flex  justify-between h-24 shadow-lg">
      <div className="logo-container">
        <Link to="/home">
          <img
            className=" h-24 w-28 cursor-pointer object-cover"
            src={logo}
            alt="Logo"
          />
        </Link>
      </div>

      <div className=" flex items-center relative">
        <ul className=" flex m-4 p-4 ">
          <li className="pr-12 lg:pr-6 lg:text-sm xl:pr-12 xl:text-base font-bold">
            online Status: {onlineStatus ? "✅" : "🔴"}
          </li>
          <li className={linkCss}>
            <Link to="/home">Home</Link>
          </li>
          <li className={linkCss}>
            <div className="flex items-center">
              <FaHeadset className="mx-1" />
              <Link to="/help">Help</Link>
            </div>
          </li>
          <li className={linkCss}>
            <Link to="/about">About</Link>
          </li>
          <li className={linkCss}>
            <div className="flex items-center">
              <MdOutlineHistory className="mx-1" />
              <Link to="/orderhistory">Order history</Link>
            </div>
          </li>
          <li className={linkCss}>
            <div className="flex items-center relative">
              <FaShoppingCart className="mx-1" />
              <Link to="/cart">Cart ({totalQuantity} items)</Link>
            </div>
          </li>
          {/* <button
            className="Login"
            onClick={() => {
              loginBtn === "Login"
                ? setLoginBtn("Logout")
                : setLoginBtn("Login");
            }}
          >
            <Link to="/">{loginBtn}</Link> 
          </button> */}
        </ul>
      </div>
    </div>
  );
};

export default Header;
