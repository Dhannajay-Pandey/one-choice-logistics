"use client";

import { testimonial } from "@/data/testimonial";
import Image from "next/image";

export default function Testimonial() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">

        <div className="grid rounded-3xl overflow-hidden shadow-xl" style={{gridTemplateColumns: '30% 70%'}}>

          {/* LEFT SIDE */}
          <div className="bg-gradient-to-r from-[#1e2a3a] to-[#2c3e50] flex items-center justify-center p-10 relative group">
            
            {/* Avatar */}
            <div className="w-40 h-40 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md 
            transition duration-500 group-hover:scale-110">
              
              <span className="text-6xl text-white/50">👤</span>
            </div>

            {/* Optional Image */}
            {/* Uncomment if you have real image */}
            {/* 
            <Image
              src={testimonial.image}
              alt="User"
              width={200}
              height={200}
              className="rounded-full object-cover"
            /> 
            */}

            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 blur-2xl transition"></div>
          </div>

          {/* RIGHT SIDE */}
          <div className="bg-[#0b1a2f] text-white p-10 md:p-12 relative">

            {/* Quote Icon */}
            <div className="text-red-500 text-5xl mb-4">❝</div>

            {/* Quote */}
            <p className="text-lg md:text-xl leading-relaxed text-gray-200 italic">
              "{testimonial.quote}"
            </p>

            {/* Name */}
            <h3 className="mt-6 text-lg font-semibold">
              {testimonial.name}
            </h3>

            {/* Role */}
            <p className="text-blue-400 text-sm font-medium">
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