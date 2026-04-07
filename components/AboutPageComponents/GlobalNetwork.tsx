import dynamic from "next/dynamic";

const NetworkMap = dynamic(() => import("./NetworkMap"), { ssr: false });

type Feature = {
  title: string;
  description: string;
};

type Props = {
  title: string;
  description: string;
  features: Feature[];
};

export default function GlobalNetwork({ title, description, features }: Props) {
  return (
    <section className="py-10 sm:py-12 px-4 sm:px-6 md:px-12">
      <div className="container mx-auto px-0">
        <div className="bg-[#0B1A33] rounded-3xl p-4 sm:p-6 md:p-10 text-center text-white">

          <div className="flex justify-center mb-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-blue-500/20 text-blue-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21.54 15H17a2 2 0 0 0-2 2v4.54"/>
                <path d="M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17"/>
                <path d="M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"/>
                <circle cx="12" cy="12" r="10"/>
              </svg>
            </div>
          </div>

          <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-6">{title}</h2>
          <p className="text-sm sm:text-base md:text-xl text-slate-300 max-w-3xl mx-auto mb-6 sm:mb-12">{description}</p>

          <div className="mb-8 sm:mb-16 bg-white rounded-3xl p-2 shadow-2xl overflow-x-auto">
            <NetworkMap />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto text-left">
            {features.map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md p-4 sm:p-6 rounded-xl border border-white/10">
                <h4 className="text-base sm:text-lg font-bold text-white mb-2">{item.title}</h4>
                <p className="text-slate-300 text-xs sm:text-sm">{item.description}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
