"use client";

import { testimonial } from "@/data/testimonial";
import Image from "next/image";

export default function Testimonial() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">

        <div className="grid grid-cols-1 md:grid-cols-[40%_60%] rounded-3xl overflow-hidden shadow-xl">

          {/* LEFT SIDE */}
          <div className="bg-gradient-to-r from-[#1e2a3a] to-[#2c3e50] flex items-center justify-center relative group">
            
            {/* Image */}
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-full min-h-[300px] overflow-hidden">
              <Image
                src={testimonial.image}
                alt="testimonial"
                fill
                className="object-cover"
              />
            </div>

            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 blur-2xl transition"></div>
          </div>

          {/* RIGHT SIDE */}
          <div className="bg-[#0b1a2f] text-white p-6 sm:p-8 md:p-10 lg:p-12 relative">

            {/* Quote Icon */}
            <div className="text-red-500 text-5xl mb-4"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-quote w-12 h-12 text-red-500 mb-6 opacity-80"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg></div>

            {/* Quote */}
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light leading-relaxed mb-8 italic text-slate-200">
              &ldquo;{testimonial.quote}&rdquo;
            </p>

            {/* Name */}
            <h3 className="mt-6 text-lg font-semibold">
              {testimonial.name}
            </h3>

            {/* Role */}
            <p className="text-xl font-bold text-white">
              {testimonial.role}
            </p>

            {/* Description */}
            <p className="text-gray-400 text-sm mt-4 leading-relaxed">
              {testimonial.desc}
            </p>

            {/* Hover Border Effect */}
            <div className="absolute inset-0 border border-white/5 rounded-3xl pointer-events-none"></div>
          </div>

        </div>

      </div>
    </section>
  );
}
