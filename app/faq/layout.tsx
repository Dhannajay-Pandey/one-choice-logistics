import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog & Insights - One Choice Logistics",
  description: "Logistics management platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="pt-[20px]">
      <div className="max-w-full mx-auto">
        {children}
      </div>
    </div>
  );
}