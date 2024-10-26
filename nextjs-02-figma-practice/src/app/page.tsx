"use client";
import Button from "@/components/Button";
import HeadingBr from "@/components/HeadingBr";
import Para from "@/components/Para";
import Image from "next/image";
import WebDevelop from "../../public/WebDevelop.svg";
import Navbar from "@/components/Navbar";
import Section01 from "@/components/Section01";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="bg-[#222222]">
        <hr className="mx-12 border-[1px] border-[#282828]" />
      </div>
      <Section01 />
    </div>
  );
}
