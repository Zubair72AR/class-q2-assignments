"use client";
import Button from "./Button";
import HeadingBr from "./HeadingBr";
import Para from "./Para";
import Image from "next/image";
import Customise_it from "../../public/Customise_it.jpg";

export default function Section05() {
  const handleClick = () => {
    alert("Button Clicked");
  };

  return (
    <div className="section-five">
      <div className="content">
        <HeadingBr headText="Customise it to your needs" headClass="heading" />
        <Para
          paraText="Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API."
          paraClass="paragraph"
        />
        <Button text="Let’s Go" btnClass="button" onClick={handleClick} />
      </div>
      <Image src={Customise_it} alt="Hero Image" className="customise-image" />
    </div>
  );
}
