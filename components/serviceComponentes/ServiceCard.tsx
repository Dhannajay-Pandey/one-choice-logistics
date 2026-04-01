"use client";

import Image from "next/image";
import { iconMap } from "@/utils/iconMap";

export default function ServiceCard({ service, reverse }: any) {
  const Icon = iconMap[service.icon];

  return (
    <div
      className={`flex flex-col lg:flex-row gap-12 items-center ${
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
            className="w-full h-[400px] object-cover transition duration-700 group-hover:scale-105"
          />

          {/* Overlay Badge */}
          <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur px-5 py-3 rounded-xl shadow-lg">
            <p className="text-xs text-slate-500 uppercase font-semibold">
              Performance
            </p>
            <p className="font-bold text-slate-900">
              {service.performance}
            </p>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="w-full lg:w-1/2">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-red-100 p-3 rounded-xl">
            {Icon && <Icon className="w-6 h-6 text-red-600" />}
          </div>

          <h2 className="text-3xl font-bold text-slate-900">
            {service.title}
          </h2>
        </div>

        <p className="text-lg text-slate-600 mb-6">
          {service.description}
        </p>

        {/* Feature Box */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 mb-6">
          <h3 className="font-semibold text-slate-900 mb-4">
            Key Features:
          </h3>

          <ul className="space-y-3">
            {service.features.map((item: string, i: number) => (
              <li key={i} className="flex gap-3 text-slate-600">
                <span className="bg-green-100 text-green-600 p-1 rounded-full text-xs mt-1">
                  ✔
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <button className="px-6 py-2 rounded-full border border-slate-300 hover:bg-slate-50">
            Learn More
          </button>

          <button className="px-6 py-2 rounded-full bg-slate-900 text-white hover:bg-slate-800 shadow">
            Get a Quote
          </button>
        </div>
      </div>
    </div>
  );
}