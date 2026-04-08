"use client";

import Link from "next/link";
import { services } from "@/data/services";

export default function Services() {
  return (
    <section className="py-10 sm:py-16 bg-white">
      <div className="container mx-auto px-4 text-center">

        <p className="text-orange-500 font-semibold uppercase tracking-wide text-sm sm:text-base">
          Our Expertise
        </p>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2">
          Comprehensive Logistics Solutions
        </h2>

        <p className="text-gray-600 mt-3 sm:mt-4 max-w-2xl mx-auto text-sm sm:text-base">
          We specialize in delivering seamless, end-to-end freight and logistics
          solutions tailored to the African market.
        </p>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 mt-8 sm:mt-10">
          {services.map((item, index) => (
            <Link
              key={index}
              href={`/services/${item.slug}`}
              className="group relative bg-white p-5 sm:p-6 rounded-2xl border border-gray-200 text-left
              transition-all transition-all duration-300 hover:border-red-500"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-xl bg-blue-50 text-xl sm:text-2xl
              transition-all duration-500 group-hover:scale-110 group-hover:bg-blue-100">
                {item.icon}
              </div>

              <h3 className="text-base sm:text-lg font-semibold mt-3 sm:mt-4">
                {item.title}
              </h3>

              <p className="text-gray-600 mt-2 text-sm">
                {item.desc}
              </p>

              <div className="mt-3 sm:mt-4">
                <span className="text-red-500 font-medium inline-flex items-center gap-2
                transition-all duration-300 group-hover:gap-3 text-sm">
                  Learn More &rarr;
                </span>
              </div>

              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100
              transition duration-500 blur-xl bg-gradient-to-r from-blue-100 to-purple-100 -z-10"></div>
            </Link>
          ))}

          {/* CTA CARD */}
          <div className="bg-gradient-to-r from-blue-900 to-purple-900 text-white p-6 sm:p-8 rounded-2xl flex flex-col justify-center items-center">
            <h3 className="text-lg sm:text-xl font-semibold">
              Need a Custom Solution?
            </h3>
            <Link
              href="/contact"
              className="mt-5 sm:mt-6 bg-red-500 px-6 py-3 rounded-lg hover:bg-red-600 transition text-sm sm:text-base inline-block"
            >
              Contact Us Today
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
