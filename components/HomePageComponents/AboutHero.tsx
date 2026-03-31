"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { stats } from "@/data/stats";

export default function AboutHero() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = 98;
    const duration = 1500;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(Math.floor(start));
    }, 16);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT IMAGE */}
        <div className="relative group">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/abouthero.png" // replace with your image
              alt="Team Member"
              width={500}
              height={600}
              className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
            />
          </div>

          {/* Glow Effect */}
          <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-blue-200 to-purple-200 opacity-0 group-hover:opacity-40 blur-xl transition duration-500 -z-10"></div>
        </div>

        {/* RIGHT CONTENT */}
        <div>
          {/* Badge */}
          <span className="inline-block bg-red-100 text-red-500 px-4 py-1 rounded-full text-sm font-medium">
            Your Trusted Logistics Partner
          </span>

          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-bold mt-4 leading-tight">
            Committed to Excellence,
            <br />
            Driven by Results
          </h2>

          {/* Description */}
          <p className="text-gray-600 mt-6">
            At One Choice Logistics, we don’t just move cargo—we build lasting
            partnerships. Our professional team provides end-to-end logistics
            solutions with real-time visibility, dedicated support, and a
            commitment to excellence that has earned the trust of businesses
            across West Africa.
          </p>

          {/* STATS */}
          <div className="grid sm:grid-cols-3 gap-6 mt-8">
            {stats.map((item, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm 
                transition duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <h3 className={`text-2xl font-bold ${item.color}`}>
                  {item.value}
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          {/* BUTTON */}
          <button className="mt-8 bg-red-600 text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-sky-800 transition">
            Get a Quote →
          </button>
        </div>
      </div>
    </section>
  );
}