export default function BlogHero() {
  return (
    <div className="relative w-full h-[220px] sm:h-[280px] md:h-[380px] flex items-center justify-center text-center">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/blog/bg-blog.jpg')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10 px-4">
        <h1 className="text-white text-2xl sm:text-3xl md:text-5xl font-bold mb-3 md:mb-4">
          Blog & Insights
        </h1>
        <p className="text-gray-200 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed">
          Stay updated with the latest trends in logistics, company news, and success stories.
        </p>
      </div>
    </div>
  );
}