import React from 'react';

export default function Breadcrumbs() {
  return (
    <section className="relative bg-[#0f172a] text-center overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/contact.png')" }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#0f172a]/70" />

      {/* Content */}
      <div className="relative z-10 text-white py-12 sm:py-36 px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
          Contact Our Team
        </h2>
        <p className="text-slate-300 text-sm sm:text-base">
          We are here to help with your logistics needs 24/7.
        </p>
      </div>

    </section>
  );
}
