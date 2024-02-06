import { FaInstagram } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaPhoneFlip } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="w-full h-full flex flex-row justify-center items-start bg-[#F0F0F1] p-20 shadow cursor-default">
      <div className="w-8/12 h-full flex flex-row justify-start items-start gap-10">
         <div className="flex flex-col justify-start items-start gap-9">
            <p className="text-[1.10rem] text-[#000000]">
               اطلاعات
            </p>
            <div className="flex flex-col justify-start items-start gap-3 text-[#ABB1BB] text-[0.90rem]">
               <p>درباره ما</p>
               <p>سوالات متداول</p>
               <p>حفظ حریم شخصی</p>
               <p>قوانین و مقررات</p>
            </div>
         </div>
         <div className="flex flex-col justify-center items-start gap-9">
            <p className="text-[1.10rem] text-[#000000]">
               با ما باشید
            </p>
            <div className="flex flex-col justify-start items-start gap-3 text-[#ABB1BB] text-[0.90rem]">
               <p>ثبت نام کنید</p>
               <p>پیگیری سفارش</p>
               <p>بازگرداننده کالا</p>
               <p>کوین تخفیف</p>
               <p>رهگیری بسته پستی</p>
            </div>
         </div>
         <div className="flex flex-col justify-center items-start gap-9">
            <p className="text-[1.10rem] text-[#000000]">
               راهنمای مشتریان
            </p>
            <div className="flex flex-col justify-start items-start gap-3 text-[#ABB1BB] text-[0.90rem]">
               <p>نحوه ثبت سفارش</p>
               <p>رویه ارسال سفارش</p>
               <p>رویه های بازگشت کالا</p>
               <p>شیوه های پرداخت</p>
               <p>رهگیری بسته پستی</p>
            </div>
         </div>
         <div className="flex flex-col justify-center items-start gap-9">
            <p className="text-[1.10rem] text-[#000000]">
               ما را دنبال کنید
            </p>
            <div className="flex flex-col justify-start items-start gap-3 text-[#ABB1BB] text-[0.90rem]">
               <div className="flex flex-row justify-start items-center gap-3">
                  <FaInstagram className="text-[1.5rem] text-[#000000]"/>
                  <p className="text-[#000000]">اینستاگرام</p>
               </div>
               <div className="flex flex-row justify-start items-center gap-3">
                  <FaTelegram className="text-[1.5rem] text-[#000000]"/>
                  <p className="text-[#000000]">تلگرام</p>
               </div>
               <div className="flex flex-row justify-start items-center gap-3">
                  <FaWhatsapp className="text-[1.60rem] text-[#000000]"/>
                  <p className="text-[#000000]">واتساپ</p>
               </div>
               <div className="flex flex-row justify-start items-center gap-3">
                  <FaFacebook className="text-[1.5rem] text-[#000000]"/>
                  <p className="text-[#000000]">فیسبوک</p>
               </div>
            </div>
         </div>
      </div>
      <div className="w-4/12 h-full flex flex-col justify-start items-start gap-10">
         <div className="flex flex-row justify-center items-center gap-4">
            <FaPhoneFlip className="text-[1.5rem] text-[#000000]"/>
            <div className="flex flex-col justify-center items-start gap-3 text-[#ABB1BB] text-[0.90rem]">
               <p className="text-[#ABB1BB]">تلفن</p>
               <p className="text-[#000000]">09198877131</p>
            </div>
         </div>
         <div className="flex flex-row justify-center items-center gap-4">
            <IoLocationSharp className="text-[1.60rem] text-[#000000]"/>
            <div className="flex flex-col justify-center items-start gap-3 text-[#ABB1BB] text-[0.90rem]">
               <p className="text-[#ABB1BB]">آدرس</p>
               <p className="text-[#000000]">تهران خیابان ادهم بین نادری و کافی</p>
            </div>
         </div>
      </div>
    </div>
  );
}

export default Footer;