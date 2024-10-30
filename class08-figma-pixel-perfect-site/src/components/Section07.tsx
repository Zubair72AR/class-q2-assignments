"use client";
import Button from "../components/Button";
import HeadingBr from "../components/HeadingBr";
import Para from "../components/Para";
import Cartoon from "../../public/Cartoon.png";
import Image from "next/image";

export default function Section07() {
  const handleClick = () => {
    alert("Button Clicked");
  };

  return (
    <div className="flex flex-col justify-between items-center relative gap-8 py-12 md:py-24 px-4 md:px-6 xl:px-8 2xl:px-44 bg-[#043873] bg-[url('../../public/Your_work_Lines.svg')] bg-[length:300px]  lg:bg-[length:400px]  lg:bg-left-bottom bg-[left_-5rem_top_2rem] bg-no-repeat text-center">
      <div className="flex flex-col justify-center items-center gap-5 md:w-1/2 lg:w-4/6">
        <HeadingBr
          headText="Your work, everywhere you are"
          headClass="text-white bg-[url('../../public/Shape_Blue.svg')] bg-no-repeat bg-bottom bg-[length:50%] w-full lg:w-[80%] xl:w-[85%] 2xl:w-full"
        />
        <Para
          paraText="Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!"
          paraClass="text-white w-full lg:w-[80%] xl:w-[85%] 2xl:w-full"
        />
        <Button
          text="Try Taskey"
          btnClass="mx-auto lg:mx-0 mt-4"
          onClick={handleClick}
        />
      </div>
      <Image
        src={Cartoon}
        alt="Hero Image"
        className="block md:absolute -scale-x-100 w-[800px] md:w-[700px] gl:w-[700px] xl:w-[750px] 2xl:w-[800px] -bottom-16 md:-right-72 lg:-right-64 xl:-right-60"
      />
    </div>
  );
}
