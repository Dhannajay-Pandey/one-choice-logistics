"use client";

import Image from "next/image";
import { features } from "@/data/whyChoose";
import { useEffect, useState } from "react";

export default function WhyChoose() {
  const [count, setCount] = useState(0);

  // Animated counter
  useEffect(() => {
    let start = 0;
    const end = 100;
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
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT IMAGE */}
        <div className="relative group">
          <Image
            src="/images/whychoose.jpg" // replace with your image
            alt="Office"
            width={600}
            height={400}
            className="rounded-2xl object-cover w-full h-full"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-2xl"></div>

          {/* TEXT */}
          <div className="absolute bottom-6 left-6 text-white">
            <h2 className="text-3xl font-bold">{count}%</h2>
            <p className="text-sm">
              Commitment to transparency and accountability
            </p>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <p className="text-red-500 font-semibold uppercase">
            Why Choose One Choice Logistics
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mt-2 leading-snug">
            Strategic Logistics <br /> Built on Trust
          </h2>

          <p className="text-gray-600 mt-4">
            20 years of expertise. Strong global network connecting Guangzhou
            and Yiwu for efficient operations.
          </p>

          {/* FEATURES */}
          <div className="grid sm:grid-cols-2 gap-6 mt-8">
            {features.map((item, index) => (
              <div
                key={index}
                className="flex gap-4 group transition duration-300 hover:translate-x-2"
              >
                {/* ICON */}
                <div className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-blue-500 text-blue-500 
                group-hover:bg-blue-500 group-hover:text-white transition">
                  ✓
                </div>

                {/* TEXT */}
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-600">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}