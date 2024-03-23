import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../../store/cartSlice.js";
import CartSummary from "../Cart/CartSummary.js";
import CartItem from "./CartItem.js";
import ShimmerCart from "../Shimmers/ShimmerCart.js";
import cartImg from "../../../assets/cart.svg";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return cartItems.length === 0 ? (
    <div className="m-auto lg:w-6/12 md:w-6/12 w-11/12 h-fit flex flex-col justify-center items-center lg:py-10 md:py-10 py-8">
      <div>
        <img className="lg:w-80 md:w-80 w-40" src={cartImg}></img>
      </div>
      <div className="flex flex-col justify-center items-center py-6">
        <span className="text-xl text-gray-600 font-extrabold tracking-wide">
          Your cart is empty
        </span>
        <span className="text-sm text-gray-400 tracking-wide">
          You can go to home page to view more restaurants
        </span>
      </div>
      <div className="pt-4">
        <Link to="/">
          <span className="bg-orange-400 py-2 px-3 text-base font-bold text-white hover:bg-transparent hover:rounded-md   hover:border-2 hover:border-black hover:text-black">
            SEE RESTAURANTS NEAR YOU
          </span>
        </Link>
      </div>
    </div>
  ) : (
    // <div className=" flex justify-between w-10/12 mx-auto my-10">
      <div className=" text-center flex w-10/12 mx-auto my-10 gap-8">
        <div className=" w-9/12 ">
          <div className="text-start flex justify-between border-b-[1px] border-gray-300 w-10/12 ">
            <div>
              <h1 className="text-2xl font-semibold">Order Overview</h1>
              <h2 className=" text-xl">
                You have {cartItems.length} Items in you basket
              </h2>
            </div>

            <div>
              <button
                className="px-4 py-2 bg-green-200 m-4 rounded-lg"
                onClick={handleClearCart}
              >
                Clear Cart
              </button>
            </div>
          </div>
          {/* <ItemList items={cartItems} /> */}

          {cartItems.length === 0 && (
            <h1 className=" text-4xl">Add Items to the Cart!</h1>
          )}

          <CartItem items={cartItems} />
        </div>

        <CartSummary items={cartItems} />
      </div>
    // </div>
  );
};

export default Cart;
