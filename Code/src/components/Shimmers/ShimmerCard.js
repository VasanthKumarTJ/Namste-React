const ShimmerCard = () => {
  return (
    <div className="w-[210px] flex justify-center items-center h-[270px] flex-col bg-gray-400">
      <div className="w-[210px] h-[150px] rounded-lg stroke animate bg-gray-300"></div>

      <div className="flex justify-center items-start gap-2 h-[120px] flex-col w-[210px] bg-gray-300">
        <div className="w-10/12 rounded-lg h-4 stroke animate bg-gray-400 "></div>

        <div className="flex justify-start items-start gap-2 h-4 flex-row w-[210px] bg-gray-300">
          <div className="w-4/12 rounded-lg h-4 stroke animate bg-gray-400 "></div>
          <div className="w-4/12 rounded-lg h-4 stroke animate bg-gray-400 "></div>
        </div>

        <div className="w-4/12 rounded-lg h-4 stroke animate  bg-gray-400"></div>
      </div>
    </div>
  );
};
export default ShimmerCard;