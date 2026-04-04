type Card = {
  title: string;
  description: string;
  variant: "mission" | "vision";
};

type Props = {
  cards: Card[];
};

export default function MissionVision({ cards }: Props) {
  return (
    <section className="bg-white-100 py-12">
      <div className="container mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-6">
          
          {cards.map((card, index) => (
            <div
              key={index}
              className={`relative p-8 md:p-10 rounded-3xl overflow-hidden ${
                card.variant === "mission"
                  ? "bg-red-700 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              {/* Background Shape */}
              {card.variant === "mission" ? (
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-16 -mt-16"></div>
              ) : (
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-gray-300 rounded-full -ml-16 -mb-16"></div>
              )}

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold mb-4">
                  {card.title}
                </h3>

                <p
                  className={`text-sm md:text-base leading-relaxed ${
                    card.variant === "mission"
                      ? "opacity-90"
                      : "text-gray-600"
                  }`}
                >
                  {card.description}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}