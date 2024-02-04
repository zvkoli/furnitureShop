const LoadingSkeletonProductCard = () => {
  return (
   <div className="w-2/12 h-96 flex flex-col justify-start items-center bg-gray-200 shadow py-6 animate-pulse rounded-xl gap-10">
    <div className="w-5/6 h-3/6 flex flex-row justify-center items-center bg-gray-300 rounded-xl"></div>
    <div className="w-full h-2/6 flex flex-col justify-between items-center border-2">
      <div className="w-4/6 h-4 bg-gray-300 rounded"></div>
      <div className="w-4/6 h-4 bg-gray-300 rounded"></div>
      <div className="w-4/6 h-4 bg-gray-300 px-6 py-6 rounded-md text-white shadow"></div>
    </div>
   </div>
  );
}

export default LoadingSkeletonProductCard;