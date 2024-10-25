"use client";
import Button from "@/components/Button";
import HeadingBr from "@/components/HeadingBr";
import Para from "@/components/Para";
import Image from "next/image";

export default function Home() {
  const handleClick = () => {
    alert("Button Clicked");
  };

  return (
    <div>
      <div>
        <HeadingBr
          heading1="Get More Done with"
          heading2="Whitepace"
          color="text-gray-800"
        />
        <Para
          para="Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks"
          color="text-gray-800"
        />
        <Button
          text="Try Whitepace free"
          color="bg-red-500"
          mTop="mt-0"
          mBottom="mb-0"
          onClick={handleClick}
        />
      </div>
      <Image src="" alt="" />
    </div>
  );
}
