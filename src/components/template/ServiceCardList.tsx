import ServiceCard from "@/components/module/ServiceCard";
import { ServiceCardListProps } from "@/types/ServiceCardListProps";
import { HiTruck } from "react-icons/hi2";
import { GiSwipeCard } from "react-icons/gi";
import { GoCheckCircleFill } from "react-icons/go";
import { FaHeadphonesAlt } from "react-icons/fa";

const dataCard: ServiceCardListProps[] = [
  {
    icon: <HiTruck />,
    title: "ارسال رایگان",
    text: "برای سفارش های بالای 400 هزار تومان",
  },
  {
    icon: <GiSwipeCard />,
    title: "گارانتی بازگشت وجه",
    text: "گارانتی 7 روزه بازگشت وجه",
  },
  {
    icon: <GoCheckCircleFill />,
    title: "تضمین اصالت کالا",
    text: "تضمین اصل بودن محصول",
  },
  {
    icon: <FaHeadphonesAlt />,
    title: "پشتیبانی آنلاین",
    text: "پشتیبانی 24 ساعته آنلاین",
  },
];

const ServiceCardList: React.FC = () => {
  return (
    <div className="w-full h-auto flex flex-row justify-center items-center gap-4 py-20">
      {dataCard.map((card, index) => (
        <ServiceCard
          key={String(index)}
          icon={card.icon}
          title={String(card.title)}
          text={String(card.text)}
        />
      ))}
    </div>
  );
};

export default ServiceCardList;
