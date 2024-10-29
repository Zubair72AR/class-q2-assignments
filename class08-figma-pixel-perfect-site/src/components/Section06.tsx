"use client";
import Button from "../components/Button";
import HeadingBr from "../components/HeadingBr";
import Para from "../components/Para";
import { FiCheckCircle } from "react-icons/fi";
import Image from "next/image";

export default function Section05() {
  const handleClick = () => {
    alert("Button Clicked");
  };

  return (
    <div className="flex flex-col justify-between items-center gap-8 py-12 md:py-24 px-4 md:px-6 xl:px-8 2xl:px-44 bg-white text-center">
      <div className="flex flex-col justify-center items-center gap-5 w-full sm:w-[90%] md:w-[80%] lg:w-1/2">
        <HeadingBr
          headText="Choose Your Plan"
          headClass="text-[#212529] bg-[url('../../public/Shape.svg')] bg-no-repeat bg-[center_110%]"
        />
        <Para
          paraText="Whether you want to get organized, keep your personal life on track, or boost workplace productivity, Evernote has the right plan for you."
          paraClass="text-[#212529]"
        />
      </div>
      <div>
        <div className="bg-[#043873] text-left px-10 py-12 rounded-xl border-2 border-[#FFE492]">
          <div className="flex flex-col gap-5">
            <p className="font-semibold text-2xl">Free</p>
            <p className="font-bold text-4xl">$0</p>
            <p className="font-medium text-lg">
              Capture ideas and find them quickly
            </p>
          </div>
          <div>
            <span className="flex justify-start items-center gap-2">
              <FiCheckCircle className="text-lg text-[#FFE492]" />
              <p className="font-medium text-[16px]">Sync unlimited devices</p>
            </span>
          </div>
          <Button
            text="Let’s Go"
            btnClass="mx-auto lg:mx-0 mt-4"
            onClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
}
