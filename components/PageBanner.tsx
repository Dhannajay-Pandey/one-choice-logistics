"use client";

import { usePathname } from "next/navigation";
import { useLanguage } from "@/contexts/LanguageContext";

const formatTitle = (path: string) => {
  const name = path.split("/").filter(Boolean).pop();
  if (!name) return "Home";
  return name.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());
};

export default function PageBanner() {
  const pathname = usePathname();
  const { t } = useLanguage();
  const title = formatTitle(pathname);

  return (
    <section className="relative w-full h-[220px] sm:h-[260px] md:h-[300px] flex items-center justify-center text-center text-white">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/pagebanner.avif')" }}></div>
      <div className="absolute inset-0 bg-slate-900/70"></div>
      <div className="relative z-10 px-4">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold">{title}</h1>
        <p className="mt-4 text-sm md:text-lg max-w-2xl mx-auto">{t("pageBanner.subtitle")}</p>
        <div className="mt-4 text-sm">
          <span className="opacity-80">{t("pageBanner.home")}</span>
          <span className="mx-2">/</span>
          <span className="font-semibold">{title}</span>
        </div>
      </div>
    </section>
  );
}