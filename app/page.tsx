import AboutHero from "@/components/HomePageComponents/AboutHero";
import GetFreeQuote from "@/components/HomePageComponents/Get-a-Free-Quote";
import Hero from "@/components/HomePageComponents/Hero";
import Services from "@/components/HomePageComponents/Services";
import Testimonial from "@/components/HomePageComponents/Testimonial";
import WhyChoose from "@/components/HomePageComponents/WhyChoose";
import { GET } from "@/data/GetFreeQuote";

export default async function Home() {
  const res = await GET();
  const quoteData = await res.json();

  return (
    <main className="w-full min-h-screen">
      <div className="pt-10">
        <Hero />
      </div>
      <Services />
      <WhyChoose />
      <AboutHero /> 
      <Testimonial />
      <GetFreeQuote {...quoteData} />
    </main>
  );
}
