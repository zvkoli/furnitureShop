// import { ProductListProps } from "@/types/ProductListProps";
// import ProductCard from "../module/ProductCard";
// import { FaAngleLeft } from "react-icons/fa6";
// import { useEffect, useState } from "react";

// const LoadingSkeleton = () => (
//   <div className="w-2/12 h-96 flex flex-col justify-start items-center bg-gray-200 shadow py-6 animate-pulse rounded-xl gap-10">
//     <div className="w-5/6 h-3/6 flex flex-row justify-center items-center bg-gray-300 rounded-xl"></div>
//     <div className="w-full h-2/6 flex flex-col justify-between items-center border-2">
//       <div className="w-4/6 h-4 bg-gray-300 rounded"></div>
//       <div className="w-4/6 h-4 bg-gray-300 rounded"></div>
//       <div className="w-4/6 h-4 bg-gray-300 px-6 py-6 rounded-md text-white shadow"></div>
//     </div>
//   </div>
// );

// const ProductList: React.FC<ProductListProps> = ({ data }) => {
//   const [showSkeleton, setShowSkeleton] = useState<Boolean>(true);

//   useEffect(() => {
//     const timeoutId = setTimeout(() => {
//       setShowSkeleton(false);
//     }, 50);

//     return () => clearTimeout(timeoutId);
//   }, []);

//   return (
//     <div className="w-full h-full flex flex-row justify-center items-center flex-wrap gap-4">
//       {showSkeleton &&
//         Array.from({ length: 5 }).map((_, index) => (
//           <LoadingSkeleton key={index} />
//         ))}
//       {!showSkeleton &&
//         data.map((index) => <ProductCard key={index.id} product={index} />)}
//       <button className="flex flex-row justify-center items-center gap-1 text-[#ABB1BB] text-[0.80rem]">
//         بیشتر
//         <FaAngleLeft />
//       </button>
//     </div>
//   );
// };

// export default ProductList;


import { useEffect, useState } from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { ProductListProps } from "@/types/ProductListProps";
import ProductCard from "../module/ProductCard";

const LoadingSkeleton = () => (
  <div className="w-2/12 h-96 flex flex-col justify-start items-center bg-gray-200 shadow py-6 animate-pulse rounded-xl gap-10">
    <div className="w-5/6 h-3/6 flex flex-row justify-center items-center bg-gray-300 rounded-xl"></div>
    <div className="w-full h-2/6 flex flex-col justify-between items-center border-2">
      <div className="w-4/6 h-4 bg-gray-300 rounded"></div>
      <div className="w-4/6 h-4 bg-gray-300 rounded"></div>
      <div className="w-4/6 h-4 bg-gray-300 px-6 py-6 rounded-md text-white shadow"></div>
    </div>
  </div>
);

const ProductList: React.FC<ProductListProps> = ({ data }) => {
  
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (data && data.length > 0) {
      setLoading(false);
    }
  },[data]);

  return (
    <div className="w-full h-full flex flex-row justify-center items-center flex-wrap gap-4">
      {loading &&
        Array.from({ length: 5 }).map((_, index) => (
          <LoadingSkeleton key={index} />
        ))}
      {!loading &&
        data.map((product) => <ProductCard key={product.id} product={product} />)}
      <button className="flex flex-row justify-center items-center gap-1 text-[#ABB1BB] text-[0.80rem]">
        بیشتر
        <FaAngleLeft />
      </button>
    </div>
  );
};

export default ProductList;

