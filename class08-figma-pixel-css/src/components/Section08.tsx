"use client";
import Button from "./Button";
import HeadingBr from "./HeadingBr";
import Para from "./Para";
import Image from "next/image";
import Your_Data from "../../public/Your_Data.svg";

export default function Section08() {
  const handleClick = () => {
    alert("Button Clicked");
  };

  return (
    <div className="section08-container">
      <div className="content">
        <HeadingBr headText="100% your data" headClass="heading" />
        <Para
          paraText="The app is open source and your notes are saved to an open format, so you'll always have access to them. Uses End-To-End Encryption (E2EE) to secure your notes and ensure no-one but yourself can access them."
          paraClass="description"
        />
        <Button text="Read more" btnClass="button" onClick={handleClick} />
      </div>
      <Image src={Your_Data} alt="Hero Image" className="hero-image" />
    </div>
  );
}
