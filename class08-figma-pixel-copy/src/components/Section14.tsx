import { IoHeartSharp } from "react-icons/io5";
import { PiCopyrightBold } from "react-icons/pi";

export default function Section14() {
  return (
    <div className="py-2 px-4 md:px-6 xl:px-8 2xl:px-44 bg-black">
      <p className="text-xs md:text-md lg:text-lg text-white flex justify-center items-center gap-1">
        Made with <IoHeartSharp className="text-red-600 text-xl" /> by BinJan{" "}
        <PiCopyrightBold /> Copy Rights Reserved
      </p>
    </div>
  );
}
