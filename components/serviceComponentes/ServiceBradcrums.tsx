"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

import { icons } from "lucide-react";
export default function ServiceBannerBradcrums({ service }: any) {
  const router = useRouter();

  return (
    <section className="relative h-[400px] flex items-center text-white">
      
      {/* Background Image */}
      <Image
        src={service.image}
        alt={service.title}
        fill
        className="object-cover"
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/100 via-slate-900/80 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 pt-20 py-6 md:px-12 max-w-4xl">

        {/* Back Button */}
        <button
          onClick={() => router.push("/services")}
          className="inline-flex items-center text-slate-300 hover:text-white mb-8 transition-colors group"
        >
         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-left w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>Back to Services
        </button>

        {/* Title + Icon */}
        <div className="flex items-center gap-4 mb-4">
          <div className="bg-red-600 p-4 rounded-xl">
              {(() => { const key = service.icon.split("-").map((w: string) => w[0].toUpperCase() + w.slice(1)).join(""); const LucideIcon = icons[key as keyof typeof icons]; return LucideIcon ? <LucideIcon className="w-6 h-6 text-white" /> : null; })()}
          </div>

          <h1 className="text-4xl md:text-6xl font-bold">
            {service.title}
          </h1>
        </div>

        {/* Description */}
        <p className="text-xl md:text-2xl text-slate-300 max-w-3xl leading-relaxed">
          {service.description}
        </p>
      </div>
    </section>
  );
}