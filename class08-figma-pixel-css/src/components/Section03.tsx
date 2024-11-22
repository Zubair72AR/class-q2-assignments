"use client";
import Button from "./Button";
import HeadingBr from "./HeadingBr";
import Para from "./Para";
import Image from "next/image";
import Work_Together from "../../public/Work_Together.svg";

export default function Section03() {
  const handleClick = () => {
    alert("Button Clicked");
  };

  return (
    <div className="section-three">
      <div className="content">
        <HeadingBr headText="Work together" headClass="heading" />
        <Para
          paraText="With whitepace, share your notes with your colleagues and collaborate on them. You can also publish a note to the internet and share the URL with others."
          paraClass="paragraph"
        />
        <Button text="Try it now" btnClass="button" onClick={handleClick} />
      </div>
      <Image src={Work_Together} alt="Hero Image" className="work-image" />
    </div>
  );
}
