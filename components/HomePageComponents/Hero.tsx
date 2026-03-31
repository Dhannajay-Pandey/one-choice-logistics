"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[90vh] min-h-[600px] flex items-center justify-start text-white overflow-hidden">
      
      {/* Background Image */}
      <Image
        src="/images/warehouse.jpg" // <-- replace with your image path
        alt="Warehouse"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a1a2f]/90 via-[#0a1a2f]/80 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 px-8 md:px-16 lg:px-24 max-w-3xl">
        
        {/* Badge */}
        <span className="inline-block bg-blue-600 text-white text-xs px-4 py-2 rounded-full mb-6 tracking-wide">
          GLOBAL LOGISTICS PARTNER
        </span>

        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-bold leading-tight max-w-3xl">
          We Move{" "}
          <span className="text-red-500">Trust</span>, <br />
          Efficiency & Value.
        </h1>

        {/* Description */}
        <p className="mt-6 text-gray-300 max-w-xl text-base md:text-lg">
          End-to-end freight and logistics solutions tailored to the African market.
          From Guangzhou to Dakar, we are your strategic partner for growth.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 mt-8">
          <button className="flex items-center gap-2 bg-red-500 hover:bg-red-600 px-6 py-3 rounded-full font-medium transition">
            Start Shipping <ArrowRight size={18} />
          </button>

          <button className="border border-white/50 px-6 py-3 rounded-full hover:bg-white hover:text-black transition">
            Our Story
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-14 max-w-3xl">
          
          <div>
            <h3 className="text-2xl font-bold">20+</h3>
            <p className="text-sm text-gray-400">Years Experience</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold">100+</h3>
            <p className="text-sm text-gray-400">Monthly Containers</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold">2</h3>
            <p className="text-sm text-gray-400">Global Hubs</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold">24/7</h3>
            <p className="text-sm text-gray-400">Client Support</p>
          </div>

        </div>
      </div>
    </section>
  );
}