"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoLogoXing } from "react-icons/io5";
import {
  FaFacebookF,
  FaYoutube,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

interface Navigation {
  id: number;
  label: string;
  path: string;
}
const navigation: Navigation[] = [
  { id: 1, label: "Home", path: "/" },
  { id: 2, label: "About", path: "/about" },
  { id: 3, label: "Career", path: "/career" },
  { id: 3, label: "Skills", path: "/skills" },
  { id: 3, label: "Contact", path: "/contact" },
];

const Navbar = () => {
  {
    /* Setup for Active Link */
  }
  const usePath = usePathname();
  const isActive = (path: string) => path === usePath;

  return (
    <nav className="bg-[#080808] flex justify-between items-center px-12">
      {/* Logo */}
      <Link
        href="/"
        className="text-white flex justify-center items-center gap-2 text-3xl"
      >
        <IoLogoXing /> <h1 className="text-2xl font-medium">ZubairAR</h1>
      </Link>

      {/* Menu Links */}
      <ul className="flex justify-center items-center gap-3 py-6">
        {navigation.map((nav) => (
          <li key={nav.id}>
            <Link
              href={nav.path}
              className={isActive(nav.path) ? "text-white" : "text-gray-500"}
            >
              {nav.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Menu Icon */}
      <div className="hidden justify-center items-center text-white gap-2 md:flex">
        <Link
          href="https://www.facebook.com"
          className="bg-[#1e1e1e] p-[4px] rounded-md"
        >
          <FaFacebookF />
        </Link>
        <Link
          href="https://www.youtube.com"
          className="bg-[#1e1e1e] p-[4px] rounded-md"
        >
          <FaYoutube />
        </Link>
        <Link
          href="https://www.twitter.com"
          className="bg-[#1e1e1e] p-[4px] rounded-md"
        >
          <FaTwitter />
        </Link>
        <Link
          href="https://www.linkedin.com"
          className="bg-[#1e1e1e] p-[4px] rounded-md"
        >
          <FaLinkedinIn />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
