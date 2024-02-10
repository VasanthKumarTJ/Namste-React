import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex  justify-between">
      <div className="logo-container">
        <img className=" w-28" src={LOGO_URL}></img>
      </div>

      <div className=" flex items-center">
        <ul className=" flex m-4 p-4 ">
          <li className=" px-4">online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li  className=" px-4">
            <Link to="/">Home</Link>
          </li>
          <li  className=" px-4">
            <Link to="/about">About</Link>
          </li >
          <li  className=" px-4">
            <Link to="/contact">contact</Link>
          </li>
          <li  className=" px-4">Cart</li>
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
