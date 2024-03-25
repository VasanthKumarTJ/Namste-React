import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../../store/cartSlice.js"; 



const CartSummary = ({ items }) => {
  // console.log(items);

  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const navigate = useNavigate();

  function handleClick() {
    navigate("/order");
    handleClearCart();
  }

  const totalPrice = items.reduce((total, item) => {
    return (
      total +
      (item.quantity * item.card.info.price
        ? item.card.info.price / 100
        : item.card.info.defaultPrice / 100)
    );
  }, 0);

  const tax = totalPrice * 0.05;
  const deliveryCharge = 40 + tax;
  const orderTotal = totalPrice + deliveryCharge;

  return (
    <div className=" w-4/12  border-[1px] border-gray-300 p-3">
      <div className="">
        <h1 className=" border-b-[1px] border-gray-300 text-2xl py-2 ">
          Cart Summary
        </h1>
      </div>
      <div className=" my-2">
        <div>
          {items.map((item, index) => (
            <ul key={index} className=" flex justify-between">
              <li>
                {item.card.info.name} ({item.quantity}) -
              </li>
              <li>
                ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : (item.card.info.defaultPrice / 100) * item.quantity}
              </li>
            </ul>
          ))}
        </div>

        <div className=" flex justify-between gap-16 my-2 items-center">
          <div className="">Total Before Tax:</div>
          <div className=" border-y-[1px] border-gray-300 py-2">
            ₹{totalPrice}
          </div>
        </div>

        <div className=" flex justify-between gap-16 ">
          <div>Estimated Tax (5%)</div>
          <div>₹{tax.toFixed(1)}</div>
        </div>

        <div className=" flex justify-between gap-16 mb-3 border-b-[1px] border-gray-300">
          <div className=" ">Delivery Charge</div>
          <div className=" mb-3 ">₹40</div>
        </div>

        <div className=" flex justify-between gap-16">
          <div>Order Total</div>
          <div>₹{orderTotal}</div>
        </div>
      </div>
      <button
        className="mx-3 my-3 bg-blue-800 hover:bg-blue-500 active:bg-blue-950 text-white p-2 block w-11/12 font-semibold rounded-md hover:scale-105"
        onClick={() => handleClick()}
      >
        Checkout{" "}
      </button>
    </div>
  );
};

export default CartSummary;
