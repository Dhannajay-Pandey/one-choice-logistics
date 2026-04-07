"use client";

import Image from "next/image";
import { iconMap } from "@/utils/iconMap";
import Link from "next/link";

export default function ServiceCard({ service, reverse }: any) {
  const Icon = iconMap[service.icon];

  return (
    <div
      className={`flex flex-col lg:flex-row gap-8 lg:gap-12 items-center ${
        reverse ? "lg:flex-row-reverse" : ""
      }`}
    >
      {/* IMAGE */}
      <div className="w-full lg:w-1/2">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
          <Image
            src={service.image}
            alt={service.title}
            width={600}
            height={400}
            className="w-full h-[220px] sm:h-[300px] md:h-[400px] object-cover transition duration-700 group-hover:scale-105"
          />
          <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 bg-white/95 backdrop-blur px-4 sm:px-5 py-2 sm:py-3 rounded-xl shadow-lg">
            <p className="text-xs text-slate-500 uppercase font-semibold">Performance</p>
            <p className="font-bold text-slate-900">{service.performance}</p>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="w-full lg:w-1/2">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-red-100 p-3 rounded-xl">
            {Icon && <Icon className="w-6 h-6 text-red-600" />}
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900">
            {service.title}
          </h2>
        </div>

        <p className="text-sm sm:text-base md:text-lg text-slate-600 mb-5 sm:mb-6">
          {service.description}
        </p>

        <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-sm border border-slate-200 mb-5 sm:mb-6">
          <h3 className="font-semibold text-slate-900 mb-3 sm:mb-4">Key Features:</h3>
          <ul className="space-y-2 sm:space-y-3">
            {service.features?.map((item: string, i: number) => (
              <li key={i} className="flex gap-3 text-slate-600 text-sm sm:text-base">
                <span className="bg-green-100 text-green-600 p-1 rounded-full text-xs mt-1">&#10004;</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-3 sm:gap-4">
          <Link href={`/services/${service.slug}`} className="px-5 sm:px-6 py-2 rounded-full border border-slate-300 hover:bg-slate-50 text-slate-700 text-sm sm:text-base">
            Learn More
          </Link>
          <button className="px-5 sm:px-6 py-2 rounded-full bg-slate-900 text-white hover:bg-slate-800 shadow text-sm sm:text-base">
            Get a Quote
          </button>
        </div>
      </div>
    </div>
  );
}
