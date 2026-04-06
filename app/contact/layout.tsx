import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - One Choice Logistics",
  description: "Logistics management platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="max-w-full mx-auto">
        {children}
      </div>
    </div>
  );
}