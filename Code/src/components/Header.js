import { LOGO_URL } from "../utils/constants";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src = {LOGO_URL}
        ></img>
      </div>

      <div className="nav-items">
        <ul className="links">
          <li>Home</li>
          <li>About us</li>
          <li>contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;