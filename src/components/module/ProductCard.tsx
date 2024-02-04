import { IProductCard } from "@/types/props/IProductCard";
import Image from "next/image";
import { englishToPersianNumber } from "@/utils/englishToPersianNumber";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux_toolkit/features/cartSlice";
// import { useEffect } from "react";
// import { RootState } from "@/redux_toolkit/store";
// import { useSelector } from "react-redux";
import { IProductWithCount } from "@/types/IProduct";

const ProductCard: React.FC<IProductCard> = ({ product }) => {
  const dispatch = useDispatch();
  // const cart = useSelector((state: RootState) => state.cart);

  const handleAddToCart = () => {
    const productWithCount: IProductWithCount = { ...product, count: 1 };
    dispatch(addToCart(productWithCount));
  };

  // useEffect(() => {
  //   console.log(cart)
  // },[cart])

  return (
    <div className="w-2/12 h-96 flex flex-col justify-start items-center bg-white rounded-xl shadow p-2">
      <div className="w-5/6 h-3/6 flex flex-row justify-center items-center">
        <Image
          src={"/assets/product-pic-default.jpg"}
          alt="product pic default"
          width={130}
          height={130}
        />
      </div>
      <div className="w-full h-2/6 flex flex-col justify-between items-center text-[0.90rem]">
        <div className="flex flex-col justify-center items-center gap-5 cursor-default">
          <p>{product.title}</p>
          <p>{englishToPersianNumber(product.price)}</p>
        </div>
        <button
          className="ui button !font-Sans !text-[0.90rem] !text-white !bg-blue-900 !font-thin"
          onClick={handleAddToCart}
        >
          افزودن به سبد خرید
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
