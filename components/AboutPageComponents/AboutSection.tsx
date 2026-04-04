import Image from "next/image";

type Card = {
  title: string;
  description: string;
  icon: string;
};

type Props = {
  title: string;
  paragraphs: string[];
  cards: Card[];
  image: string;
};

export default function AboutSection({
  title,
  paragraphs,
  cards,
  image,
}: Props) {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-6">

        {/* ✅ MAIN GRID FIXED */}
        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              {title}
            </h2>

            {paragraphs.map((text, i) => (
              <p key={i} className="text-lg text-slate-600 mb-6 leading-relaxed">
                {text}
              </p>
            ))}
          </div>

          {/* RIGHT CARDS */}
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-6">
            {cards.map((card, index) => (
              <div
                key={index}
                className="bg-slate-50 p-8 rounded-2xl border border-slate-100"
              >
                {/* Icon */}
                <div
                  className={`w-10 h-10 flex items-center justify-center rounded-full mb-3 ${
                    card.icon === "trust"
                      ? "bg-red-100 text-red-500"
                      : "bg-blue-100 text-blue-500"
                  }`}
                >
                 {card.icon === "trust" ? (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-shield-check w-10 h-10 text-red-600 mb-4"
                >
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                </svg>
                ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-target w-10 h-10 text-sky-600 mb-4"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
                )}
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {card.title}
                </h3>

                <p className="text-slate-600">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* IMAGE */}
        <div className="mt-10">
          <div className="relative w-full h-[850px] rounded-xl overflow-hidden shadow-md">
            <Image
              src={image}
              alt="About"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}