"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { HiOutlineEnvelope, HiOutlinePhone, HiOutlineXMark, HiBars3 } from "react-icons/hi2";
import { contactInfo, languages, navLinks } from "@/data/header and Footer/header";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const getIcon = (type: string) =>
    type === "phone"
      ? <HiOutlinePhone className="w-4 h-4 text-red-500 mr-2" />
      : <HiOutlineEnvelope className="w-4 h-4 text-blue-400 mr-2" />;

  return (
    <header className={`w-full font-sans fixed top-0 left-0 z-50 transition-shadow duration-300 ${scrolled ? "shadow-lg" : ""}`}>
      {/* Top Bar */}
      <div className={`bg-[#0b132b] text-white text-sm transition-all duration-300 ${scrolled ? "h-0 overflow-hidden py-0" : "py-2"}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            {contactInfo.map((info) => (
              <div key={info.id} className="flex items-center">
                {getIcon(info.type)}
                <span className="text-gray-300">{info.text}</span>
              </div>
            ))}
          </div>
          <div className="flex items-center space-x-3 text-sm">
            {languages.map((lang, idx) => (
              <span key={lang.code} className="flex items-center">
                <button className={`font-semibold transition-colors ${lang.active ? "text-white" : "text-gray-500 hover:text-gray-300"}`}>
                  {lang.code}
                </button>
                {idx < languages.length - 1 && <span className="text-gray-600 mx-2">|</span>}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.jpg" alt="One Choice Logistics Logo" width={140} height={60} className="rounded-full transition-transform duration-300 ease-in-out hover:scale-110" />
            <div className="flex flex-col">
              <span className="text-red-600 font-bold text-xl uppercase tracking-wider leading-tight">One Choice</span>
              <span className="text-blue-500 font-bold text-xs uppercase tracking-[0.2em] leading-none">Logistics</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-red-500 ${pathname === link.href ? "text-red-500" : "text-slate-700"}`}
              >
                {link.title}
              </Link>
            ))}
            <Link href="/contact" className="bg-[#0b132b] hover:bg-[#15234b] text-white text-sm font-semibold py-2.5 px-6 rounded-full transition-colors">
              Get a Quote
            </Link>
          </div>

          <button className="md:hidden text-[#0b132b] text-2xl" onClick={() => setMenuOpen(true)}>
            <HiBars3 />
          </button>
        </div>
      </div>

      {menuOpen && <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setMenuOpen(false)} />}

      <div className={`fixed top-0 left-0 h-full w-72 bg-white z-50 shadow-xl transform transition-transform duration-300 ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex items-center justify-between px-5 py-4 border-b">
          <span className="text-[#0b132b] font-bold text-lg">Menu</span>
          <button onClick={() => setMenuOpen(false)} className="text-2xl text-gray-600"><HiOutlineXMark /></button>
        </div>
        <nav className="flex flex-col px-5 py-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`text-sm font-medium transition-colors hover:text-red-500 ${pathname === link.href ? "text-red-500" : "text-slate-700"}`}
            >
              {link.title}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setMenuOpen(false)} className="mt-2 bg-[#0b132b] hover:bg-[#15234b] text-white text-sm font-semibold py-2.5 px-6 rounded-full text-center transition-colors">
            Get a Quote
          </Link>
        </nav>
      </div>
    </header>
  );
}
