"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoLogoXing } from "react-icons/io5";
import { HiMenuAlt3 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";

import {
  FaFacebookF,
  FaYoutube,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { useState } from "react";

interface Navigation {
  id: number;
  label: string;
  path: string;
}
const navigation: Navigation[] = [
  { id: 1, label: "Home", path: "/" },
  { id: 2, label: "About", path: "/about" },
  { id: 3, label: "Career", path: "/career" },
  { id: 4, label: "Skills", path: "/skills" },
  { id: 5, label: "Contact", path: "/contact" },
];

const Navbar = () => {
  {
    /* Setup for Active Link */
  }
  const usePath = usePathname();
  const isActive = (path: string) => path === usePath;

  /* Menu Toggle */
  const [menuOpen, setMenuOpen] = useState(false);

  function responsiveMenu() {
    let menuClass = [];
    if (menuOpen) {
      menuClass = [
        "top-16",
        "left-0",
        "p-12",
        "gap-10",
        "absolute",
        "bg-[#080808]",
        "w-full",
        "md:hidden",
      ];
    } else {
      menuClass = [
        "hidden",
        "md:flex",
        "justify-center",
        "items-center",
        "gap-5",
        "py-6",
      ];
    }
    return menuClass.join(" ");
  }

  return (
    <nav className="bg-[#080808] flex justify-between items-center px-12 h-16">
      {/* Logo */}
      <Link
        href="/"
        className="text-white flex justify-center items-center gap-2 text-3xl"
      >
        <IoLogoXing /> <h1 className="text-2xl font-medium">ZubairAR</h1>
      </Link>

      {/* Menu Links */}
      <ul className={responsiveMenu()}>
        {navigation.map((nav) => (
          <li key={nav.id}>
            <Link
              href={nav.path}
              className={
                isActive(nav.path)
                  ? "text-white"
                  : "text-gray-500 hover:text-gray-300"
              }
            >
              {nav.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Menu Icon */}

      <button
        className="flex justify-center items-center text-2xl text-white md:hidden"
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
      >
        {menuOpen ? <HiMenuAlt3 /> : <RxCross2 />}
      </button>
      <div className="hidden justify-center items-center text-white gap-2 md:flex">
        <Link
          href="https://www.facebook.com"
          className="bg-[#1e1e1e] p-[4px] rounded-md hover:bg-red-600 hover:text-white hover:scale-110 transition-all"
        >
          <FaFacebookF />
        </Link>
        <Link
          href="https://www.youtube.com"
          className="bg-[#1e1e1e] p-[4px] rounded-md hover:bg-red-600 hover:text-white hover:scale-110 transition-all"
        >
          <FaYoutube />
        </Link>
        <Link
          href="https://www.twitter.com"
          className="bg-[#1e1e1e] p-[4px] rounded-md hover:bg-red-600 hover:text-white hover:scale-110 transition-all"
        >
          <FaTwitter />
        </Link>
        <Link
          href="https://www.linkedin.com"
          className="bg-[#1e1e1e] p-[4px] rounded-md hover:bg-red-600 hover:text-white hover:scale-110 transition-all"
        >
          <FaLinkedinIn />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
