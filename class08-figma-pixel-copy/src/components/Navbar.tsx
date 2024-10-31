"use client";
import Image from "next/image";
import Logo_Icon from "../../public/Logo_Icon.svg";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Button from "./Button";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function Navbar() {
  // Responsive Menu
  const [menuOpen, setMenuOpen] = useState(true);

  // Path Setup for Active Navbar Link
  const pathname = usePathname();
  const isActive = (path: string) => path === pathname;

  // Navbar Link Setup
  let navLink = [
    {
      id: 1,
      path: "/products",
      name: "Products",
    },
    {
      id: 2,
      path: "/solutions",
      name: "Solutions",
    },
    {
      id: 3,
      path: "/resources",
      name: "Resources",
    },
    {
      id: 4,
      path: "/pricing",
      name: "Pricing",
    },
  ];

  // Button Click Event Functionality
  const handleClick = () => {
    alert("Button Clicked");
  };

  // Menu Toggle Button
  function handleToggle() {
    let toggleClassName = [];
    if (menuOpen) {
      toggleClassName = [
        "hidden",
        "md:flex",
        "justify-center",
        "items-center",
        "gap-4",
        "relative",
      ];
    } else {
      toggleClassName = [
        "sm:flex",
        "block",
        "flex-col",
        "xs:flex-row",
        "justify-center",
        "items-start",
        "xs:items-center",
        "gap-4",
        "absolute",
        "sm:top-[220px]",
        "top-[200px]",
        "left-0",
        "p-10",
        "md:relative",
        "md:top-[0px]",
        "md:left-0",
        "md:p-0",
      ];
    }
    return toggleClassName.join(" ");
  }

  // Menu navbar Links
  function handleMenu() {
    let menuClassName = [];
    if (menuOpen) {
      menuClassName = [
        "hidden",
        "lg:flex",
        "justify-center",
        "items-center",
        "gap-4",
        "relative",
      ];
    } else {
      menuClassName = [
        "block",
        "gap-4",
        "absolute",
        "top-[52px]",
        "md:top-[72px]",
        "left-0",
        "p-10",
        "pb-40",
        "md:pb-16",
        "w-full",
        "bg-[#043873]",
        "lg:flex",
        "lg:justify-center",
        "lg:items-center",
        "lg:relative",
        "lg:w-auto",
        "lg:top-[0px]",
        "lg:left-0",
        "lg:p-0",
        "lg:bg-none",
        "lg:pb-0",
      ];
    }
    return menuClassName.join(" ");
  }

  return (
    <nav className="flex justify-between items-center bg-[#043873] py-2 md:py-4 px-4 md:px-6 xl:px-8 2xl:px-44">
      {/* Logo */}
      <Link href="/" className="flex justify-center items-center gap-2">
        <Image
          src={Logo_Icon}
          alt="Logo Icon"
          className="w-[26px] md:w-[37px]"
        />
        <h1 className="font-bold text-[24px] md:text-[28px] text-white">
          whitepace
        </h1>
      </Link>
      <div className="flex justify-between item-center md:gap-4 xl:gap-12">
        {/* Menu Links flex justify-center items-center gap-4 absolute top-[72px] left-0 p-12 pb-32 bg-[#222222] w-full*/}
        <ul className={handleMenu()}>
          {navLink.map((nav) => {
            return (
              <li key={nav.id}>
                <Link
                  href={nav.path}
                  className={
                    isActive(nav.path)
                      ? "flex justify-start items-center text-[#A7CEFC] py-1 lg:py-0 hover:text-[#4F9CF9]"
                      : "flex justify-start items-center text-white py-1 lg:py-0 hover:text-[#4F9CF9]"
                  }
                >
                  {nav.name}
                  <RiArrowDropDownLine className="text-2xl" />
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Button */}
        <div className={handleToggle()}>
          <button
            className="px-7 py-[10px] rounded-lg shadow-md font-medium text-[#043873] bg-[#FFE492] sm:my-0 my-3"
            onClick={handleClick}
          >
            Login
          </button>
          <Button text="Try Whitepace free" btnClass="" onClick={handleClick} />
        </div>
        {/* Responsive Menu Icon */}
        <button
          className="text-[32px] text-white lg:hidden"
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        >
          {menuOpen ? <FiMenu /> : <RxCross2 />}
        </button>
      </div>
    </nav>
  );
}
