"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[85vh] min-h-[500px] flex items-center justify-start text-white overflow-hidden">
      
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
      <div className="relative z-10 w-full">
        <div className="container mx-auto px-8 py-40"> 
        
        {/* Badge */}
        <span className="inline-block bg-blue-600 text-white text-xs px-4 py-2 rounded-full mb-6 tracking-wide">
          GLOBAL LOGISTICS PARTNER
        </span>

        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          We Move <span className="text-red-500">Trust</span>,<br />
          Efficiency & Value.
        </h1>

        {/* Description */}
        <p className="mt-6 text-gray-300 max-w-2xl text-lg md:text-xl">
          End-to-end freight and logistics solutions tailored to the African market.
          From Guangzhou to Dakar, we are your strategic partner for growth.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 mt-8">
          <button className="flex items-center gap-2 bg-red-500 hover:bg-red-600 px-12 py-4 rounded-full font-medium text-lg transition">
            Start Shipping <ArrowRight size={20} />
          </button>

          <button className="border-4 border-white/90 px-12 py-4 rounded-full text-lg hover:bg-white hover:text-black transition">
            Our Story
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-16 max-w-4xl">
          
          <div>
            <h3 className="text-3xl font-bold">20+</h3>
            <p className="text-sm text-gray-400 mt-1">Years Experience</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold">100+</h3>
            <p className="text-sm text-gray-400 mt-1">Monthly Containers</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold">2</h3>
            <p className="text-sm text-gray-400 mt-1">Global Hubs</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold">24/7</h3>
            <p className="text-sm text-gray-400 mt-1">Client Support</p>
          </div>

        </div>
        </div>
      </div>
    </section>
  );
}