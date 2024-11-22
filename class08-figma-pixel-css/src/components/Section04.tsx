"use client";
import Button from "./Button";
import HeadingBr from "./HeadingBr";
import Para from "./Para";
import Image from "next/image";
import Use_as_Extension from "../../public/Use_as_Extension.png";

export default function Section04() {
  const handleClick = () => {
    alert("Button Clicked");
  };

  return (
    <div className="section-four">
      <div className="content">
        <HeadingBr headText="Use as Extension" headClass="heading" />
        <Para
          paraText="Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes."
          paraClass="paragraph"
        />
        <Button text="Let’s Go" btnClass="button" onClick={handleClick} />
      </div>
      <Image
        src={Use_as_Extension}
        alt="Hero Image"
        className="extension-image"
      />
    </div>
  );
}
