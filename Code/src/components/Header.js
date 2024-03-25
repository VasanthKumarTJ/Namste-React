import { useState } from "react";
import logo from "../../assets/logo/logo.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";
import { selectCartQuantity } from "../store/selectCartQuantity";
import { FaHeadset, FaShoppingCart, } from "react-icons/fa";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const totalQuantity = useSelector(selectCartQuantity);

  //subscribing t0 store using a selector
  const cartItems = useSelector((store) => store.cart.items.quantity);
  console.log(cartItems);

  const linkCss =
    "pr-12 lg:pr-6 lg:text-sm xl:pr-12 xl:text-base font-bold  text-gray-600 hover:text-orange-300";

  return (
    <div className="flex  justify-between h-20 shadow-lg">
      <div className="logo-container">
        <Link to="/">
          <img
            className="h-20 w-28 cursor-pointer object-cover"
            src={logo}
          ></img>
        </Link>
      </div>

      <div className=" flex items-center">
        <ul className=" flex m-4 p-4 ">
          <li className="pr-12 lg:pr-6 lg:text-sm xl:pr-12 xl:text-base font-bold">
            online Status: {onlineStatus ? "✅" : "🔴"}
          </li>
          <li className={linkCss}>
            <Link to="/">Home</Link>
          </li>
          <li className={linkCss}>
            <div className="flex items-center">
              <FaHeadset className="mx-1" />
              <Link to="/about">Help</Link>
            </div>
          </li>
          <li className={linkCss}>
            <Link to="/contact">contact</Link>
          </li>
          <li className={linkCss}>
            <div className="flex items-center">
              <FaShoppingCart className="mx-1" />
              <Link
                to="/cart 
            "
              >
                Cart ({totalQuantity} items)
              </Link>
            </div>
          </li>
          <button
            className="Login"
            onClick={() => {
              loginBtn === "Login"
                ? setLoginBtn("Logout")
                : setLoginBtn("Login");
            }}
          >
            {loginBtn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
