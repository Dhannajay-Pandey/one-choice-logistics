"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

type Props = {
  title: string;
  description?: string;
  bgImage?: string;
  homeLabel?: string;
};

export default function AboutBradcrums({ title, description, bgImage, homeLabel = "Home" }: Props) {
  const pathname = usePathname();

  const pathSegments = pathname.split("/").filter(Boolean);

  const breadcrumbs = pathSegments.map((segment, index) => {
    const href = "/" + pathSegments.slice(0, index + 1).join("/");
    return {
      label: segment.replace("-", " "),
      href,
    };
  });

  return (
    <div
      className="relative w-full h-[220px] sm:h-[260px] md:h-[300px] flex items-center"
      style={{
        backgroundImage: `url(${bgImage || "/hero.jpg"})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 to-blue-900/60"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 text-white">

        <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-3 sm:mb-6">
          {title}
        </h1>

        {description && (
          <p className="text-sm sm:text-base md:text-xl text-slate-300 max-w-2xl">
            {description}
          </p>
        )}

        <div className="flex items-center gap-2 text-xs sm:text-sm mb-4 text-gray-300 mt-3 sm:mt-4 flex-wrap">
          <Link href="/">{homeLabel}</Link>
          {breadcrumbs.map((item, i) => (
            <span key={i} className="flex items-center gap-2">
              <span>/</span>
              <Link href={item.href} className="capitalize hover:underline">
                {item.label}
              </Link>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
