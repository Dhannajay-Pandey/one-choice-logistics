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
    <section className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-[#0B1A33] rounded-3xl p-6 md:p-10 text-center text-white">

          {/* ICON */}
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-500/20 text-blue-400 text-xl">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.54 15H17a2 2 0 0 0-2 2v4.54"/><path d="M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17"/><path d="M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"/><circle cx="12" cy="12" r="10"/></svg>
            </div>
          </div>

          {/* TITLE */}
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{title}</h2>

          {/* DESCRIPTION */}
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-12">{description}</p>

          {/* MAP */}
          <div className="bg-white rounded-2xl p-2 shadow-lg mb-8">
            <NetworkMap />
          </div>

          {/* FEATURES */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {features.map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10">
                <h4 className="text-sm font-semibold mb-1">{item.title}</h4>
                <p className="text-xs text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
