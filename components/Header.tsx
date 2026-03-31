"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiOutlineEnvelope, HiOutlinePhone } from "react-icons/hi2";

const contactInfo = [
  {
    id: "phone",
    icon: <HiOutlinePhone className="w-4 h-4 text-red-500 mr-2" />,
    text: "+221 76 140 57 57",
  },
  {
    id: "email",
    icon: <HiOutlineEnvelope className="w-4 h-4 text-blue-400 mr-2" />,
    text: "serviceclient@onechoicelogistics.com",
  },
];

const languages = [
  { code: "EN", active: true },
  { code: "FR", active: false },
];

const navLinks = [
  { title: "Home", href: "/", active: true },
  { title: "Services", href: "/services", active: false },
  { title: "About Us", href: "/about", active: false },
  { title: "Contact", href: "/contact", active: false },
  { title: "Blog", href: "/blog", active: false },
  { title: "FAQ", href: "/faq", active: false },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`w-full font-sans fixed top-0 left-0 z-50 transition-shadow duration-300 ${scrolled ? "shadow-lg" : ""}`}>
      {/* Top Bar */}
      <div className={`bg-[#0b132b] text-white text-sm px-4 md:px-8 flex justify-between items-center transition-all duration-300 ${scrolled ? "h-0 overflow-hidden py-0" : "py-2"}`}>
        <div className="flex items-center space-x-6">
          {contactInfo.map((info) => (
            <div key={info.id} className="flex items-center">
              {info.icon}
              <span className="text-gray-300">{info.text}</span>
            </div>
          ))}
        </div>
        <div className="flex items-center space-x-3 text-sm">
          {languages.map((lang, idx) => (
            <span key={lang.code} className="flex items-center">
              <button
                className={`font-semibold transition-colors ${
                  lang.active ? "text-white" : "text-gray-500 hover:text-gray-300"
                }`}
              >
                {lang.code}
              </button>
              {idx < languages.length - 1 && <span className="text-gray-600 mx-2">|</span>}
            </span>
          ))}
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-white py-4 px-4 md:px-8 flex justify-between items-center shadow-sm">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            {/* Logo Icon Placeholder - approximate based on image */}
            <Image src="/logo.jpg" alt="One Choice Logistics Logo" width={140} height={60} className="rounded-full transition-transform duration-300 ease-in-out hover:scale-110" /> 
            {/* <div className="relative flex items-center justify-center w-10 h-10 rounded-full border-2 border-red-500">
              <span className="text-[#0b132b] font-bold text-xs italic">OC</span>
            </div> */}
            <div className="flex flex-col">
              <span className="text-red-600 font-bold text-xl uppercase tracking-wider leading-tight">
                One Choice
              </span>
              <span className="text-blue-500 font-bold text-xs uppercase tracking-[0.2em] leading-none">
                Logistics
              </span>
            </div>
          </Link>
        </div>

        {/* Navigation Links + Button on right */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-red-500 ${
                link.active ? "text-red-500" : "text-slate-700"
              }`}
            >
              {link.title}
            </Link>
          ))}
          <Link
            href="/quote"
            className="bg-[#0b132b] hover:bg-[#15234b] text-white text-sm font-semibold py-2.5 px-6 rounded-full transition-colors"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </header>
  );
}
