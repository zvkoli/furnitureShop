import { useEffect, useState } from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { IProductList } from "@/types/props/IProductList";
import ProductCard from "@/components/module/ProductCard";
import LoadingSkeletonProductCard from "../module/LoadingSkeletonProductCard";

const ProductList: React.FC<IProductList> = ({ data }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (data && data.length > 0) {
      setLoading(false);
    }
  }, [data]);

  return (
    <div className="w-full h-full flex flex-row justify-center items-center flex-wrap gap-4">
      {loading &&
        Array.from({ length: 5 }).map((_, index) => (
          <LoadingSkeletonProductCard key={index} />
        ))}
      {!loading &&
        data.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      <button className="flex flex-row justify-center items-center gap-1 text-[#ABB1BB] text-[0.80rem]">
        بیشتر
        <FaAngleLeft />
      </button>
    </div>
  );
};

export default ProductList;
