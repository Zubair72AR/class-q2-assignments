"use client";
import Button from "../components/Button";
import HeadingBr from "../components/HeadingBr";
import Para from "../components/Para";
import Image from "next/image";
import WebDevelop from "../../public/WebDevelop.svg";

export default function section01() {
  const handleClick = () => {
    alert("Button Clicked");
  };

  return (
    <div className="flex justify-center items-center gap-12 px-12 bg-[#222222]">
      <div className="w-[500px]">
        <HeadingBr
          heading1="Get More Done with"
          heading2="Whitepace"
          color="text-green-500"
        />
        <Para
          para="Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks"
          color="text-white"
        />
        <Button text="Try Whitepace free" btnClass="" onClick={handleClick} />
      </div>
      <Image src={WebDevelop} alt="Web Image" className="w-[500px]" />
    </div>
  );
}
