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
  /* Setup for Active Link */
  const usePath = usePathname();
  const isActive = (path: string) => path === usePath;

  /* Menu Toggle */
  const [menuOpen, setMenuOpen] = useState(false);
  console.log(menuOpen);

  /* Menu Setting while Toggling */
  function responsiveMenu() {
    let menuClass = [];
    if (menuOpen) {
      menuClass = [
        "hidden",
        "absolute",
        "top-16",
        "left-0",
        "p-12",
        "w-full",
        "h-60",
        "md:h-auto",
        "justify-center",
        "items-center",
        "md:gap-4",
        "md:flex",
        "md:relative",
        "md:top-0",
        "md:p-0",
        "md:bg-none",
      ];
    } else {
      menuClass = [
        "block",
        "absolute",
        "top-16",
        "left-0",
        "p-12",
        "w-full",
        "h-60",
        "md:h-auto",
        "bg-[#080808]",
        "justify-center",
        "items-center",
        "md:gap-4",
        "md:flex",
        "md:relative",
        "md:top-0",
        "md:p-0",
        "md:bg-none",
      ];
    }
    return menuClass.join(" ");
  }

  /* Social Media Icons */
  function getIcon() {
    let iconClass = [];
    if (menuOpen) {
      iconClass = [
        "absolute",
        "top-64",
        "justify-center",
        "items-center",
        "text-white",
        "gap-2",
        "hidden",
        "md:flex",
        "md:relative",
        "md:top-0",
      ];
    } else {
      iconClass = [
        "absolute",
        "top-64",
        "justify-center",
        "items-center",
        "text-white",
        "gap-2",
        "flex",
        "md:relative",
        "md:top-0",
      ];
    }
    return iconClass.join(" ");
  }

  return (
    <nav className="bg-[#080808] z-50 flex justify-between items-center px-12 h-20 sticky top-0">
      {/* Logo */}
      <Link
        href="/"
        className="text-red-600 flex justify-center items-center gap-2 text-3xl"
      >
        <IoLogoXing />{" "}
        <h1 className="text-2xl font-medium text-white">ZubairAR</h1>
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

      <div className={getIcon()}>
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
