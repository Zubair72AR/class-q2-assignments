"use client";
import Button from "./Button";
import HeadingBr from "./HeadingBr";
import Para from "./Para";
import Image from "next/image";
import Favorite_Apps from "../../public/Favorite_Apps.svg";

export default function Section10() {
  const handleClick = () => {
    alert("Button Clicked");
  };

  return (
    <div className="section10-container">
      <div className="content">
        <HeadingBr
          headText="Work with Your Favorite Apps Using whitepace"
          headClass="heading"
        />
        <Para
          paraText="Whitepace teams up with your favorite software. Integrate with over 1000+ apps with Zapier to have all the tools you need for your project success."
          paraClass="para"
        />
        <Button text="Read more" btnClass="btn" onClick={handleClick} />
      </div>
      <Image src={Favorite_Apps} alt="Hero Image" className="image" />
    </div>
  );
}
