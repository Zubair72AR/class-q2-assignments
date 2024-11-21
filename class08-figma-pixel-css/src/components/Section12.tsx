"use client";
import Button from "./Button";
import { FaApple } from "react-icons/fa";
import { TiVendorMicrosoft } from "react-icons/ti";
import { DiAndroid } from "react-icons/di";

export default function Section12() {
  const handleClick = () => {
    alert("Button Clicked");
  };

  return (
    <div className="flex flex-col justify-between items-center gap-8 pt-12 md:pt-24 pb-5 px-4 md:px-6 xl:px-8 2xl:px-44 bg-[#043873] text-center">
      <h1 className="font-bold text-[36px] md:text-[54px] lg:text-[64px] leading-tight text-white">
        Try Whitepace
        <br />
        today
      </h1>
      <p className="text-base md:text-lg font-normal text-white">
        Get started for free.
        <br />
        Add your whole team as your needs grow.
      </p>
      <Button text="Try Taskey free" btnClass="mx-auto" onClick={handleClick} />
      <p className="text-base md:text-lg font-normal text-white">
        On a big team? Contact sales.
      </p>
      <div className="flex justify-center items-center gap-5 text-6xl text-white">
        <FaApple />
        <TiVendorMicrosoft />
        <DiAndroid />
      </div>
    </div>
  );
}
