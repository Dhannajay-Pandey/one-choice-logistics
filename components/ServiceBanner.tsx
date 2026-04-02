"use client";

import { iconMap } from "@/utils/iconMap";
import { useRouter } from "next/navigation";
import { ChevronRight } from "lucide-react";

export default function ServiceBanner({ service }: any) {
  const Icon = iconMap[service.icon];
  const router = useRouter();

  return (
    <section className="relative w-full bg-[#00008B]/90 text-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-white/60 mb-6">
          <button onClick={() => router.push("/")} className="hover:text-white transition">Home</button>
          <ChevronRight className="w-4 h-4" />
          <button onClick={() => router.push("/services")} className="hover:text-white transition">Services</button>
          <ChevronRight className="w-4 h-4" />
          <span className="text-white font-medium">{service.title}</span>
        </div>

        {/* Content */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          {Icon && (
            <div className="bg-white/10 p-5 rounded-2xl">
              <Icon className="w-12 h-12 text-white" />
            </div>
          )}
          <div>
            <p className="text-sm uppercase tracking-widest text-white/60 mb-2">Our Services</p>
            <h1 className="text-4xl md:text-5xl font-bold">{service.title}</h1>
            <p className="mt-3 text-white/80 text-lg max-w-2xl">{service.description}</p>
          </div>
        </div>

      </div>
    </section>
  );
}
