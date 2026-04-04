import { MapPin } from "lucide-react";

type Props = {
  title: string;
  address: string;
  postal?: string;
  color: "red" | "blue";
};

export default function ContactCard({ title, address, postal, color }: Props) {
  return (
    <div className="relative bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
      
      {/* Left color bar */}
      <div
        className={`absolute left-0 top-0 h-full w-1 ${
          color === "red" ? "bg-red-600" : "bg-blue-600"
        } rounded-xl-[50px]` }
      />

      <div className="p-6">
        {/* Title + Icon */}
        <div className="flex items-start gap-3 mb-2">
          <MapPin
            className={`w-5 h-5 mt-1 ${
              color === "red" ? "text-red-600" : "text-blue-600"
            }`}
          />
          <h3 className="font-bold text-lg mb-2">
            {title}
          </h3>
        </div>

        {/* Address */}
        <p className="text-sm leading-relaxed pl-8 text-slate-600 text-[17px]">
          {address}
        </p>

        {/* Postal */}
        {postal && (
          <p className="text-gray-600 text-sm mt-1 pl-8 text-[17px] ">
            {postal}
          </p>
        )}
      </div>
    </div>
  );
}
