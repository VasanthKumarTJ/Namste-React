import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import logo from "../../assets/logo/logo.png";
import { FaInstagram, FaTwitter, FaGithub, FaLinkedin} from "react-icons/fa";

const Footer = () => {
  const LiCss =
    "font-normal lg:text-base md:text-base text-xs lg:pt-3 md:pt-3 pt-2 text-zinc-400 lg:tracking-wide tracking-wider md:tracking-wide  cursor-pointer";
  const titleCss =
    "font-extrabold lg:text-lg md:text-lg text-base text-gray-50 tracking-wide lg:pb-4 md:pb-4 pb-2";

  return (
    <div>
      <div className="flex justify-center items-start lg:px-12  md:px-12 px-4 lg:flex-row md:flex-row flex-row bg-black lg:gap-10 md:gap-10 gap-16 lg:w-12/12 md:w-12/12 w-12/12 lg:py-16 md:py-16 py-10 pb-20 flex-wrap">
        <div className=" lg:w-3/12 w-4/12 md:w-3/12 ">
          <div className="flex justify-center items-center flex-col gap-2">
            <img
              className="lg:w-32 w-16 rounded-3xl md:w-28"
              src={logo}
            ></img>
            <span className="font-extrabold lg:text-lg md:text-lg text-base text-gray-50 tracking-wide">
              Tech Cuisine
            </span>
            <div className="flex justify-evenly md:gap-4 gap-3 lg:gap-5 items-center flex-row">
              <Link
                target="_blank"
                to={""}
              >
                <span className="text-white lg:text-2xl text-xl md:text-2xl">
                  <FaInstagram></FaInstagram>
                </span>
              </Link>
              <Link target="_blank" to={"#"}>
                <span className="text-white lg:text-2xl text-xl md:text-2xl">
                  <FaGithub/>
                </span>
              </Link>
              <Link
                target="_blank"
                to={""}
              >
                <span className="text-white lg:text-2xl text-xl md:text-2xl">
                 <FaLinkedin/>
                </span>
              </Link>
              <Link target="_blank" to={""}>
                <span className="text-white lg:text-2xl text-xl md:text-2xl">
                  <FaTwitter/>
                </span>
              </Link>
            </div>
          </div>
        </div>

        <div className="lg:w-2/12 w-4/12 md:w-2/12">
          <span className={titleCss}>Company</span>
          <ul>
            <li className={LiCss}>About</li>
            <li className={LiCss}>Careers</li>
            <li className={LiCss}>Team</li>
            <li className={LiCss}>Foody Instamart</li>
            <li className={LiCss}>Foody One</li>
          </ul>
        </div>
        <div className="lg:w-2/12 w-4/12 md:w-2/12">
          <span className={titleCss}>Contact Us</span>
          <ul>
            <li className={LiCss}>Help & Support</li>
            <li className={LiCss}>Partner with us</li>
            <li className={LiCss}>Ride with us</li>
            <li className={LiCss}>Privacy Policy</li>
            <li className={LiCss}>Cookies</li>
          </ul>
        </div>
        <div className="lg:w-2/12 w-4/12 md:w-2/12 ">
          <span className={titleCss}>We deliver to:</span>
          <ul>
            <li className={LiCss}>Bangalore</li>
            <li className={LiCss}>Pune</li>
            <li className={LiCss}>Gurgaon</li>
            <li className={LiCss}>Hyderabad</li>
            <li className={LiCss}>Delhi</li>
            <li className={LiCss}>Mumbai</li>
          </ul>
        </div>
      </div>
      <div className="bg-zinc-800 text-white text-center py-5">
        <span className="tracking-wide">
          © 2023 All Rights Reserved Haritha & Vasanth
        </span>
      </div>
    </div>
  );
};
export default Footer;
