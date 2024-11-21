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
  const [menuOpen, setMenuOpen] = useState(true);
  const pathname = usePathname();
  const isActive = (path: string) => path === pathname;

  const navLink = [
    { id: 1, path: "/products", name: "Products" },
    { id: 2, path: "/solutions", name: "Solutions" },
    { id: 3, path: "/resources", name: "Resources" },
    { id: 4, path: "/pricing", name: "Pricing" },
  ];

  const handleClick = () => {
    alert("Button Clicked");
  };

  function handleToggle() {
    return menuOpen ? "menu-open" : "menu-closed";
  }

  function handleMenu() {
    return menuOpen ? "menu-open-links" : "menu-closed-links";
  }

  return (
    <nav className="navbar">
      <Link href="/" className="logo">
        <Image src={Logo_Icon} alt="Logo Icon" className="logo-icon" />
        <h1 className="logo-text">whitepace</h1>
      </Link>
      <div className="navbar-right">
        <ul className={handleMenu()}>
          {navLink.map((nav) => (
            <li key={nav.id}>
              <Link
                href={nav.path}
                className={isActive(nav.path) ? "nav-link active" : "nav-link"}
              >
                {nav.name}
                <RiArrowDropDownLine className="dropdown-icon" />
              </Link>
            </li>
          ))}
        </ul>

        <div className={handleToggle()}>
          <Link href="/login">
            <button className="login-btn">Login</button>
          </Link>
          <Button
            text="Try Whitepace free"
            btnClass="button"
            onClick={handleClick}
          />
        </div>

        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiMenu /> : <RxCross2 />}
        </button>
      </div>
    </nav>
  );
}
