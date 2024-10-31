"use client";
import Button from "../components/Button";
import HeadingBr from "../components/HeadingBr";
import Para from "../components/Para";
import Image from "next/image";
import Project_Management from "../../public/Project_Management.jpg";

export default function Section02() {
  const handleClick = () => {
    alert("Button Clicked");
  };

  return (
    <div className="flex lg:flex-row flex-col justify-between items-center gap-20 lg:gap-6 2xl:gap-12 py-12 md:py-24 px-4 md:px-6 xl:px-8 2xl:px-44 bg-white bg-[url('../../public/Project_Management_Lines.svg')] bg-[length:300px]  lg:bg-[length:400px] lg:bg-left-bottom bg-[left_-5rem_top_2rem] bg-no-repeat text-center lg:text-start">
      <div className="flex flex-col justify-center items-center lg:items-start gap-5 w-full sm:w-[90%] md:w-[80%] lg:w-1/2">
        <HeadingBr
          headText="Project Management"
          headClass="text-[#212529] bg-[url('../../public/Shape.svg')] bg-no-repeat bg-[center_110%]"
        />
        <Para
          paraText="Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note."
          paraClass="text-[#212529]"
        />
        <Button
          text="Get Started"
          btnClass="mx-auto lg:mx-0 mt-4"
          onClick={handleClick}
        />
      </div>
      <Image
        src={Project_Management}
        alt="Hero Image"
        className="w-full sm:w-[95%] md:w-[85%] lg:w-auto h-auto lg:h-[370px] xl:h-[400px] 2xl:h-[420px]"
      />
    </div>
  );
}
