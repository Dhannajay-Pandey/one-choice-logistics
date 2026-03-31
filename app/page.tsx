import AboutHero from "@/components/HomePageComponents/AboutHero";
import Hero from "@/components/HomePageComponents/Hero";
import Services from "@/components/HomePageComponents/Services";
import Testimonial from "@/components/HomePageComponents/Testimonial";
import WhyChoose from "@/components/HomePageComponents/WhyChoose";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <WhyChoose />
      <AboutHero /> 
      <Testimonial />
    </main>
  );
}
