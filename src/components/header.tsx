"use client";
import React, { useState, useEffect } from "react";
import DropDowHover from "./DropDownHover";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [scrollTop, setScrollTop] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScrollEv = () => setScrollTop(document.documentElement.scrollTop);
    window.addEventListener("scroll", onScrollEv);
    return () => window.removeEventListener("scroll", onScrollEv);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`flex justify-between items-center px-5 sm:px-20 transition-all duration-200 ${
        scrollTop > 0 ? "py-3 sm:py-4 bg-black" : "py-4 sm:py-7"
      } sticky top-0 z-50 w-full`}
    >
      <Link
        href="/"
        className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#70C6FE] to-[#7985FA]"
        onClick={closeMenu}
      >
        Fiksu Global Solutions
      </Link>

      <nav className="hidden sm:flex items-center gap-12 text-lg">
        <Link href="/" className="font-bold hover:text-[#7985FA] transition-all duration-150">
          Home
        </Link>
        <DropDowHover closeMenu={closeMenu} />
        <Link href="/AboutUs" className="font-bold hover:text-[#7985FA] transition-all duration-150">
          About
        </Link>
      </nav>

      <Link href="/ContactUs" className="hidden sm:block">
        <button className="font-bold text-lg px-4 py-1 rounded-3xl bg-[#7985FA]/30 hover:bg-[#7985FA]/50 border border-[#7985FA] transition-all">
          Contact Us
        </button>
      </Link>

      <button className="sm:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      <div
        className={`fixed top-0 right-0 w-full h-screen bg-black flex flex-col items-center justify-center gap-6 transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } sm:hidden`}
      >
        <button className="absolute top-5 right-5 text-white" onClick={closeMenu}>
          <X size={32} />
        </button>

        <Link href="/" onClick={closeMenu} className="text-2xl font-bold hover:text-[#7985FA]">
          Home
        </Link>
        <Link href="/AboutUs" onClick={closeMenu} className="text-2xl font-bold hover:text-[#7985FA]">
          About Us
        </Link>
        <Link href="/services/AutomotiveInfotainment" onClick={closeMenu} className="text-2xl font-bold hover:text-[#7985FA]">
        Automotive Infotainment
        </Link>
        <Link href="/services/SoftwareDevelopment" onClick={closeMenu} className="text-2xl font-bold hover:text-[#7985FA]">
        Software Development
        </Link>
        <Link href="/services/Testing&Validation" onClick={closeMenu} className="text-2xl font-bold hover:text-[#7985FA]">
        Testing & Validation
        </Link>
        <Link href="/services/TalentOutsourcing" onClick={closeMenu} className="text-2xl font-bold hover:text-[#7985FA]">
        Technical Talent Outsourcing
        </Link>
        <Link href="/ContactUs" onClick={closeMenu}>
          <button className="font-bold text-xl px-6 py-3 rounded-3xl bg-[#7985FA]/60 hover:bg-[#7985FA] border border-[#7985FA] transition-all">
            Contact Us
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
