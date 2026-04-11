"use client";

import PageBanner from "@/components/PageBanner";
import ServiceCard from "@/components/serviceComponentes/ServiceCard";
import TestimonialService from "@/components/serviceComponentes/TestimonialService";
import { services } from "@/data/ServiceApi/services";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/contexts/LanguageContext";

export default function ServicePage() {
  const { language } = useLanguage();
  const translatedServices = translations[language].servicePage.servicesData;

  const mergedServices = services.map((s, i) => ({
    ...s,
    ...translatedServices[i],
  }));

  return (
    <main>
      <PageBanner />
      <div className="container mx-auto px-4 py-10 sm:py-16 space-y-12 sm:space-y-20">
        {mergedServices.map((service, index) => (
          <ServiceCard key={service.id} service={service} reverse={index % 2 !== 0} />
        ))}
      </div>
      <TestimonialService />
    </main>
  );
}
