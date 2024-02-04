import {IServiceCard} from "@/types/props/IServiceCard";

const ServiceCard: React.FC<IServiceCard> = ({ icon, title, text }) => {
  return (
    <div className="w-2/12 h-28 flex flex-row justify-center items-center bg-white shadow rounded-xl p-5">
      <div className="w-4/12 h-full flex flex-row justify-center items-center text-[2.5rem] text-blue-900">
        {icon}
      </div>
      <div className="w-8/12 h-full flex flex-col justify-center items-strat gap-2 cursor-default">
        <p className="text-[0.90rem]">
          {title}
        </p>
        <p className="text-[0.65rem]">
          {text}
        </p>
      </div>
    </div>
  );
}

export default ServiceCard;