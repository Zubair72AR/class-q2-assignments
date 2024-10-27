"use client";
import Image from "next/image";
import figma_logo from "../../public/figma_logo.svg";
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
    <nav className="flex justify-between items-center bg-[#222222] py-4 px-12">
      {/* Logo */}
      <div className="flex justify-center items-center font-bold text-3xl gap-2">
        <Image src={figma_logo} alt="Figma Logo" className="w-7" />
        <h1 className="font-bold text-3xl text-white">Figma</h1>
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

        {/* Button flex justify-center items-center gap-4 absolute top-[230px] left-0 p-12*/}
        <div className={handleToggle()}>
          <Button
            text="Try Whitepace free"
            mTop="mt-0"
            mBottom="mb-0"
            onClick={handleClick}
          />
          <Button
            text="Login"
            color="bg-green-500"
            mTop="mt-0"
            mBottom="mb-0"
            yesNo="false"
            onClick={handleClick}
          />
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
