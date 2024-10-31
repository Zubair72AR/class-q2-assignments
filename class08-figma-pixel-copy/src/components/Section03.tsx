"use client";
import Button from "../components/Button";
import HeadingBr from "../components/HeadingBr";
import Para from "../components/Para";
import Image from "next/image";
import Work_Together from "../../public/Work_Together.svg";

export default function Section03() {
  const handleClick = () => {
    alert("Button Clicked");
  };

  return (
    <div className="flex lg:flex-row-reverse flex-col justify-between items-center gap-20 lg:gap-6 2xl:gap-12 py-12 md:py-24 px-4 md:px-6 xl:px-8 2xl:px-44 bg-white text-center lg:text-start">
      <div className="flex flex-col justify-center items-center lg:items-start gap-5 w-full sm:w-[90%] md:w-[80%] lg:w-1/2">
        <HeadingBr
          headText="Work together"
          headClass="text-[#212529] bg-[url('../../public/Shape.svg')] bg-no-repeat bg-[center_110%]"
        />
        <Para
          paraText="With whitepace, share your notes with your colleagues and collaborate on them. You can also publish a note to the internet and share the URL with others.
"
          paraClass="text-[#212529]"
        />
        <Button
          text="Try it now"
          btnClass="mx-auto lg:mx-0 mt-4"
          onClick={handleClick}
        />
      </div>
      <Image
        src={Work_Together}
        alt="Hero Image"
        className="w-full sm:w-[85%] md:w-[75%] lg:w-auto h-auto lg:h-[450px] xl:h-[500px] 2xl:h-[550px]"
      />
    </div>
  );
}
