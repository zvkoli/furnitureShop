import Menubar from "./Menubar";
import SearchBox from "./SearchBox";
import { LuUser2 } from "react-icons/lu";
import { GoHeart } from "react-icons/go";
import { LuShoppingCart } from "react-icons/lu";

const Navbar: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col items-center font-Sans">
      <div className="w-full h-auto flex flex-row p-2">
         <div className="w-4/6 h-auto pr-6">
            <SearchBox />
         </div>
         <div className="w-2/6 h-auto flex flex-row justify-end items-center pl-6">
            <button className="ui button !font-Sans !text-[0.90rem] !text-white !bg-blue-900 !font-thin">
            ورود و ثبت نام
            </button>
         </div>
      </div>
      <div className="w-full h-full flex flex-row items-center px-10">
         <div className="w-4/6 h-auto">
            <Menubar />
         </div>
         <div className="w-2/6 h-auto flex flex-row justify-end items-center text-[1.5rem] gap-4 pl-3">
            <button className="">
               <LuUser2 />
            </button>
            <button>
               <GoHeart />
            </button>
            <button>
               <LuShoppingCart />
            </button>
         </div>
      </div>
    </div>
  );
}

export default Navbar;