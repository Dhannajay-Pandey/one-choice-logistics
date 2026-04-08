"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative w-full min-h-screen flex items-center justify-start text-white overflow-hidden">

      <Image src="/images/warehouse.jpg" alt="Warehouse" fill priority className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a1a2f]/90 via-[#0a1a2f]/80 to-transparent"></div>

      <div className="relative z-10 w-full">
        <div className="container mx-auto px-4 sm:px-6 pt-20 pb-10 sm:pt-24 sm:pb-14 md:pt-32 md:pb-32">

          <span className="inline-block bg-blue-600 text-white text-xs px-3 sm:px-4 py-1.5 rounded-full mb-3 sm:mb-5 tracking-wide">
            {t("hero.badge")}
          </span>

          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-xl">
            {t("hero.title")} <span className="text-red-500">{t("hero.titleHighlight")}</span>,<br />
            {t("hero.titleRest")}
          </h1>

          <p className="mt-3 sm:mt-4 text-gray-300 max-w-sm sm:max-w-xl md:max-w-2xl text-sm sm:text-base md:text-lg lg:text-xl">
            {t("hero.subtitle")}
          </p>

          <div className="flex flex-wrap gap-3 mt-4 sm:mt-6">
            <Link
              href="/contact"
              className="flex items-center gap-2 bg-red-500 hover:bg-red-600 px-5 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-3.5 rounded-full font-medium text-sm sm:text-base md:text-lg transition"
            >
              {t("hero.cta1")} <ArrowRight size={18} />
            </Link>
            <Link
              href="/about"
              className="border-2 border-white/90 px-5 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-3.5 rounded-full text-sm sm:text-base md:text-lg hover:bg-white hover:text-black transition"
            >
              {t("hero.cta2")}
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-6 sm:mt-10 max-w-xs sm:max-w-md md:max-w-4xl">
            <div>
              <h3 className="text-xl sm:text-3xl font-bold">20+</h3>
              <p className="text-xs sm:text-sm text-gray-400 mt-1">{t("hero.stats.experience")}</p>
            </div>
            <div>
              <h3 className="text-xl sm:text-3xl font-bold">100+</h3>
              <p className="text-xs sm:text-sm text-gray-400 mt-1">{t("hero.stats.containers")}</p>
            </div>
            <div>
              <h3 className="text-xl sm:text-3xl font-bold">2</h3>
              <p className="text-xs sm:text-sm text-gray-400 mt-1">{t("hero.stats.hubs")}</p>
            </div>
            <div>
              <h3 className="text-xl sm:text-3xl font-bold">24/7</h3>
              <p className="text-xs sm:text-sm text-gray-400 mt-1">{t("hero.stats.support")}</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
