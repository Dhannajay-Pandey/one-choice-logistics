"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

type Props = {
  image: string;
};

export default function GetFreeQuote({ image }: Props) {
  const { t } = useLanguage();
  return (
    <section className="bg-gradient-to-r from-[#b31217] to-[#e52d27] text-white">
      <div className="container mx-auto px-4 sm:px-6 py-12 md:py-20 grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-10">

        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight">
            {t("getFreeQuote.title")}
          </h1>

          <p className="mt-6 text-sm md:text-lg text-white/90 max-w-lg">
            {t("getFreeQuote.desc")}
          </p>

          {/* BUTTONS */}
          <div className="mt-6 flex gap-3 flex-wrap">
            <Link
              href="/contact"
              className="bg-white text-red-700 px-6 py-3 rounded-full font-semibold hover:scale-105 transition text-sm sm:text-base"
            >
              {t("getFreeQuote.cta1")}
            </Link>

            <Link
              href="/services"
              className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-red-700 transition text-sm sm:text-base"
            >
              {t("getFreeQuote.cta2")}
            </Link>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center">
          <div className="bg-red-600/40 backdrop-blur-md rounded-3xl p-6 shadow-xl">
            <Image
              src={image}
              alt="hero"
              width={420}
              height={420}
              className="object-contain w-full max-w-[260px] sm:max-w-[340px] md:max-w-[420px]"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
}
