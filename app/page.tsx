import AboutHero from "@/components/HomePageComponents/AboutHero";
import GetFreeQuote from "@/components/HomePageComponents/Get-a-Free-Quote";
import Hero from "@/components/HomePageComponents/Hero";
import Services from "@/components/HomePageComponents/Services";
import Testimonial from "@/components/HomePageComponents/Testimonial";
import WhyChoose from "@/components/HomePageComponents/WhyChoose";

export default function Home() {
  return (
    <main className="w-full min-h-screen">
      <Hero />
      <Services />
      <WhyChoose />
      <AboutHero />
      <Testimonial />
      <GetFreeQuote image="/images/boy.png" />
    </main>
  );
}
