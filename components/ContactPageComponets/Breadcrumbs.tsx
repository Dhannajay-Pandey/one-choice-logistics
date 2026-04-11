type Props = {
  title: string;
  subtitle: string;
};

export default function Breadcrumbs({ title, subtitle }: Props) {
  return (
    <section className="relative bg-[#0f172a] text-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/contact.png')" }}
      />
      <div className="absolute inset-0 bg-[#0f172a]/70" />
      <div className="relative z-10 text-white py-12 sm:py-36 px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
          {title}
        </h2>
        <p className="text-slate-300 text-sm sm:text-base">{subtitle}</p>
      </div>
    </section>
  );
}
