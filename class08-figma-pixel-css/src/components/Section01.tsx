"use client";
import Button from "./Button";
import HeadingBr from "./HeadingBr";
import Para from "./Para";
import Image from "next/image";
import HeroImage from "../../public/Hero.svg";

export default function Section01() {
  const handleClick = () => {
    alert("Button Clicked");
  };

  return (
    <div className="section">
      <div className="content">
        <HeadingBr
          headText="Get More Done with whitepace"
          headClass="text-white"
        />
        <Para
          paraText="Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks"
          paraClass="text-white"
        />
        <Button
          text="Try Whitepace free"
          btnClass="button"
          onClick={handleClick}
        />
      </div>
      <Image src={HeroImage} alt="Hero Image" className="hero-image" />
    </div>
  );
}
