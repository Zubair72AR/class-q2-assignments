"use client";
import Button from "../components/Button";
import HeadingBr from "../components/HeadingBr";
import Para from "../components/Para";
import Image from "next/image";
import Use_as_Extension from "../../public/Use_as_Extension.png";

export default function Section04() {
  const handleClick = () => {
    alert("Button Clicked");
  };

  return (
    <div className="flex lg:flex-row flex-col justify-between items-center gap-20 lg:gap-6 2xl:gap-12 py-12 md:py-24 px-4 md:px-6 xl:px-8 2xl:px-44 bg-[#043873] text-center lg:text-start">
      <div className="flex flex-col justify-center items-center lg:items-start gap-5 w-full sm:w-[90%] md:w-[80%] lg:w-1/2">
        <HeadingBr
          headText="Use as Extension"
          headClass="text-white bg-[url('../../public/Shape.svg')] bg-no-repeat bg-bottom"
        />
        <Para
          paraText="Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes."
          paraClass="text-white"
        />
        <Button
          text="Let’s Go"
          btnClass="mx-auto lg:mx-0 mt-4"
          onClick={handleClick}
        />
      </div>
      <Image
        src={Use_as_Extension}
        alt="Hero Image"
        className="w-full sm:w-[95%] md:w-[85%] lg:w-auto h-auto lg:h-[340px] xl:h-[370px] 2xl:h-[400px]"
      />
    </div>
  );
}
