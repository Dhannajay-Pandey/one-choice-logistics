"use client";

import { HiOutlineEnvelope, HiOutlineMapPin, HiOutlinePhone } from "react-icons/hi2";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

type FooterData = {
  brand: {
    name: string;
    description: string;
    socials: { name: string; icon: string; url?: string }[];
  };
  links: { name: string; url: string }[];
  services: string[];
  contact: {
    address: string;
    phone: string;
    email: string;
  };
};

const footerData: FooterData = {
  brand: {
    name: "One Choice Logistics",
    description:
      "Your strategic partner in international logistics. We move trust, efficiency, and long-term value for your business.",
    socials: [
      { name: "Facebook", icon: "facebook" },
      { name: "LinkedIn", icon: "linkedin" },
      { name: "Instagram", icon: "instagram" },
    ],
  },
  links: [
    { name: "Home", url: "/" },
    { name: "Our Services", url: "#" },
    { name: "About Us", url: "#" },
    { name: "Contact", url: "#" },
  ],
  services: [
    "Sea Freight",
    "Air Freight",
    "Customs Clearance",
    "Warehousing",
  ],
  contact: {
    address:
      "42, Rue Tolbiac, Immeuble El Hadj M. Niang, Plateau, Dakar, Senegal",
    phone: "+221 76 140 57 57",
    email: "serviceclient@onechoicelogistics.com",
  },
};

export default function Footer() {
  const socialIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case "facebook":
        return <FaFacebookF />;
      case "linkedin":
        return <FaLinkedinIn />;
      case "instagram":
        return <FaInstagram />;
      default:
        return null;
    }
  };

  return (
    <footer className="bg-[#0b1c2c] text-gray-300 px-10 lg:px-52 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* BRAND */}
        <div>
          <h2 className="text-white text-xl font-semibold mb-4">
            {footerData.brand.name}
          </h2>

          <p className="text-sm leading-relaxed mb-4">
            {footerData.brand.description}
          </p>

          <div className="flex gap-4 text-lg">
            {footerData.brand.socials.map((social) => (
              <span
                key={social.name}
                className="cursor-pointer hover:text-white transition"
                title={social.name}
              >
                {socialIcon(social.icon)}
              </span>
            ))}
          </div>
        </div>

        {/* LINKS */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {footerData.links.map((link) => (
              <li key={link.name}>
                <a href={link.url} className="hover:text-white transition">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="text-white font-semibold mb-4">Services</h3>
          <ul className="space-y-2">
            {footerData.services.map((service) => (
              <li key={service}>
                <a href="#" className="hover:text-white transition">
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <HiOutlineMapPin className="mt-0.5 shrink-0" />
              <span>{footerData.contact.address}</span>
            </li>

            <li className="flex items-center gap-2">
              <HiOutlinePhone className="shrink-0" />
              <span>{footerData.contact.phone}</span>
            </li>

            <li className="flex items-center gap-2">
              <HiOutlineEnvelope className="shrink-0" />
              <span>{footerData.contact.email}</span>
            </li>
          </ul>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        <p>
          © {new Date().getFullYear()} One Choice Logistics (SARL). All rights reserved.
        </p>

        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white transition">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}