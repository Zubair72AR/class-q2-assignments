"use client";
import Button from "./Button";
import HeadingBr from "./HeadingBr";
import Para from "./Para";
import Cartoon from "../../public/Cartoon.png";
import Image from "next/image";

export default function Section07() {
  const handleClick = () => {
    alert("Button Clicked");
  };

  return (
    <div className="section07-container">
      <div className="content">
        <HeadingBr
          headText="Your work, everywhere you are"
          headClass="heading"
        />
        <Para
          paraText="Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!"
          paraClass="description"
        />
        <Button text="Try Taskey" btnClass="button" onClick={handleClick} />
      </div>
      <Image src={Cartoon} alt="Cartoon" className="cartoon-image" />
    </div>
  );
}
