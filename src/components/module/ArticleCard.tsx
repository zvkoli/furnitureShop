import { FaAngleLeft } from "react-icons/fa6";

interface ArticleCardProps {
   title: string;
}

const ArticleCard:React.FC<ArticleCardProps> = ({ title }) => {
  return (
    <div className="w-2/12 h-auto flex flex-col justify-center items-start gap-4 bg-white rounded-xl shadow p-5">
      <p className="text-[0.90rem] cursor-default">
        {title}
      </p>
      <button className="flex flex-row justify-center items-center gap-1 text-[#ABB1BB] text-[0.80rem]">
      ادامه
      <FaAngleLeft />
      </button>
    </div>
  );
}

export default ArticleCard;