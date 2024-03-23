import { CDN_URL } from "../utils/constants";
import {useDispatch} from "react-redux"
import { addItem } from "../store/cartSlice";

const ItemList = ({ items }) => {
  // console.log(items);
  
  const dispatch = useDispatch()

  const handleAddItem = (item) => {
    dispatch(addItem(item))
    
  }

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className=" p-2 m-2 border-b-[1px] border-gray-300 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <h1 className="font-medium">{item.card.info.name}</h1>
              <h2>
                ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </h2>
            </div>

            <p className="text-xs text-gray-600 ">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4 mx-auto relative">
            {!item.card.info.nextAvailableAtMessage && (
              <div className=" absolute mx-8 top-20 drop-shadow-lg">
                <button className=" bg-white text-green-600 rounded-lg  m-auto p-2 text-xs font-semibold"
                onClick={() => handleAddItem(item)}>
                 ADD + <span>{item.quantity}</span> 
                </button>
              </div>
            )}
            <img
              src={item.card.info.nextAvailableAtMessage ? item.card.info.nextAvailableAtMessage : CDN_URL + item.card.info.imageId }
            
              alt={item.card.info.nextAvailableAtMessage}
              className=" w-full rounded-lg h-20 object-cover"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
