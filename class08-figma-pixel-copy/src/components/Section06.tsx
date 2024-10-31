"use client";
import Button from "./Button";
import HeadingBr from "./HeadingBr";
import Para from "./Para";
import { FiCheckCircle } from "react-icons/fi";
import Image from "next/image";

export default function Section06() {
  const handleClick = () => {
    alert("Button Clicked");
  };

  return (
    <div className="flex flex-col justify-between items-center gap-8 py-12 md:py-24 px-4 md:px-6 xl:px-8 2xl:px-44 bg-white text-center">
      <div className="flex flex-col justify-center items-center gap-5 w-full sm:w-[90%] md:w-[80%] lg:w-1/2">
        <HeadingBr
          headText="Choose Your Plan"
          headClass="text-[#212529] bg-[url('../../public/Shape.svg')] bg-no-repeat bg-[center_110%]"
        />
        <Para
          paraText="Whether you want to get organized, keep your personal life on track, or boost workplace productivity, Evernote has the right plan for you."
          paraClass="text-[#212529]"
        />
      </div>
      <div>
        <div className="bg-[#043873] px-10 py-12 rounded-xl border-2 border-[#FFE492] max-w-[450px] flex flex-col justify-start items-start gap-8 text-white">
          <div className="flex flex-col gap-7 text-left">
            <p className="font-semibold text-2xl">Free</p>
            <p className="font-bold text-4xl text-[#FFE492]">$0</p>
            <p className="font-medium text-lg">
              Capture ideas and find them quickly
            </p>
          </div>
          <div className="flex flex-col gap-6 text-left">
            <p className="grid grid-cols-10">
              <FiCheckCircle className="text-lg text-[#FFE492] w-6 h-6 col-span-1" />
              <span className="text-[16px] col-span-9">
                Sync unlimited devices
              </span>
            </p>
            <p className="grid grid-cols-10">
              <FiCheckCircle className="text-lg text-[#FFE492] w-6 h-6 col-span-1" />
              <span className="text-[16px] col-span-9">
                10 GB monthly uploads
              </span>
            </p>
            <p className="grid grid-cols-10">
              <FiCheckCircle className="text-lg text-[#FFE492] w-6 h-6 col-span-1" />
              <span className="text-[16px] col-span-9">
                200 MB max. note size
              </span>
            </p>
            <p className="grid grid-cols-10">
              <FiCheckCircle className="text-lg text-[#FFE492] w-6 h-6 col-span-1" />
              <span className="text-[16px] col-span-9">
                Customize Home dashboard and access extra widgets
              </span>
            </p>
            <p className="grid grid-cols-10">
              <FiCheckCircle className="text-lg text-[#FFE492] w-6 h-6 col-span-1" />
              <span className="text-[16px] col-span-9">
                Connect primary Google Calendar account
              </span>
            </p>
            <p className="grid grid-cols-10">
              <FiCheckCircle className="text-lg text-[#FFE492] w-6 h-6 col-span-1" />
              <span className="text-[16px] col-span-9">
                Add due dates, reminders, and notifications to your tasks
              </span>
            </p>
          </div>
          <button
            className="px-5 py-[10px] rounded-lg shadow-md text-white bg-[#4F9CF9] hover:bg-[#A7CEFC] hover:text-[#043873]"
            onClick={handleClick}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
