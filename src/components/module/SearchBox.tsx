import { useState} from "react";
import { IoIosSearch } from "react-icons/io";

const SearchBox: React.FC = () => {

   const[inputValue, setInputValue] = useState<String>('');

   const handleSearch = (e: React.FormEvent) => {
      e.preventDefault();
      // console.log(inputValue);
   }

  return (
    <form
    className="w-3/6 h-full flex flex-row justify-start items-center gap-2 bg-[#F0F0F1] p-2 rounded-md"
    onSubmit={handleSearch}
    >
      <IoIosSearch className="text-[1.75rem] text-[#9ea4ae]" />
      <input
      className="w-full h-full font-Sans outline-none bg-[#F0F0F1] text-[0.90rem]"
      type="text"
      value={inputValue as string}
      onChange={(e) => setInputValue(e.target.value)}
      placeholder="جستجو"
      />
    </form>
  );
}

export default SearchBox;