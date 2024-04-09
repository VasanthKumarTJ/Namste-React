import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearCart } from "../../store/cartSlice";
import { useNavigate } from "react-router-dom";
// import axios from "axios";

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
    // Serialize order details
    // const orderDetails = {
    //   items: items,
    //   totalPrice: totalPrice,
    //   tax: tax,
    //   deliveryCharge: deliveryCharge,
    //   orderTotal: orderTotal,
    // };

    // Save order details to local storage
    localStorage.setItem("cartItems", JSON.stringify(items));

    // Navigate to the OrderDetails component
    dispatch(clearCart());

    navigate("/order");
  };

  return (
    <div className="w-4/12 border-[1px] border-gray-300 p-3">
      <div className="border-b-[1px] border-gray-300 text-2xl py-2">
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

        <div className="flex justify-between gap-16">
          <div>Order Total:</div>
          <div>₹{orderTotal}</div>
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
