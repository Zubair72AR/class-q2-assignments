"use client";
import HeadingBr from "../components/HeadingBr";
import Image from "next/image";
import Logo_Apple from "../../public/Logo_Apple.svg";
import Logo_Google from "../../public/Logo_Google.svg";
import Logo_Microsoft from "../../public/Logo_Microsoft.svg";
import Logo_Slack from "../../public/Logo_Slack.svg";

export default function Section09() {
  return (
    <div className="text-center flex flex-col gap-20 bg-white py-12 md:py-24 px-4 md:px-6 xl:px-8 2xl:px-44">
      <HeadingBr
        headText="Our sponsors"
        headClass="text-[#212529] bg-[url('../../public/Shape.svg')] bg-no-repeat bg-[center_110%]"
      />
      <div className="flex justify-between items-center gap-20 lg:gap-0 lg:flex-row flex-col">
        <Image src={Logo_Apple} alt="Logo_Apple" className="h-16 w-auto" />
        <Image
          src={Logo_Microsoft}
          alt="Logo_Microsoft"
          className="h-16 w-auto"
        />
        <Image src={Logo_Slack} alt="Logo_Slack" className="h-16 w-auto" />
        <Image src={Logo_Google} alt="Logo_Google" className="h-16 w-auto" />
      </div>
    </div>
  );
}
