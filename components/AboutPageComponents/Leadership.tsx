import Image from "next/image";
import Leadershipdata from "@/data/Leadership";

type Leader = {
  name: string;
  role: string;
  quote: string;
  description: string;
  image: string;
  expertise: string[];
};

export default function Leadership() {
  return (
    <section className="bg-white-100 py-12 ">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Meet Our Leadership
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
           Our team brings decades of combined experience in international logistics, ensuring your cargo is in expert hands.
          </p>
        </div>

        {/* Zig-Zag Cards */}
        <div className="space-y-10">
          {Leadershipdata.map((item, index) => {
            const isReverse = index % 2 !== 0;

            return (
              <div
                key={index}
                className={`flex flex-col lg:flex-row gap-12 items-center bg-white p-8 lg:p-12 rounded-3xl shadow-lg border border-slate-100 ${
                  isReverse ? "lg:flex-row-reverse" : ""
                }`}
              >
                
                {/* IMAGE */}
                <div className="w-full lg:w-1/3 flex justify-center">
                  <div className="relative w-64 h-64 md:w-72 md:h-72">
                    <div className="absolute inset-0 bg-slate-100 rounded-full transform -rotate-6"></div>
                    <div className="absolute inset-0 bg-slate-200 rounded-full transform rotate-3"></div>

                    <div className="relative z-10 w-full h-full rounded-full bg-slate-50 border-4 border-white shadow-xl flex items-center justify-center overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                      
                    </div>
                    <div class="absolute bottom-0 right-0 z-20 bg-red-600 text-white p-3 rounded-full shadow-lg"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-quote w-6 h-6"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg></div>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="w-full lg:w-2/3 text-center lg:text-left">
                  <h3 className="text-3xl font-bold text-slate-900 mb-2">
                    {item.name}
                  </h3>

                  <p className="text-xl text-red-600 font-semibold mb-6">
                    {item.role}
                  </p>
                    <div class="mb-8 relative">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-quote w-10 h-10 text-slate-100 absolute -top-4 -left-2 -z-10"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
                        <p className="text-lg text-slate-700 italic font-medium">
                    "{item.quote}"
                  </p>
                  </div>
                  

                  <p className="text-slate-600 mb-8 leading-relaxed text-lg">
                    {item.description}
                  </p>

                  {/* Expertise */}
                  <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 inline-block w-full">
                    <h4 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center justify-center lg:justify-start gap-2">
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-briefcase w-4 h-4"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect width="20" height="14" x="2" y="6" rx="2"></rect></svg> Expertise
                    </h4>

                    <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                      {item.expertise.map((exp, i) => (
                        <span
                          key={i}
                          className="bg-white px-4 py-2 rounded-full text-slate-800 text-sm font-medium shadow-sm border border-slate-100"
                        >
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