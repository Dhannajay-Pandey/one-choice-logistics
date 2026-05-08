"use client";

import { useState, useEffect, useCallback } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { testimonials } from "@/data/testimonials/testimonials";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function Testimonial() {
  const { language } = useLanguage();
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrent((index + testimonials.length) % testimonials.length);
      setTimeout(() => setIsAnimating(false), 400);
    },
    [isAnimating]
  );

  useEffect(() => {
    const timer = setInterval(() => goTo(current + 1), 5000);
    return () => clearInterval(timer);
  }, [current, goTo]);

  const item = testimonials[current];
  const message = language === "fr" && item.message_fr ? item.message_fr : item.message;

  return (
    <section className="py-12 sm:py-20 bg-gray-100">
      <div className="container mx-auto px-4 max-w-4xl">

        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-red-500 text-sm font-semibold uppercase tracking-widest mb-2">
            {language === "fr" ? "Témoignages Clients" : "Client Testimonials"}
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">
            {language === "fr" ? "Ce que disent nos clients" : "What Our Clients Say"}
          </h2>
        </div>

        {/* Card */}
        <div className="relative bg-[#0b1a2f] rounded-3xl shadow-2xl overflow-hidden">

          {/* Quote icon */}
          <div className="absolute top-6 left-6 sm:top-8 sm:left-8 opacity-20">
            <Quote className="w-12 h-12 sm:w-16 sm:h-16 text-red-500 fill-red-500" />
          </div>

          <div
            key={current}
            className="px-8 pt-16 pb-10 sm:px-14 sm:pt-20 sm:pb-12 text-center transition-opacity duration-400"
            style={{ opacity: isAnimating ? 0 : 1 }}
          >
            {/* Stars */}
            <div className="flex justify-center gap-1 mb-6">
              {Array.from({ length: item.rating }).map((_, i) => (
                <span key={i} className="text-yellow-400 text-xl">★</span>
              ))}
            </div>

            {/* Message */}
            <p className="text-slate-200 text-base sm:text-xl md:text-2xl font-light italic leading-relaxed mb-8">
              &ldquo;{message}&rdquo;
            </p>

            {/* Author */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-red-500/20 border-2 border-red-500/40 flex items-center justify-center text-red-400 font-bold text-sm">
                {item.initials}
              </div>
              <p className="text-white font-semibold text-base sm:text-lg">{item.name}</p>
              {item.company && (
                <p className="text-slate-400 text-sm">{item.company}</p>
              )}
            </div>
          </div>

          {/* Prev / Next */}
          <button
            onClick={() => goTo(current - 1)}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => goTo(current + 1)}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? "w-6 h-2.5 bg-red-500"
                  : "w-2.5 h-2.5 bg-slate-400 hover:bg-slate-600"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
