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

export default function Leadership({ title, subtitle, expertiseLabel, members }: Props) {
  return (
    <section className="bg-white py-10 sm:py-12">
      <div className="container mx-auto px-4">

        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3 sm:mb-4">
            {title}
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
            {subtitle}
          </p>
        </div>

        <div className="space-y-6 sm:space-y-10">
          {members.map((item, index) => {
            const isReverse = index % 2 !== 0;
            return (
              <div
                key={index}
                className={`flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12 items-center bg-white p-5 sm:p-8 lg:p-12 rounded-3xl shadow-lg border border-slate-100 ${
                  isReverse ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* IMAGE */}
                <div className="w-full lg:w-1/3 flex justify-center">
                  <div className="relative w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64">
                    <div className="absolute inset-0 bg-slate-100 rounded-full transform -rotate-6"></div>
                    <div className="absolute inset-0 bg-slate-200 rounded-full transform rotate-3"></div>
                    <div className="relative z-10 w-full h-full rounded-full bg-slate-50 border-4 border-white shadow-xl overflow-hidden">
                      <Image src={item.image}  fill className="object-cover" />
                    </div>
                    <div className="absolute bottom-0 right-0 z-20 bg-red-600 text-white p-2 sm:p-3 rounded-full shadow-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 sm:w-6 sm:h-6">
                        <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"/>
                        <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"/>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="w-full lg:w-2/3 text-center lg:text-left">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                    {item.name}
                  </h3>
                  <p className="text-base sm:text-xl text-red-600 font-semibold mb-4 sm:mb-6">
                    {item.role}
                  </p>

                  <div className="mb-5 sm:mb-8 relative">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 sm:w-10 sm:h-10 text-slate-100 absolute -top-3 -left-2 -z-10">
                      <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"/>
                      <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"/>
                    </svg>
                    <p className="text-sm sm:text-lg text-slate-700 italic font-medium">
                      &ldquo;{item.quote}&rdquo;
                    </p>
                  </div>

                  <p className="text-slate-600 mb-5 sm:mb-8 leading-relaxed text-sm sm:text-base md:text-lg">
                    {item.description}
                  </p>

                  <div className="bg-slate-50 p-4 sm:p-6 rounded-xl border border-slate-100 w-full">
                    <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center justify-center lg:justify-start gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                        <rect width="20" height="14" x="2" y="6" rx="2"/>
                      </svg>
                      {expertiseLabel}
                    </h4>
                    <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                      {item.expertise.map((exp, i) => (
                        <span key={i} className="bg-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-slate-800 text-xs sm:text-sm font-medium shadow-sm border border-slate-100">
                          {exp}
                        </span>
                      ))}
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
