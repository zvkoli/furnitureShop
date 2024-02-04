import Image from "next/image";

const Banner = () => {
  return (
    <div className="w-full h-auto flex flex-row p-2 bg-[#F0F0F1]">
      <div className="w-4/6 h-auto flex flex-row justify-center items-center p-1">
        <Image
        src={'/assets/banner 1.webp'}
        alt="banner 1"
        width={1000}
        height={1000}
        />
      </div>
      <div className="w-2/6 h-auto flex flex-row justify-center items-center p-1">
        <Image
        src={'/assets/banner 2.webp'}
        alt="banner 1"
        width={1000}
        height={1000}
        />
      </div>
    </div>
  );
}

export default Banner;