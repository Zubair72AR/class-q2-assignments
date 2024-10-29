"use client";
import Button from "../components/Button";
import HeadingBr from "../components/HeadingBr";
import Para from "../components/Para";
import Image from "next/image";
import HeroImage from "../../public/Hero.svg";
import HeroLines from "../../public/Hero_Lines.svg";

export default function section01() {
  const handleClick = () => {
    alert("Button Clicked");
  };

  return (
    <div className="flex lg:flex-row flex-col justify-between items-center gap-4 xl:gap-8 2xl:gap-12 py-12 md:py-24 px-4 md:px-6 xl:px-8 2xl:px-44 bg-[#043873] bg-[url('../../public/Hero_Lines.svg')] bg-cover bg-center text-center lg:text-start">
      <div>
        <HeadingBr
          headText="Get More Done with Whitepace"
          headClass="text-white"
        />
        <Para
          para="Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks"
          color="text-white"
        />
        <Button
          text="Try Whitepace free"
          btnClass="mx-auto lg:mx-0"
          onClick={handleClick}
        />
      </div>
      <Image
        src={HeroImage}
        alt="Web Image"
        className="w-[100%] sm:w-[95%] md:w-[85%] lg:w-auto h-auto lg:h-[340px] xl:h-[370px] 2xl:h-[400px]"
      />
    </div>
  );
}
