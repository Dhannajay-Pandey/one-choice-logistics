"use client";

import Image from "next/image";
import { CircleCheck, Star } from "lucide-react";

export default function ServiceDetailsMainLayout({ data }: any) {
  return (
    <section className="bg-slate-100 py-10 md:py-16">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10">

        {/* LEFT CONTENT */}
        <div className="lg:col-span-2 space-y-8 sm:space-y-10">

          {/* Overview */}
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold border-l-4 border-red-500 pl-3 mb-3">
              Overview
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">{data.overview}</p>
          </div>

          {/* Features */}
          <div className="pt-6 sm:pt-10">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-5 sm:mb-8 border-l-4 border-red-600 pl-4">
              Key Features:
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {data.features.map((item: string, i: number) => (
                <div key={i} className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-white border border-slate-100 hover:shadow-md transition-shadow">
                  <div className="bg-sky-100 p-2 rounded-lg mt-1 shrink-0">
                    <Star className="w-4 h-4 sm:w-5 sm:h-5 text-sky-600" />
                  </div>
                  <p className="text-slate-700 font-medium leading-relaxed text-sm sm:text-base">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="pt-6 sm:pt-10">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold border-l-4 border-red-500 pl-3 mb-4">
              Key Benefits
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:gap-6">
              {data.benefits.map((item: string, i: number) => (
                <div key={i} className="flex items-start gap-3 sm:gap-4 bg-slate-50 p-4 sm:p-6 rounded-2xl transition-all hover:shadow-md">
                  <div className="bg-green-100 p-2 rounded-full shrink-0">
                    <CircleCheck className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                  </div>
                  <p className="text-slate-800 text-sm sm:text-base md:text-lg font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Process */}
          <div className="pt-6 sm:pt-10">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold border-l-4 border-red-500 pl-3 mb-5 sm:mb-6">
              Our Process
            </h2>
            <Image
              src="https://res.cloudinary.com/dd62irk0g/image/upload/v1784021714/cn/Processgirl_zs69pg.jpg"
              alt="Our Process"
              width={600}
              height={400}
              className="w-full h-auto rounded-xl shadow-md mb-6"
            />
            <div className="relative border-l-2 border-slate-200 pl-6 sm:pl-8 space-y-8 sm:space-y-12 ml-3 sm:ml-4">
              {data.process.map((step: any, i: number) => (
                <div key={i} className="relative group">
                  <div className="absolute -left-[33px] sm:-left-[41px] top-0 bg-slate-50 border-2 border-red-600 w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center group-hover:scale-125 transition-transform z-10">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-600 rounded-full"></div>
                  </div>
                  <div className="bg-white p-4 sm:p-6 rounded-xl border border-slate-100 shadow-sm group-hover:shadow-md transition-all">
                    <h3 className="text-base sm:text-xl font-bold text-slate-900 mb-2 flex items-center gap-2 sm:gap-3 flex-wrap">
                      <span className="text-xs text-red-600 font-extrabold uppercase tracking-widest bg-red-50 px-2 py-1 rounded">
                        {step.step}
                      </span>
                      {step.title}
                    </h3>
                    <p className="text-slate-600 text-sm sm:text-base md:text-lg">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* RIGHT SIDEBAR */}
        <div className="space-y-5 sm:space-y-6 lg:sticky lg:top-24 lg:self-start">

          <div className="bg-slate-900 p-6 sm:p-8 rounded-2xl text-white shadow-xl">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Ready to ship?</h3>
            <p className="text-slate-300 mb-5 sm:mb-8 leading-relaxed text-sm sm:text-base">
              Contact our team today for a personalized quote tailored to your cargo needs.
            </p>
            <button className="w-full bg-red-600 hover:bg-red-700 text-white h-12 sm:h-14 text-base sm:text-lg font-bold rounded-md shadow-lg transition-all">
              Get a Quote
            </button>
            <p className="mt-4 sm:mt-6 flex items-center justify-center gap-2 text-xs sm:text-sm text-slate-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>
                <path d="m9 12 2 2 4-4"/>
              </svg>
              Secure &amp; Reliable Handling
            </p>
          </div>

          <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200">
            <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-4 sm:mb-6 flex items-center gap-2 border-b border-slate-100 pb-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-slate-500">
                <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/>
                <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/>
                <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/>
                <path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/>
              </svg>
              Industries Served
            </h4>
            <ul className="space-y-3 text-sm sm:text-base text-slate-600">
              {["Electronics", "Pharmaceuticals", "Fashion & Textile", "Perishable Goods", "Automotive Parts"].map((industry) => (
                <li key={industry} className="flex items-center gap-3 text-slate-700 hover:text-red-600 transition-colors">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-600 shrink-0"></div>
                  {industry}
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}
