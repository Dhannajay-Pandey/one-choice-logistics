"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/contexts/LanguageContext";

export default function AboutHero() {
  const { language, t } = useLanguage();
  const stats = translations[language].aboutHero.stats;

  return (
    <section className="py-10 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">

        {/* LEFT IMAGE */}
        <div className="relative group">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/abouthero.png"
              alt="Team Member"
              width={500}
              height={600}
              className="w-full h-full object-cover transition duration-500"
            />
          </div>
          <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-blue-200 to-purple-200 opacity-0 group-hover:opacity-40 blur-xl transition duration-500 -z-10"></div>
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <span className="inline-block bg-red-100 text-red-500 px-4 py-1 rounded-full text-sm font-medium">
            {t("aboutHero.badge")}
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mt-4 leading-tight">
            {t("aboutHero.title1")}
            <br />
            {t("aboutHero.title2")}
          </h2>

          <p className="text-gray-600 mt-4 text-sm sm:text-base">
            {t("aboutHero.desc")}
          </p>

          {/* STATS */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mt-6">
            {stats.map((item, index) => (
              <div
                key={index}
                className="p-4 sm:p-6 bg-white rounded-xl border border-gray-200 shadow-sm transition duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <h3 className={`text-xl sm:text-2xl font-bold ${item.color}`}>
                  {item.value}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 sm:mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="bg-red-600 text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-sky-800 transition text-sm sm:text-base">
              {t("aboutHero.cta1")} &rarr;
            </Link>
            <Link href="/about" className="border-2 border-red-600 text-red-600 px-6 py-3 rounded-full flex items-center gap-2 hover:bg-red-600 hover:text-white transition text-sm sm:text-base">
              {t("aboutHero.cta2")} &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
