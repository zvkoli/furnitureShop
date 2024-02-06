const LoadingSkeletonArticleCard = () => {
  return (
   <div className="w-2/12 h-auto flex flex-col justify-center items-start gap-4 bg-gray-200 rounded-xl shadow p-5 animate-pulse">
    <div className="w-3/4 h-4 bg-gray-300 rounded-xl"></div>
    <div className="w-5/6 h-4 bg-gray-300 rounded-xl"></div>
    <div className="w-4/6 h-4 bg-gray-300 rounded-xl"></div>
   </div>
  );
}

export default LoadingSkeletonArticleCard;