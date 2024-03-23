import { CDN_URL } from "../../utils/constants";
import { useDispatch } from "react-redux";
import {
  addItem,
  removeItem,
  decreaseItemQuantity,
} from "../../store/cartSlice";

const CartItem = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  const handleDecreaseItemQuantity = (item) =>
    dispatch(decreaseItemQuantity(item.card.info.id));

  // const handleRemoveItem = (item) => {
  //   dispatch(removeItem(item));
  // };

  return (
    <div className=" px-3 w-10/12">
      {items.map((item) => (
        <div
          className=" p-2 mt-2 border-b-[1px] border-gray-300 text-left flex align-middle "
          key={item.card.info.id}
        >
          <img
            src={
              item.card.info.imageId
                ? CDN_URL + item.card.info.imageId
                : item.card.info.nextAvailableAtMessage
            }
            alt={item.card.info.name}
            className="rounded-lg  object-cover h-24 w-40"
          />

          <div className="w-8/12 self-center flex justify-between gap-5 ">
            <div className="px-2">
              <h1 className="font-medium mb-3 text-lg">
                {item.card.info.name}
              </h1>
              <p className="text-xs text-gray-600 line-clamp-1 ">
                {item.card.info.description}
              </p>
            </div>

            <div className="flex my-1 self-center text-lg">
              <h2 className=" mx-5">
                ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </h2>
              <button className=" flex justify-between ">
                <div className=" mx-5" onClick={() => handleAddItem(item)}>
                  +
                </div>
                <div>{item.quantity}</div>
                <div
                  className="mx-5"
                  onClick={() => handleDecreaseItemQuantity(item)}
                >
                  -
                </div>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItem;

{
  /* <div className="w-3/12 p-4 mx-auto relative">
           <div className=" flex gap-3 top-20 drop-shadow-lg">

              <button
                className=" bg-white text-red-600 rounded-lg  m-auto p-2 text-xs font-semibold"
                onClick={() => handleRemoveItem(item)}
              >
                Remove
              </button>
            </div>
          </div> */
}
