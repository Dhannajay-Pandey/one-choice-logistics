"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { icons } from "lucide-react";

export default function ServiceBannerBradcrums({ service }: any) {
  const router = useRouter();

  return (
    <section className="relative h-[280px] sm:h-[340px] md:h-[400px] flex items-center text-white">

      <Image src={service.image} alt={service.title} fill className="object-cover" />

      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/100 via-slate-900/80 to-transparent"></div>

      <div className="relative z-10 pt-16 sm:pt-20 py-6 px-4 sm:px-8 md:px-12 max-w-4xl">

        <button
          onClick={() => router.push("/services")}
          className="inline-flex items-center text-slate-300 hover:text-white mb-5 sm:mb-8 transition-colors group text-sm sm:text-base"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 group-hover:-translate-x-1 transition-transform">
            <path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>
          </svg>
          Back to Services
        </button>

        <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
          <div className="bg-red-600 p-3 sm:p-4 rounded-xl">
            {(() => {
              const key = service.icon.split("-").map((w: string) => w[0].toUpperCase() + w.slice(1)).join("");
              const LucideIcon = icons[key as keyof typeof icons];
              return LucideIcon ? <LucideIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white" /> : null;
            })()}
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            {service.title}
          </h1>
        </div>

        <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-slate-300 max-w-3xl leading-relaxed">
          {service.description}
        </p>
      </div>
    </section>
  );
}
