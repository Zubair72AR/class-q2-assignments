"use client";
import Button from "./Button";
import Logo_Icon from "../../public/Logo_Icon.svg";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";

export default function Section13() {
  const handleClick = () => {
    alert("Button Clicked");
  };

  return (
    <div className="pt-12 md:pt-24 px-4 md:px-6 xl:px-8 2xl:px-44 bg-[#043873]">
      <div className="text-center md:text-start grid grid-cols-1 lg:grid-cols-5 gap-12 mb-12 ">
        <div className="flex flex-col justify-center items-center md:block">
          <Link href="/" className="flex justify-start items-center gap-2 mb-3">
            <Image
              src={Logo_Icon}
              alt="Logo Icon"
              className="w-[26px] md:w-[37px]"
            />
            <h1 className="font-bold text-[24px] md:text-[28px] text-white">
              whitepace
            </h1>
          </Link>
          <p className="font-light text-white">
            whitepace was created for the new ways we live and work. We make a
            better workspace around the world
          </p>
        </div>
        <div>
          <p className="mb-2 text-lg font-medium text-white">Product</p>
          <p className="mb-2 font-light text-white">Overview</p>
          <p className="mb-2 font-light text-white">Pricing</p>
          <p className="mb-2 font-light text-white">Customer stories</p>
        </div>
        <div>
          <p className="mb-2 text-lg font-medium text-white">Resources</p>
          <p className="mb-2 font-light text-white">Blog</p>
          <p className="mb-2 font-light text-white">Guides & tutorials</p>
          <p className="mb-2 font-light text-white">Help center</p>
        </div>
        <div>
          <p className="mb-2 text-lg font-medium text-white">Company</p>
          <p className="mb-2 font-light text-white">About us</p>
          <p className="mb-2 font-light text-white">Careers</p>
          <p className="mb-2 font-light text-white">Media kit</p>
        </div>
        <div>
          <p className="mb-3 text-2xl font-bold text-white">Try It Today</p>
          <p className="mb-5 font-light text-white">
            Get started for free. Add your whole team as your needs grow.
          </p>
          <Button
            text="Start today"
            btnClass="mx-auto md:mx-0"
            onClick={handleClick}
          />
        </div>
      </div>
      <hr className="text-[#4F9CF9] opacity-25 hidden lg:block" />
      <div className="block lg:flex justify-between items-center py-5">
        <div className="block sm:flex justify-center md:justify-start items-center gap-7 my-6 lg:my-0 text-center sm:text-start">
          <div className="flex justify-center items-center gap-1 text-white my-2 sm:my-0">
            <label htmlFor="Languages">
              <MdLanguage />
            </label>
            <select className="font-light bg-[#043873] outline-none">
              <option value="English" className="outline-none bg-none">
                English
              </option>
              <option value="English" className="outline-none bg-none">
                Arabic
              </option>
              <option value="English" className="outline-none bg-none">
                Urdu
              </option>
              <option value="English" className="outline-none bg-none">
                Spanish
              </option>
              <option value="English" className="outline-none bg-none">
                Italian
              </option>
            </select>
          </div>
          <p className="font-light text-white my-2 sm:my-0">Terms & privacy</p>
          <p className="font-light text-white my-2 sm:my-0">Security</p>
          <p className="font-light text-white my-2 sm:my-0">Status</p>
          <p className="font-light text-white my-2 sm:my-0">
            ©2021 Whitepace LLC.
          </p>
        </div>
        <hr className="text-[#4F9CF9] opacity-25 block lg:hidden" />
        <div className="flex justify-center md:justify-start items-center gap-6 text-white my-6 lg:my-0 text-center sm:text-start">
          <FaFacebookF className="hover:text-[#4F9CF9] hover:scale-150 transition-all" />
          <FaTwitter className="hover:text-[#4F9CF9] hover:scale-150 transition-all" />
          <FaLinkedinIn className="hover:text-[#4F9CF9] hover:scale-150 transition-all" />
        </div>
      </div>
    </div>
  );
}
