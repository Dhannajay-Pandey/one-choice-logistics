"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { LanguageProvider } from "../contexts/LanguageContext";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <Header />
      <div className="pt-[72px]">{children}</div>
      <Footer />
    </LanguageProvider>
  );
}
