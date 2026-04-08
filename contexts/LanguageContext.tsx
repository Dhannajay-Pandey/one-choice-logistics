"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "fr";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    const keys = key.split(".");
    let value: any = translations[language];
    for (const k of keys) value = value?.[k];
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};

export const translations = {
  en: {
    nav: {
      home: "Home", services: "Services", about: "About Us",
      contact: "Contact", blog: "Blog", faq: "FAQ", getQuote: "Get a Quote",
    },
    hero: {
      badge: "GLOBAL LOGISTICS PARTNER",
      title: "We Move",
      titleHighlight: "Trust",
      titleRest: "Efficiency & Value.",
      subtitle: "End-to-end freight and logistics solutions tailored to the African market. From Guangzhou to Dakar, we are your strategic partner for growth.",
      cta1: "Start Shipping",
      cta2: "Our Story",
      stats: {
        experience: "Years Experience",
        containers: "Monthly Containers",
        hubs: "Global Hubs",
        support: "Client Support",
      },
    },
    services: {
      badge: "Our Expertise",
      title: "Comprehensive Logistics Solutions",
      subtitle: "We specialize in delivering seamless, end-to-end freight and logistics solutions tailored to the African market.",
      learnMore: "Learn More",
      customSolution: "Need a Custom Solution?",
      contactCta: "Contact Us Today",
      list: [
        { title: "Sea Freight (FCL & LCL)", desc: "Comprehensive maritime solutions connecting global hubs to West Africa.", slug: "sea-freight" },
        { title: "Air Freight", desc: "Rapid air cargo services for urgent commercial and personal shipments.", slug: "air-freight" },
        { title: "Customs Clearance", desc: "Navigating complex regulations to ensure smooth import and export.", slug: "customs-clearance" },
        { title: "Warehousing", desc: "Secure storage and efficient distribution networks.", slug: "warehousing" },
        { title: "Logistics Consulting", desc: "Strategic advice to optimize your logistics operations.", slug: "consulting" },
      ],
    },
    whyChoose: {
      badge: "Why Choose One Choice Logistics",
      title: "Strategic Logistics Built on Trust",
      subtitle: "20 years of expertise. Strong global network connecting Guangzhou and Yiwu for efficient operations.",
      commitment: "Commitment to transparency and accountability",
      features: [
        { title: "Experienced Leadership", desc: "Deep industry insight driven by over 20 years of expertise." },
        { title: "Global Network", desc: "Partnerships in key hubs like Guangzhou and Yiwu for efficient operations." },
        { title: "Transparent Pricing", desc: "Honest quotes with no hidden charges. We value integrity." },
        { title: "Tailored Solutions", desc: "Customized strategies that perfectly match your logistics needs." },
        { title: "Customer-Focused", desc: "A culture dedicated to client success and satisfaction at every step." },
        { title: "Reliable Delivery", desc: "Timely and safe delivery you can count on for your business." },
      ],
    },
    servicePage: {
      keyFeatures: "Key Features:",
      learnMore: "Learn More",
      getQuote: "Get a Quote",
      performance: "Performance",
    },
    pageBanner: {
      subtitle: "From origin to destination, we provide the expertise and infrastructure to keep your business moving.",
      home: "Home",
    },
    testimonialService: {
      badge: "Client Success Stories",
      title: "Trusted by Businesses Across West Africa",
      subtitle: "See what our partners have to say about our commitment to efficiency and reliability.",
      tabs: { sea: "Sea Freight", air: "Air Freight", transit: "Transit Freight" },
    },
    getFreeQuote: {
      title: "Ready to Optimize Your Logistics?",
      desc: "From small parcels to full container loads, we ensure safe and timely delivery for your business needs.",
      cta1: "Get a Free Quote",
      cta2: "Explore Services",
    },
    aboutHero: {
      badge: "Your Trusted Logistics Partner",
      title1: "Committed to Excellence,",
      title2: "Driven by Results",
      desc: "At One Choice Logistics, we don't just move cargo—we build lasting partnerships. Our professional team provides end-to-end logistics solutions with real-time visibility, dedicated support, and a commitment to excellence that has earned the trust of businesses across West Africa.",
      cta1: "Get a Quote",
      cta2: "About Us",
      stats: [
        { value: "98%", label: "On-Time Delivery Rate", color: "text-red-500" },
        { value: "24/7", label: "Customer Support", color: "text-blue-500" },
        { value: "500+", label: "Active Clients", color: "text-orange-500" },
      ],
    },
    testimonial: {
      quote: "At One Choice Logistics, we don't just move cargo — we move trust, efficiency, and long-term value for your business.",
      name: "Mrs. Fofana Mame Ndoumbé Diène",
      role: "General Director, ONE CHOICE LOGISTICS",
      desc: "With over 20 years of expertise in international logistics and supply chain management, Mrs. Diène brings visionary leadership to One Choice Logistics. Her commitment to client satisfaction has positioned the company as a rising force in West Africa's freight sector.",
    },
    footer: {
      description: "Your strategic partner in international logistics. We move trust, efficiency, and long-term value for your business.",
      quickLinks: "Quick Links", ourServices: "Our Services", contactUs: "Contact Us",
      address: "42, Rue Tolbiac, Immeuble El Hadj M. Niang, Plateau, Dakar, Senegal",
      copyright: "All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      links: [
        { name: "Home", url: "/" },
        { name: "Our Services", url: "/services" },
        { name: "About Us", url: "/about" },
        { name: "Contact", url: "/contact" },
      ],
      serviceLinks: [
        { name: "Sea Freight", url: "/services/sea-freight" },
        { name: "Air Freight", url: "/services/air-freight" },
        { name: "Customs Clearance", url: "/services/customs-clearance" },
        { name: "Warehousing", url: "/services/warehousing" },
      ],
    },
  },
  fr: {
    nav: {
      home: "Accueil", services: "Services", about: "À Propos",
      contact: "Contact", blog: "Blog", faq: "FAQ", getQuote: "Obtenir un Devis",
    },
    hero: {
      badge: "PARTENAIRE LOGISTIQUE MONDIAL",
      title: "Nous Déplaçons la",
      titleHighlight: "Confiance",
      titleRest: "l'Efficacité et la Valeur.",
      subtitle: "Solutions de fret et de logistique de bout en bout adaptées au marché africain. De Guangzhou à Dakar, nous sommes votre partenaire stratégique pour la croissance.",
      cta1: "Commencer l'Expédition",
      cta2: "Notre Histoire",
      stats: {
        experience: "Années d'Expérience",
        containers: "Conteneurs Mensuels",
        hubs: "Centres Mondiaux",
        support: "Support Client",
      },
    },
    services: {
      badge: "Notre Expertise",
      title: "Solutions Logistiques Complètes",
      subtitle: "Nous sommes spécialisés dans la fourniture de solutions de fret et de logistique de bout en bout adaptées au marché africain.",
      learnMore: "En Savoir Plus",
      customSolution: "Besoin d'une Solution Personnalisée ?",
      contactCta: "Contactez-Nous",
      list: [
        { title: "Fret Maritime (FCL & LCL)", desc: "Solutions maritimes complètes reliant les centres mondiaux à l'Afrique de l'Ouest.", slug: "sea-freight" },
        { title: "Fret Aérien", desc: "Services de fret aérien rapides pour les expéditions commerciales et personnelles urgentes.", slug: "air-freight" },
        { title: "Dédouanement", desc: "Navigation dans les réglementations complexes pour assurer une importation et exportation fluides.", slug: "customs-clearance" },
        { title: "Entreposage", desc: "Stockage sécurisé et réseaux de distribution efficaces.", slug: "warehousing" },
        { title: "Conseil en Logistique", desc: "Conseils stratégiques pour optimiser vos opérations logistiques.", slug: "consulting" },
      ],
    },
    whyChoose: {
      badge: "Pourquoi Choisir One Choice Logistics",
      title: "Logistique Stratégique Fondée sur la Confiance",
      subtitle: "20 ans d'expertise. Un solide réseau mondial reliant Guangzhou et Yiwu pour des opérations efficaces.",
      commitment: "Engagement envers la transparence et la responsabilité",
      features: [
        { title: "Leadership Expérimenté", desc: "Une vision approfondie du secteur grâce à plus de 20 ans d'expertise." },
        { title: "Réseau Mondial", desc: "Partenariats dans des centres clés comme Guangzhou et Yiwu pour des opérations efficaces." },
        { title: "Tarification Transparente", desc: "Des devis honnêtes sans frais cachés. Nous valorisons l'intégrité." },
        { title: "Solutions Sur Mesure", desc: "Des stratégies personnalisées qui correspondent parfaitement à vos besoins logistiques." },
        { title: "Centré sur le Client", desc: "Une culture dédiée au succès et à la satisfaction du client à chaque étape." },
        { title: "Livraison Fiable", desc: "Une livraison ponctuelle et sûre sur laquelle vous pouvez compter pour votre entreprise." },
      ],
    },
    servicePage: {
      keyFeatures: "Caractéristiques Clés :",
      learnMore: "En Savoir Plus",
      getQuote: "Obtenir un Devis",
      performance: "Performance",
    },
    pageBanner: {
      subtitle: "De l'origine à la destination, nous fournissons l'expertise et l'infrastructure pour maintenir votre entreprise en mouvement.",
      home: "Accueil",
    },
    testimonialService: {
      badge: "Témoignages Clients",
      title: "Approuvé par des Entreprises à Travers l'Afrique de l'Ouest",
      subtitle: "Voyez ce que nos partenaires disent de notre engagement envers l'efficacité et la fiabilité.",
      tabs: { sea: "Fret Maritime", air: "Fret Aérien", transit: "Fret en Transit" },
    },
    getFreeQuote: {
      title: "Prêt à Optimiser Votre Logistique ?",
      desc: "Des petits colis aux conteneurs complets, nous assurons une livraison sûre et ponctuelle pour vos besoins professionnels.",
      cta1: "Obtenir un Devis Gratuit",
      cta2: "Explorer les Services",
    },
    aboutHero: {
      badge: "Votre Partenaire Logistique de Confiance",
      title1: "Engagés pour l'Excellence,",
      title2: "Portés par les Résultats",
      desc: "Chez One Choice Logistics, nous ne déplaçons pas seulement des marchandises — nous construisons des partenariats durables. Notre équipe professionnelle fournit des solutions logistiques de bout en bout avec une visibilité en temps réel, un support dédié et un engagement envers l'excellence qui a gagné la confiance des entreprises à travers l'Afrique de l'Ouest.",
      cta1: "Obtenir un Devis",
      cta2: "À Propos",
      stats: [
        { value: "98%", label: "Taux de Livraison à Temps", color: "text-red-500" },
        { value: "24/7", label: "Support Client", color: "text-blue-500" },
        { value: "500+", label: "Clients Actifs", color: "text-orange-500" },
      ],
    },
    testimonial: {
      quote: "Chez One Choice Logistics, nous ne déplaçons pas seulement des marchandises — nous déplaçons la confiance, l'efficacité et la valeur à long terme pour votre entreprise.",
      name: "Mme Fofana Mame Ndoumbé Diène",
      role: "Directrice Générale, ONE CHOICE LOGISTICS",
      desc: "Avec plus de 20 ans d'expertise en logistique internationale et gestion de la chaîne d'approvisionnement, Mme Diène apporte un leadership visionnaire à One Choice Logistics. Son engagement envers la satisfaction client a positionné l'entreprise comme une force montante dans le secteur du fret en Afrique de l'Ouest.",
    },
    footer: {
      description: "Votre partenaire stratégique en logistique internationale. Nous déplaçons la confiance, l'efficacité et la valeur à long terme pour votre entreprise.",
      quickLinks: "Liens Rapides", ourServices: "Nos Services", contactUs: "Contactez-Nous",
      address: "42, Rue Tolbiac, Immeuble El Hadj M. Niang, Plateau, Dakar, Sénégal",
      copyright: "Tous droits réservés.",
      privacy: "Politique de Confidentialité",
      terms: "Conditions d'Utilisation",
      links: [
        { name: "Accueil", url: "/" },
        { name: "Nos Services", url: "/services" },
        { name: "À Propos", url: "/about" },
        { name: "Contact", url: "/contact" },
      ],
      serviceLinks: [
        { name: "Fret Maritime", url: "/services/sea-freight" },
        { name: "Fret Aérien", url: "/services/air-freight" },
        { name: "Dédouanement", url: "/services/customs-clearance" },
        { name: "Entreposage", url: "/services/warehousing" },
      ],
    },
  },
};
