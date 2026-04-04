"use client";

import { services } from "@/data/services";

export default function Services() {
  return (
    <section className="py-16 bg-white-50">
      <div className="container mx-auto px-4 text-center">
        
        <p className="text-orange-500 font-semibold uppercase tracking-wide">
          Our Expertise
        </p>

        <h2 className="text-3xl md:text-4xl font-bold mt-2">
          Comprehensive Logistics Solutions
        </h2>

        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          We specialize in delivering seamless, end-to-end freight and logistics
          solutions tailored to the African market.
        </p>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {services.map((item, index) => (
            <div
              key={index}
              className="group bg-white p-6 rounded-2xl border border-gray-200 
              transition-all duration-500 hover:shadow-xl hover:-translate-y-2"
            >
              {/* ICON */}
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-blue-50 text-2xl 
              transition-all duration-500 group-hover:scale-110 group-hover:bg-blue-100">
                {item.icon}
              </div>

              {/* TITLE */}
              <h3 className="text-lg font-semibold mt-4">
                {item.title}
              </h3>

              {/* DESC */}
              <p className="text-gray-600 mt-2 text-sm">
                {item.desc}
              </p>

              {/* LINK */}
              <div className="mt-4">
                <span className="text-red-500 font-medium inline-flex items-center gap-2 
                transition-all duration-300 group-hover:gap-3">
                  Learn More →
                </span>
              </div>

              {/* GLOW EFFECT */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 
              transition duration-500 blur-xl bg-gradient-to-r from-blue-100 to-purple-100 -z-10"></div>
            </div>
          ))}

          {/* CTA CARD */}
          <div className="bg-gradient-to-r from-blue-900 to-purple-900 text-white p-8 rounded-2xl flex flex-col justify-center items-center">
            <h3 className="text-xl font-semibold">
              Need a Custom Solution?
            </h3>

            <button className="mt-6 bg-red-500 px-6 py-3 rounded-lg hover:bg-red-600 transition">
              Contact Us Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}