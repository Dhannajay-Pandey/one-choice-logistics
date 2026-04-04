import Image from "next/image";

export default function SuccessSection({
  title,
  desc,
  image,
}: any) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border flex flex-col md:flex-row items-center gap-6">
      
      <Image
        src={image}
        alt="team"
        width={200}
        height={200}
        className="object-contain"
      />

      <div>
        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">{title}</h3>
        <p className="text-lg text-slate-600 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}