"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
export default function Testimonial() {
  const { t } = useLanguage();
  return (
    <section className="py-10 sm:py-16 bg-gray-100">
      <div className="container mx-auto px-4">

        <div className="flex flex-col md:flex-row rounded-3xl overflow-hidden shadow-xl">

          {/* LEFT SIDE */}
          <div className="bg-gradient-to-r from-[#1e2a3a] to-[#2c3e50] flex items-center justify-center p-8 md:p-10 relative group min-h-[180px] md:min-h-0 md:w-[40%]">
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md transition duration-500 group-hover:scale-110">
              <span className="text-5xl sm:text-6xl text-white/50"> 
              <Image src="/images/team/owner.jpeg" alt={t("testimonial.name")} width={200} height={200} className="rounded-full border-2 border-white/20" />
              </span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 blur-2xl transition"></div>
          </div>

          {/* RIGHT SIDE */}
          <div className="bg-[#0b1a2f] text-white p-6 sm:p-8 md:p-10 lg:p-12 relative md:w-[60%]">

            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 sm:w-12 sm:h-12 text-red-500 mb-4 sm:mb-6 opacity-80">
              <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"/>
              <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"/>
            </svg>

            <p className="text-base sm:text-xl md:text-2xl lg:text-3xl font-light leading-relaxed mb-5 sm:mb-6 italic text-slate-200">
              &ldquo;{t("testimonial.quote")}&rdquo;
            </p>

            <h3 className="mt-4 sm:mt-6 text-base sm:text-lg font-semibold">
              {t("testimonial.name")}
            </h3>

            <p className="text-base sm:text-xl font-bold text-white">
              {t("testimonial.role")}
            </p>

            <p className="text-gray-400 text-xs sm:text-sm mt-3 sm:mt-4 leading-relaxed">
              {t("testimonial.desc")}
            </p>

            <div className="absolute inset-0 border border-white/5 rounded-3xl pointer-events-none"></div>
          </div>

        </div>

      </div>
    </section>
  );
}
