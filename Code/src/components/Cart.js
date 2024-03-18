import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../store/cartSlice.js";
import ItemList from "./ItemList.js";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="m-4 p-4 text-center">
      <h1 className="text-2xl font-semibold">Cart</h1>
      <div className="w-6/12 m-auto">
        <button
          className="px-4 py-2 bg-green-200 m-4 rounded-lg"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cartItems.length === 0 && <h1 className=" text-4xl">Add Items to the Cart!</h1>}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
