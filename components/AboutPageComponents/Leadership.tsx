import Image from "next/image";

type Member = {
  name: string;
  role: string;
  quote: string;
  description: string;
  image?: string;
  expertise: string[];
};

type Props = {
  title: string;
  subtitle: string;
  expertiseLabel: string;
  members: Member[];
};

export default function Leadership({
  title,
  subtitle,
  expertiseLabel,
  members,
}: Props) {
  return (
    <section className="bg-gradient-to-b from-slate-50 via-white to-slate-100 py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14 lg:mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-red-100 text-red-600 text-xs sm:text-sm font-semibold mb-4">
            Leadership Team
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
            {title}
          </h2>

          <p className="mt-4 sm:mt-5 text-base sm:text-lg text-slate-600 leading-7 sm:leading-relaxed">
            {subtitle}
          </p>
        </div>

        <div className="space-y-8 sm:space-y-10 lg:space-y-12">
          {members.map((item, index) => {
            const hasImage = !!item.image;

            return (
              <div
                key={index}
                className="group overflow-hidden rounded-2xl sm:rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 border border-slate-200"
              >
                <div
                  className={`grid ${
                    hasImage ? "grid-cols-1 lg:grid-cols-2" : "grid-cols-1"
                  } ${
                    hasImage && index % 2 !== 0
                      ? "lg:[&>*:first-child]:order-2"
                      : ""
                  }`}
                >
                  {/* IMAGE */}
                  {hasImage && (
                    <div className="relative min-h-[280px] sm:min-h-[400px] lg:min-h-[450px] bg-slate-100 overflow-hidden">
                      <Image
                        src={item.image!}
                        alt=""
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                      <div className="absolute bottom-5 left-5 sm:bottom-8 sm:left-8">
                        <h3 className="text-2xl sm:text-3xl font-bold text-white">
                          {item.name}
                        </h3>

                        <p className="text-red-300 font-semibold text-base sm:text-lg mt-2">
                          {item.role}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* CONTENT */}
                  <div className="flex flex-col justify-center p-5 sm:p-8 md:p-10 lg:p-12">
                    {/* Show Name & Role only when image is not available */}
                    {!hasImage && (
                      <div className="mb-6 sm:mb-8">
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">
                          {item.name}
                        </h3>

                        <p className="text-red-600 font-semibold text-base sm:text-lg mt-2">
                          {item.role}
                        </p>
                      </div>
                    )}

                    {/* Quote */}
                    <div className="relative mb-6 sm:mb-8">
                      <div className="absolute -top-3 sm:-top-5 -left-2 sm:-left-3 text-[55px] sm:text-[90px] leading-none text-red-100 font-serif">
                        "
                      </div>

                      <p className="relative text-lg sm:text-xl lg:text-2xl italic font-medium text-slate-800 leading-8 sm:leading-relaxed">
                        {item.quote}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-slate-600 text-base sm:text-lg leading-7 sm:leading-8 mb-6 sm:mb-8">
                      {item.description}
                    </p>

                    {/* Expertise */}
                    <div className="border-t border-slate-200 pt-6 sm:pt-8">
                      <h4 className="text-xs sm:text-sm font-bold uppercase tracking-[2px] sm:tracking-[3px] text-slate-500 mb-4 sm:mb-5">
                        {expertiseLabel}
                      </h4>

                      <div className="flex flex-wrap gap-2 sm:gap-3">
                        {item.expertise.map((exp, i) => (
                          <span
                            key={i}
                            className="rounded-full bg-gradient-to-r from-red-600 to-red-500 px-4 sm:px-5 py-2 text-xs sm:text-sm text-white font-medium shadow-lg"
                          >
                            {exp}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Button */}
                    <div className="mt-8 sm:mt-10">
                      <button className="w-full sm:w-auto rounded-full border border-red-600 px-6 sm:px-7 py-3 text-red-600 font-semibold hover:bg-red-600 hover:text-white transition-all duration-300">
                        View Profile
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}