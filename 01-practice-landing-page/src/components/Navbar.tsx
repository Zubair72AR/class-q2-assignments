"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
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
      path: "/about",
      name: "About",
    },
    {
      id: 3,
      path: "/features",
      name: "Features",
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
    <nav className="flex justify-between items-center py-4 px-12">
      {/* Logo */}
      <div className="flex justify-center items-center gap-2">
        <div className="w-6 h-6 border-4 border-indigo-500 animate-spin rounded-lg"></div>
        <h1 className="font-semibold text-3xl text-indigo-900">
          bin<span className=" text-indigo-500">Jan</span>
        </h1>
      </div>

      {/* Menu Links l*/}
      <ul className={handleMenu()}>
        {navLink.map((nav) => {
          return (
            <li key={nav.id}>
              <Link
                href={nav.path}
                className={
                  isActive(nav.path)
                    ? "text-indigo-900 font-semibold text-sm"
                    : "text-indigo-900 text-sm hover:text-indigo-500"
                }
              >
                {nav.name}
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Button flex */}
      <div className={handleToggle()}>
        <button
          className="px-4 py-1 rounded text-sm bg-indigo-500 text-white shadow-sm"
          onClick={handleClick}
        >
          Get Started
        </button>
      </div>

      {/* Responsive Menu Icon */}
      <button
        className="text-2xl text-indigo-900 md:hidden"
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
      >
        {menuOpen ? <HiMenuAlt3 /> : <RxCross2 />}
      </button>
    </nav>
  );
}
