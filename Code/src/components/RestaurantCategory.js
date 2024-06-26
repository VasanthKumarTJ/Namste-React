import { useState } from "react";
import ItemList from "./ItemList";
import { FaChevronDown } from "react-icons/fa";


const RestaurantCategory = ({ data }) => {
  const [showItem, setShowItem] = useState(false)


  const handleClick = () => {
    setShowItem(!showItem)
  };
  return (
    <div>
      {/* Header */}
      <div
        className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 cursor-pointer text-gray-800"
      >
        <div className="flex justify-between cursor-pointer items-center"  onClick={handleClick}>
          <span className="font-semibold text-lg"> 
            {data.title} ({data.itemCards.length})
          </span>
          <span><FaChevronDown/></span>
        </div>

        {/* Accordian Body */}
        {showItem && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;


