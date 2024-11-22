"use client";
import Button from "./Button";
import HeadingBr from "./HeadingBr";
import Para from "./Para";
import Image from "next/image";
import Project_Management from "../../public/Project_Management.jpg";

export default function Section02() {
  const handleClick = () => {
    alert("Button Clicked");
  };

  return (
    <div className="section-two">
      <div className="content">
        <HeadingBr headText="Project Management" headClass="heading" />
        <Para
          paraText="Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note."
          paraClass="paragraph"
        />
        <Button text="Get Started" btnClass="button" onClick={handleClick} />
      </div>
      <Image
        src={Project_Management}
        alt="Hero Image"
        className="project-image"
      />
    </div>
  );
}
