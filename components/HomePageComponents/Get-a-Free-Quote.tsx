import Image from "next/image";

type Props = {
  title: string;
  description: string;
  image: string;
};

export default function GetFreeQuote({ title, description, image }: Props) {
  return (
    <section className="bg-gradient-to-r from-[#b31217] to-[#e52d27] text-white">
      <div className="container mx-auto px-6 py-20 grid md:grid-cols-2 items-center gap-10">
        
        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            {title}
          </h1>

          <p className="mt-6 text-sm md:text-lg text-white/90 max-w-lg">
            {description}
          </p>

          {/* BUTTONS */}
          <div className="mt-8 flex gap-4 flex-wrap">
            <button className="bg-white text-red-700 px-6 py-3 rounded-full font-semibold hover:scale-105 transition">
              Get a Free Quote
            </button>

            <button className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-red-700 transition">
              Explore Services
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center">
          <div className="bg-red-600/40 backdrop-blur-md rounded-3xl p-6 shadow-xl">
            <Image
              src={image}
              alt="hero"
              width={420}
              height={420}
              className="object-contain"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
}