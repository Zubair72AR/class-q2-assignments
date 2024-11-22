"use client";
import HeadingBr from "./HeadingBr";
import Image from "next/image";
import Logo_Apple from "../../public/Logo_Apple.svg";
import Logo_Google from "../../public/Logo_Google.svg";
import Logo_Microsoft from "../../public/Logo_Microsoft.svg";
import Logo_Slack from "../../public/Logo_Slack.svg";

export default function Section09() {
  return (
    <div className="section09-container">
      <HeadingBr headText="Our sponsors" headClass="heading" />
      <div className="sponsor-logos">
        <Image src={Logo_Apple} alt="Logo_Apple" className="logo" />
        <Image src={Logo_Microsoft} alt="Logo_Microsoft" className="logo" />
        <Image src={Logo_Slack} alt="Logo_Slack" className="logo" />
        <Image src={Logo_Google} alt="Logo_Google" className="logo" />
      </div>
    </div>
  );
}
