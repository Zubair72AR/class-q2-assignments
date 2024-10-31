"use client";
import Button from "../components/Button";
import HeadingBr from "../components/HeadingBr";
import Para from "../components/Para";
import { FiCheckCircle } from "react-icons/fi";
import Image from "next/image";

export default function Section06() {
  const handleClick = () => {
    alert("Button Clicked");
  };

  return (
    <div className="flex flex-col justify-between items-center gap-8 py-12 md:py-24 px-4 md:px-6 xl:px-8 2xl:px-44 bg-white text-center"></div>
  );
}
