"use client";
import Image from "next/image";
import Logo_Icon from "../../public/Logo_Icon.svg";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Button from "../components/Button";
import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";

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
      path: "/",
      name: "Home",
    },
    {
      id: 2,
      path: "/products",
      name: "Products",
    },
    {
      id: 3,
      path: "/solutions",
      name: "Solutions",
    },
    {
      id: 4,
      path: "/pricing",
      name: "Pricing",
    },
    {
      id: 5,
      path: "/resources",
      name: "Resources",
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
        "flex",
        "justify-center",
        "items-center",
        "gap-4",
        "absolute",
        "top-[230px]",
        "left-0",
        "p-12",
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
        "md:flex",
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
        "top-[72px]",
        "left-0",
        "p-12",
        "pb-32",
        "w-full",
        "bg-[#222222]",
        "md:flex",
        "md:justify-center",
        "md:items-center",
        "md:relative",
        "md:top-[0px]",
        "md:left-0",
        "md:p-0",
      ];
    }
    return menuClassName.join(" ");
  }

  return (
    <nav className="flex justify-between items-center bg-[#043873] py-2 md:py-4 px-4 2xl:px-56 xl:px-8 md:px-6">
      {/* Logo */}
      <div className="flex justify-center items-center gap-2">
        <Image
          src={Logo_Icon}
          alt="Logo Icon"
          className="w-[26px] md:w-[37px]"
        />
        <h1 className="font-bold text-[24px] md:text-[28px] text-white">
          whitepace
        </h1>
      </div>
      <div className="flex justify-between item-center gap-16">
        {/* Menu Links flex justify-center items-center gap-4 absolute top-[72px] left-0 p-12 pb-32 bg-[#222222] w-full*/}
        <ul className={handleMenu()}>
          {navLink.map((nav) => {
            return (
              <li key={nav.id}>
                <Link
                  href={nav.path}
                  className={
                    isActive(nav.path)
                      ? "text-white"
                      : "text-[#919191] hover:text-green-500"
                  }
                >
                  {nav.name}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Button */}
        <div className={handleToggle()}>
          <button
            className="px-7 py-[10px] rounded-lg shadow-md font-medium text-[#043873] bg-[#FFE492]"
            onClick={handleClick}
          >
            Login
          </button>
          <Button text="Try Whitepace free" btnClass="" onClick={handleClick} />
        </div>
      </div>

      {/* Responsive Menu Icon */}
      <button
        className="text-2xl text-white md:hidden"
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
      >
        {menuOpen ? <HiMenuAlt3 /> : <RxCross2 />}
      </button>
    </nav>
  );
}
