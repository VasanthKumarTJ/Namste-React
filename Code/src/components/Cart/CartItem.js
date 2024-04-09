import { CDN_URL } from "../../utils/constants";
import { useDispatch } from "react-redux";
import {
  addItem,
  removeItem,
  decreaseItemQuantity,
} from "../../store/cartSlice";
import { MdDeleteForever } from "react-icons/md";


const CartItem = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  const handleDecreaseItemQuantity = (item) =>
    dispatch(decreaseItemQuantity(item.card.info.id));

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item.card.info.id));
  };

  return (
    <div className=" px-3 w-full">
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

            <div className="flex my-1 self-center text-lg  justify-around">
              <h2 className=" mx-5 px-2 py-1">
                ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </h2>
              <button className=" flex justify-between items-center bg-slate-200 rounded-lg px-2 py-1 mr-7">
                <div
                  className=" font-semibold text-red-400"
                  onClick={() => handleDecreaseItemQuantity(item)}
                >
                  -
                </div>
                <div className="border-x-[1px] border-gray-500 mx-3 px-3">
                  {item.quantity}
                </div>
                <div
                  className=" text-green-600 font-semibold"
                  onClick={() => handleAddItem(item)}
                >
                  +
                </div>
              </button> 
              <button
                className="rounded-lg p-2 text-2xl  font-semibold"
                onClick={() => handleRemoveItem(item)}
              >
                <MdDeleteForever/>
              </button>
              
            </div>
            
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItem;
