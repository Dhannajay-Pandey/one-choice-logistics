"use client";

import { useState } from "react";
import { testimonials } from "@/data/testimonials/testimonials";
import { useLanguage } from "@/contexts/LanguageContext";

export default function TestimonialSection() {
  const [activeTab, setActiveTab] = useState<"sea" | "air" | "transit">("air");
  const { language, t } = useLanguage();

  const tabs = {
    sea: t("testimonialService.tabs.sea"),
    air: t("testimonialService.tabs.air"),
    transit: t("testimonialService.tabs.transit"),
  };

  const filteredTestimonials = testimonials.filter(
    (item) => item.category === activeTab
  );

  return (
    <section className="bg-white py-12 sm:py-20 border-t border-slate-100">
      <div className="container mx-auto px-4 text-center">
        <p className="text-red-500 text-sm font-semibold uppercase mb-2">
          {t("testimonialService.badge")}
        </p>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-3 sm:mb-4">
          {t("testimonialService.title")}
        </h2>

        <p className="text-slate-600 max-w-2xl mx-auto mb-8 sm:mb-10 text-sm sm:text-base">
          {t("testimonialService.subtitle")}
        </p>

        {/* Tabs */}
        <div className="flex justify-center gap-2 mb-8 sm:mb-12 flex-wrap">
          {(["sea", "air", "transit"] as const).map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm capitalize transition ${
                activeTab === tab
                  ? "bg-white shadow text-slate-900 border border-slate-200"
                  : "bg-slate-100 text-slate-500"
              }`}
            >
              {tabs[tab]}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-8">
          {filteredTestimonials.length > 0 ? (
            filteredTestimonials.map((item, index) => (
              <div
                key={`${item.id}-${index}-${item.name}`}
                className="bg-slate-50 p-5 sm:p-6 rounded-2xl border border-slate-100 text-left"
              >
                <div className="flex mb-3 sm:mb-4">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <span key={i} className="text-yellow-400">
                      ★
                    </span>
                  ))}
                </div>

                <p className="text-slate-700 italic mb-4 sm:mb-6 text-sm sm:text-base">
                  &ldquo;
                  {language === "fr" && item.message_fr
                    ? item.message_fr
                    : item.message}
                  &rdquo;
                </p>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600 text-sm">
                    {item.initials}
                  </div>

                  <div>
                    <p className="font-semibold text-slate-900 text-sm sm:text-base">
                      {item.name}
                    </p>

                    {item.company && (
                      <p className="text-xs sm:text-sm text-slate-500">
                        {item.company}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-slate-500">
              No testimonials found.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}