"use client";

import { useState } from "react";
import { testimonials } from "@/data/testimonials/testimonials";

export default function TestimonialSection() {
  const [activeTab, setActiveTab] = useState("air");

  const filtered = testimonials.filter(
    (item) => item.category === activeTab
  );

  return (
    <section className="bg-white py-20 border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-4 text-center">
        
        {/* Heading */}
        <p className="text-red-500 text-sm font-semibold uppercase mb-2">
          Client Success Stories
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          Trusted by Businesses Across West Africa
        </h2>

        <p className="text-slate-600 max-w-2xl mx-auto mb-10">
          See what our partners have to say about our commitment to efficiency and reliability.
        </p>

        {/* Tabs */}
        <div className="flex justify-center gap-2 mb-12">
          {["sea", "air", "transit"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-full text-sm capitalize transition ${
                activeTab === tab
                  ? "bg-white shadow text-slate-900"
                  : "bg-slate-100 text-slate-500"
              }`}
            >
              {tab} Freight
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-left relative"
            >
              {/* Stars */}
              <div className="flex mb-4">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>

              {/* Message */}
              <p className="text-slate-700 italic mb-6">
                "{item.message}"
              </p>

              {/* User */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600">
                  {item.initials}
                </div>
                <div>
                  <p className="font-semibold text-slate-900">
                    {item.name}
                  </p>
                  <p className="text-sm text-slate-500">
                    {item.company}
                  </p>
                </div>
              </div>

              {/* Quote Icon */}
              <div className="absolute top-4 right-4 text-red-200 text-3xl">
                ❝
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}