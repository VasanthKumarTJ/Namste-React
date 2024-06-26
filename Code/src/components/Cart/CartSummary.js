import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearCart } from "../../store/cartSlice";
import { useNavigate } from "react-router-dom";
import { MdPayment } from "react-icons/md";
import payment from "../../../assets/payment.png";

const CartSummary = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const items = useSelector((state) => state.cart.items);

  const [totalPrice, setTotalPrice] = useState(0);
  const [tax, setTax] = useState(0);
  const [deliveryCharge, setDeliveryCharge] = useState(0);
  const [orderTotal, setOrderTotal] = useState(0);

  useEffect(() => {
    const newTotalPrice = items.reduce((total, item) => {
      return (
        total +
        item.quantity *
          (item.card.info.price
            ? item.card.info.price / 100
            : item.card.info.defaultPrice / 100)
      );
    }, 0);
    setTotalPrice(newTotalPrice);

    const newTax = newTotalPrice * 0.05;
    setTax(newTax);

    const newDeliveryCharge = 40 + newTax;
    setDeliveryCharge(newDeliveryCharge);

    const newOrderTotal = newTotalPrice + newDeliveryCharge;
    setOrderTotal(newOrderTotal);
  }, [items]);

  const handleCheckout = () => {
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem("username");

    if (!isLoggedIn) {
      // User is not logged in, redirect to login page
      navigate("/"); // Redirect to login page
      alert("You must login first to proceed with the checkout."); // Display alert message
      return;
    }

    // Retrieve existing cart items from local storage
    const existingCartItems =
      JSON.parse(localStorage.getItem("cartItems")) || [];

    // Merge existing cart items with new items
    const updatedCartItems = [...existingCartItems, ...items];

    // Serialize and save updated cart items to local storage
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));

    // Navigate to the OrderDetails component
    dispatch(clearCart());
    navigate("/order");
  };

  return (
    <div className="w-4/12 border-[1px] border-gray-300 p-3">
      <div className="border-b-[1px] border-gray-300 text-2xl py-2 font-semibold">
        Cart Summary
      </div>
      <div className="my-2">
        {items.map((item) => (
          <ul key={item.card.info.id} className="flex justify-between">
            <li>
              {item.card.info.name} ({item.quantity})
            </li>
            <li>
              ₹
              {item.card.info.price
                ? (item.card.info.price / 100) * item.quantity
                : (item.card.info.defaultPrice / 100) * item.quantity}
            </li>
          </ul>
        ))}

        <div className="flex justify-between gap-16 my-2 items-center">
          <div>Total Before Tax:</div>
          <div className="border-y-[1px] border-gray-300 py-2">
            ₹{totalPrice}
          </div>
        </div>

        <div className="flex justify-between gap-16">
          <div>Estimated Tax (5%):</div>
          <div>₹{tax.toFixed(1)}</div>
        </div>

        <div className="flex justify-between gap-16 mb-3 border-b-[1px] border-gray-300">
          <div>Delivery Charge:</div>
          <div className="mb-3">₹40</div>
        </div>

        <div className="flex justify-between gap-16 pb-5  border-b-[1px] border-gray-300">
          <div>Order Total:</div>
          <div>₹{orderTotal}</div>
        </div>
      </div>

      <div className=" flex flex-col flex-nowrap items-start">
        <h1 className="text-lg font-semibold">Payment Method</h1>
        <div className="">
          <input
            type="radio"
            id="payment1"
            name="payment"
            value="Cash_on_delivery"
            className="mr-2"
            checked
          />
          <label htmlFor="payment1" className=" ">
            Cash on delivery <br />
          </label>
        </div>
        <p className="text-xs">Pay digitally with SMS pay link</p>
        <div className="flex mt-2">
          <input
            type="radio"
            id="payment2"
            name="payment"
            value="online_payment"
            className=" mr-2"
          />
          <label htmlFor="payment2" className="flex items-center gap-2">
            <p> Credit card or debit card</p>
            <img
              src={payment}
              alt="payment-img"
              srcset=""
              className=" h-5 w-15 object-fill"
            />
          </label>
        </div>
      </div>

      <button
        className="mx-3 my-3 bg-blue-800 hover:bg-blue-500 active:bg-blue-950 text-white p-2 block w-11/12 font-semibold rounded-md hover:scale-105"
        onClick={handleCheckout}
      >
        Checkout
      </button>
    </div>
  );
};

export default CartSummary;
