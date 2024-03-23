import React from "react";

const CartSummary = ({ items }) => {
  console.log(items);

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
    <div className=" w-3/12">
      <div className="">
        <h1 className=" border-b-[1px] border-gray-400 text-2xl py-2 ">
          Cart Summary
        </h1>
      </div>
      <div className=" my-3">
        <div>
          {items.map((item, index) => (
            <ul key={index} className=" flex justify-between gap-16">
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
          <div className=" border-y-[1px] border-gray-400 py-2">₹{totalPrice}</div>
        </div>

        <div className=" flex justify-between gap-16 ">
          <div>Estimated Tax (5%)</div>
          <div>₹{tax}</div>
        </div>

        <div className=" flex justify-between gap-16 mb-3 border-b-[1px] border-gray-400">
          <div className=" ">Delivery Charge</div>
          <div className=" mb-3 ">₹40</div>
        </div>

        <div className=" flex justify-between gap-16">
          <div>Order Total</div>
          <div>₹{orderTotal}</div>
        </div>
      </div>
    </div>
  );
};

export default CartSummary;
