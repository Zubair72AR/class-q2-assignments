"use client";
import Button from "../components/Button";
import HeadingBr from "../components/HeadingBr";
import Para from "../components/Para";
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
        <div className="bg-[#043873]">
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
