"use client";

import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { footerData } from "@/data/header and Footer/header";
import { useLanguage, translations } from "@/contexts/LanguageContext";

export default function Footer() {
  const { language } = useLanguage();
  const ft = translations[language].footer;
  const socialIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case "facebook": return <FaFacebookF />;
      case "linkedin": return <FaLinkedinIn />;
      case "instagram": return <FaInstagram />;
      default: return null;
    }
  };

  return (
    <footer className="bg-[#0b1c2c] text-gray-300">
      <div className="container mx-auto px-4 py-10 md:py-12">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">

          {/* BRAND */}
          <div className="sm:col-span-2 md:col-span-1">
            <h2 className="text-white text-xl font-semibold mb-4">{footerData.brand.name}</h2>
            <p className="text-sm leading-relaxed mb-4">{ft.description}</p>
            <div className="flex gap-4 text-lg">
              {footerData.brand.socials.map((social) => (
                <Link key={social.name} href={social.url} className="cursor-pointer hover:text-white transition" title={social.name}>
                  {socialIcon(social.icon)}
                </Link>
              ))}
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-white font-semibold mb-4">{ft.quickLinks}</h3>
            <ul className="space-y-2 text-sm">
              {ft.links.map((link) => (
                <li key={link.name}>
                  <Link href={link.url} className="hover:text-white transition">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="text-white font-semibold mb-4">{ft.ourServices}</h3>
            <ul className="space-y-2 text-sm">
              {ft.serviceLinks.map((service) => (
                <li key={service.name}>
                  <Link href={service.url} className="hover:text-white transition">{service.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-white font-semibold mb-4">{ft.contactUs}</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-red-500 shrink-0 mt-0.5">
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <span className="break-words">{ft.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-red-500 shrink-0">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <span>{footerData.contact.phone}</span>
              </li>
              <li className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-sky-500 shrink-0">
                  <rect width="20" height="16" x="2" y="4" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
                <span className="break-all">{footerData.contact.email}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="border-t border-gray-700 mt-8 md:mt-10 pt-5 md:pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-gray-400 text-center sm:text-left">
          <p>&copy; {new Date().getFullYear()}-{new Date().getFullYear() + 1} One Choice Logistics (SARL). {ft.copyright}</p>
          <div className="flex gap-4 sm:gap-6">
            <a href="#" className="hover:text-white transition">{ft.privacy}</a>
            <a href="#" className="hover:text-white transition">{ft.terms}</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
