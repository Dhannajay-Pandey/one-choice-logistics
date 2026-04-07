"use client";

import Image from "next/image";
import { features } from "@/data/whyChoose";
import { useEffect, useState } from "react";

export default function WhyChoose() {
  const [count, setCount] = useState(0);

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
    <section className="py-10 sm:py-16 bg-gray-50">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">

        {/* LEFT IMAGE */}
        <div className="relative group">
          <Image
            src="/images/whychoose.jpg"
            alt="Office"
            width={600}
            height={400}
            className="rounded-2xl object-cover w-full h-[250px] sm:h-[350px] md:h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-2xl"></div>
          <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 text-white">
            <h2 className="text-2xl sm:text-3xl font-bold">{count}%</h2>
            <p className="text-xs sm:text-sm">Commitment to transparency and accountability</p>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <p className="text-red-500 font-semibold uppercase text-sm sm:text-base">
            Why Choose One Choice Logistics
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 leading-snug">
            Strategic Logistics <br /> Built on Trust
          </h2>

          <p className="text-gray-600 mt-3 sm:mt-4 text-sm sm:text-base">
            20 years of expertise. Strong global network connecting Guangzhou
            and Yiwu for efficient operations.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5 sm:mt-6">
            {features.map((item, index) => (
              <div
                key={index}
                className="flex gap-3 sm:gap-4 group transition duration-300 hover:translate-x-2"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 shrink-0 flex items-center justify-center rounded-full border-2 border-blue-500 text-blue-500
                group-hover:bg-blue-500 group-hover:text-white transition">
                  &#10003;
                </div>
                <div>
                  <h3 className="font-semibold text-sm sm:text-base">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
