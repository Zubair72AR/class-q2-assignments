"use client";
import Button from "./Button";
import { FaApple } from "react-icons/fa";
import { TiVendorMicrosoft } from "react-icons/ti";
import { DiAndroid } from "react-icons/di";

export default function Section12() {
  const handleClick = () => {
    alert("Button Clicked");
  };

  return (
    <div className="section12-container">
      <h1 className="heading">
        Try Whitepace
        <br />
        today
      </h1>
      <p className="subheading">
        Get started for free.
        <br />
        Add your whole team as your needs grow.
      </p>
      <Button text="Try Taskey free" btnClass="mx-auto" onClick={handleClick} />
      <p className="subheading">On a big team? Contact sales.</p>
      <div className="icons-container">
        <FaApple />
        <TiVendorMicrosoft />
        <DiAndroid />
      </div>
    </div>
  );
}
