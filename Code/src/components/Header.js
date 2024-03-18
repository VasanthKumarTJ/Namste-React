import { useState } from "react";
import logo from "../../assets/logo/logo.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";
import { selectCartQuantity } from "../store/selectCartQuantity"; 


const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const totalQuantity = useSelector(selectCartQuantity);

  //subscribing t0 store using a selector
  const cartItems = useSelector((store) => store.cart.items.quantity);
  console.log(cartItems);

  return (
    <div className="flex  justify-between h-20">
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
          <li className=" px-4">online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li className=" px-4 hover:text-red-500">
            <Link to="/">Home</Link>
          </li>
          <li className=" px-4 hover:text-red-500">
            <Link to="/about">About</Link>
          </li>
          <li className=" px-4 hover:text-red-500">
            <Link to="/contact">contact</Link>
          </li>
          <li className=" px-4 hover:text-red-500">
            <Link
              to="/cart 
            "
            >
              Cart ({totalQuantity} items)
            </Link>
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
