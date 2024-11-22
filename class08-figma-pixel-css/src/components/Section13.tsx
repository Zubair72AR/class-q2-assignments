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
    <div className="section13-container">
      <div className="section13-content">
        <div className="section13-logo">
          <Link href="/" className="logo-link">
            <Image src={Logo_Icon} alt="Logo Icon" className="logo-img" />
            <h1 className="logo-text">whitepace</h1>
          </Link>
          <p className="description">
            whitepace was created for the new ways we live and work. We make a
            better workspace around the world
          </p>
        </div>
        <div className="links">
          <p className="link-title">Product</p>
          <p className="link-item">Overview</p>
          <p className="link-item">Pricing</p>
          <p className="link-item">Customer stories</p>
        </div>
        <div className="links">
          <p className="link-title">Resources</p>
          <p className="link-item">Blog</p>
          <p className="link-item">Guides & tutorials</p>
          <p className="link-item">Help center</p>
        </div>
        <div className="links">
          <p className="link-title">Company</p>
          <p className="link-item">About us</p>
          <p className="link-item">Careers</p>
          <p className="link-item">Media kit</p>
        </div>
        <div className="try-section">
          <p className="try-title">Try It Today</p>
          <p className="try-description">
            Get started for free. Add your whole team as your needs grow.
          </p>
          <Button text="Start today" btnClass="mx-auto" onClick={handleClick} />
        </div>
      </div>
      <hr className="separator" />
      <div className="footer-content">
        <div className="footer-left">
          <div className="language-select">
            <label htmlFor="Languages">
              <MdLanguage />
            </label>
            <select className="language-dropdown">
              <option value="English">English</option>
              <option value="Arabic">Arabic</option>
              <option value="Urdu">Urdu</option>
              <option value="Spanish">Spanish</option>
              <option value="Italian">Italian</option>
            </select>
          </div>
          <p className="footer-text">Terms & privacy</p>
          <p className="footer-text">Security</p>
          <p className="footer-text">Status</p>
          <p className="footer-text">©2021 Whitepace LLC.</p>
        </div>
        <hr className="footer-separator" />
        <div className="social-icons">
          <FaFacebookF className="icon" />
          <FaTwitter className="icon" />
          <FaLinkedinIn className="icon" />
        </div>
      </div>
    </div>
  );
}
