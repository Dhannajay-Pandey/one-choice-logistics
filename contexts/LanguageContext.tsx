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
      subtitle: "End-to-end freight and logistics solutions tailored to the  global market , we are your strategic partner for growth.",
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
      subtitle: "20 years of expertise. Strong global network connecting Partner in key hubs like China, Italy and France for efficient operations.",
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
      servicesData: [
        {
          title: "Sea Freight (FCL & LCL)",
          description: "Comprehensive maritime solutions connecting global hubs to West Africa.",
          performance: "15 containers / month",
          features: [
            "Weekly consolidated shipments (LCL) from Asia to Dakar",
            "Full Container Load (FCL) solutions – 20', 40', and high cube",
            "Strong operational presence in Guangzhou & Yiwu",
            "Complete document support: B/L, BESC, DPI",
          ],
        },
        {
          title: "Air Freight",
          description: "Rapid air cargo services for urgent commercial and personal shipments.",
          performance: "40–50 tonnes / month",
          features: [
            "Fast delivery of commercial samples and urgent shipments",
            "Last-mile delivery to client locations",
            "Coordination with customs and airport authorities",
            "Handling of sensitive and high-value cargo",
          ],
        },
        {
          title: "Customs Clearance",
          description: "Navigating complex regulations to ensure smooth import and export.",
          performance: "100+ containers / month",
          features: [
            "End-to-end import/export declaration via GAINDE",
            "Full document handling: DPI, PA, FDI",
            "Close coordination with port and customs agents",
            "Clearance at both Dakar Port and Airport",
          ],
        },
        {
          title: "Warehousing & Distribution",
          description: "Secure storage and efficient distribution networks.",
          performance: "Secure Facilities",
          features: [
            "Secure storage solutions for air and sea cargo",
            "Real-time photo documentation",
            "Inventory control and stock tracking",
            "Final-mile delivery coordination",
          ],
        },
        {
          title: "Supply Chain Consulting",
          description: "Strategic advice to optimize your logistics operations.",
          performance: "Expert Advice",
          features: [
            "Route planning and freight optimization",
            "Customized cargo consolidation strategies",
            "Supplier coordination",
            "Cost-reduction analysis",
          ],
        },
      ],
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
    faq: {
      banner: {
        title: "Knowledge Hub",
        subtitle: "Everything you need to know about shipping with One Choice Logistics. Can't find what you're looking for? Contact our team.",
        searchPlaceholder: "Search for answers...",
      },
      cantFind: "Can't find the answer?",
      contactUs: "Contact Us",
      sections: [
        {
          category: "General Questions",
          questions: [
            { question: "How long does sea freight take from China to Dakar?", answer: "Transit times typically range from 35 to 45 days, depending on the shipping line and route. We offer both direct and transshipment options to balance speed and cost." },
            { question: "Do you offer LCL (Groupage) services?", answer: "Yes, we specialize in LCL consolidation from our warehouses in Guangzhou and Yiwu. You can ship as little as 1 CBM without needing to fill a whole container." },
            { question: "What documents are required for customs clearance?", answer: "Generally, you need the Commercial Invoice, Packing List, Bill of Lading (B/L), and Certificate of Origin. For specific goods, additional permits may be required. Our team guides you through this process." },
            { question: "Is cargo insurance mandatory?", answer: "While not legally mandatory for all shipments, we highly recommend it. We offer comprehensive cargo insurance to protect your goods against loss or damage during transit." },
            { question: "How can I track my shipment?", answer: "Once your shipment is booked, you will receive a tracking number. You can contact our support team or use the shipping line's tracking portal for real-time updates." },
          ],
        },
        {
          category: "Sea Freight",
          questions: [
            { question: "What is the difference between LCL and FCL?", answer: "LCL (Less than Container Load) means your cargo shares container space with other shippers — ideal for smaller volumes. FCL (Full Container Load) gives you exclusive use of a 20ft or 40ft container — best for larger volumes with faster transit and lower risk of damage." },
            { question: "How long does sea freight from China to Dakar take?", answer: "Transit time from Guangzhou or Yiwu to Dakar typically ranges from 25 to 35 days depending on the shipping line, route, and port congestion. We offer weekly consolidated departures to ensure regular schedules." },
            { question: "What documents are required for sea freight?", answer: "Standard documents include the Bill of Lading (B/L), commercial invoice, packing list, BESC (Bordereau Électronique de Suivi des Cargaisons), and DPI (Déclaration Préalable d'Importation). Our team handles all documentation on your behalf." },
          ],
        },
        {
          category: "Air Freight",
          questions: [
            { question: "When should I use air freight instead of sea freight?", answer: "Air freight is ideal for urgent, time-sensitive, or high-value shipments. If your cargo needs to arrive within days rather than weeks, or if the goods are perishable or fragile, air freight is the better option despite the higher cost." },
            { question: "What types of cargo can be shipped by air?", answer: "We handle commercial samples, urgent merchandise, pharmaceuticals, electronics, fashion items, and other high-value goods. Dangerous goods and certain restricted items require special handling — contact us for details." },
            { question: "How long does air freight from China to Dakar take?", answer: "Air freight from China to Dakar typically takes 3 to 7 days including customs clearance. For extremely urgent shipments, we can arrange express services with transit times as low as 2 days." },
          ],
        },
        {
          category: "Customs Clearance",
          questions: [
            { question: "Do you handle customs clearance in Senegal?", answer: "Yes. We provide full customs clearance services at both Dakar Port and Blaise Diagne International Airport. Our team manages all declarations through the GAINDE system and coordinates directly with customs authorities." },
            { question: "What is the DPI and why is it required?", answer: "The DPI (Déclaration Préalable d'Importation) is a mandatory pre-import declaration required by Senegalese customs for most commercial shipments. It must be obtained before the cargo departs from the origin country. We handle this process for all our clients." },
          ],
        },
        {
          category: "Tracking & Support",
          questions: [
            { question: "Can I track my shipment?", answer: "Yes. We provide real-time updates and photo documentation throughout the shipping process. Our team proactively communicates key milestones — from cargo pickup to port departure, arrival, and final delivery." },
            { question: "What happens if my cargo is delayed?", answer: "In the event of a delay, our team immediately investigates the cause and communicates the updated timeline to you. We work closely with shipping lines, airlines, and port authorities to minimize disruptions and find alternative solutions when needed." },
            { question: "How can I contact your support team?", answer: "Our support team is available 24/7. You can reach us by phone at +221 76 140 57 57, by email at serviceclient@onechoicelogistics.com, or by visiting our office at 42 Rue Tolbiac, Plateau, Dakar, Senegal." },
          ],
        },
      ],
    },
    contact: {
      breadcrumb: {
        title: "Contact Our Team",
        subtitle: "We are here to help with your logistics needs 24/7.",
      },
      offices: [
        { title: "Head Office", address: "42, Rue Tolbiac, Immeuble El Haj M. Niang, Plateau, Dakar, Senegal", postal: "Postal Code: 13000", color: "red" as const },
        { title: "Cargo Facility", address: "C.I.C.E.S \u2013 Orange Pavilion, Dakar, Senegal", postal: "", color: "blue" as const },
      ],
      contacts: {
        callUs: "Call Us",
        emailUs: "Email Us",
        phones: ["+221 76 140 57 57", "+221 76 362 95 95"],
        email: "serviceclient@onechoicelogistics.com",
      },
      success: {
        title: "Dedicated to Your Success",
        desc: "Our team is committed to providing exceptional service and tailored logistics solutions to meet your unique business needs.",
      },
      form: {
        title: "Send us a message",
        subtitle: "Fill out the form below for quotes or inquiries.",
        fullName: "Full Name",
        email: "Email",
        phone: "Phone",
        subject: "Subject",
        message: "Message",
        send: "Send Message",
      },
    },
    about: {
      breadcrumb: {
        title: "Our Story",
        description: "Founded in 2020, we are built on the pillars of trust, transparency, and operational excellence.",
        home: "Home",
      },
      section: {
        title: "About ONE CHOICE LOGISTICS",
        paragraphs: [
          "Founded in October 5, 2020, ONE CHOICE LOGISTICS is a registered SAL company based in Senegal. We specialize in delivering seamless, end-to-end freight and logistics solutions tailored to the African market.",
          "Led by Mrs. Fofana Mame Ndoumbé Diène, One Choice Logistics serves as a strategic logistics partner, offering complete solutions from origin to destination. We take the time to understand your unique needs and tailor our services accordingly, ensuring a strategic execution of your freight.",
        ],
        cards: [
          { title: "Trust", description: "Fostering a culture of transparency and accountability in every shipment.", icon: "trust" },
          { title: "Excellence", description: "Operational efficiency that creates real long-term value for your business.", icon: "excellence" },
        ],
      },
      missionVision: [
        { title: "Our Mission", description: "To create real value for your business by improving the efficiency, cost-effectiveness, and transparency of your logistics operations. We strive to be more than a service provider. We are a partner in your growth.", variant: "mission" as const },
        { title: "Our Vision", description: "To rise as the leading force in West Africa's freight and logistics sector, setting new standards for reliability and client satisfaction through our robust global network and innovative solutions.", variant: "vision" as const },
      ],
      globalNetwork: {
        title: "Our Global Network",
        description: "To enhance our international logistics capabilities, we proudly collaborate with CHOICE Logistics (China) — our trusted partner with warehouses in Guangzhou and Yiwu.",
        features: [
          { title: "Smooth Cargo Flow", description: "Seamless connectivity from Asian manufacturing hubs to West African markets." },
          { title: "Real-time Visibility", description: "Advanced coordination ensuring you always know where your cargo is." },
          { title: "Reliable Handling", description: "Professional consolidation services protecting your goods at every step." },
        ],
      },
      leadership: {
        title: "Meet Our Leadership",
        subtitle: "Our team brings decades of combined experience in international logistics, ensuring your cargo is in expert hands.",
        expertiseLabel: "Expertise",
        members: [
          {
            name: "Mrs. Fofana Mame Ndoumbé Diène",
            role: "General Director",
            quote: "At One Choice Logistics, we don't just move cargo — we move trust, efficiency, and long-term value for your business.",
            description: "Mrs. Mame Fofana is the founder and CEO of One Choice Logistique, a company specializing in integrated logistics solutions including sea consolidation, air freight, transportation, warehousing, and transit services. She leads the company with a vision focused on operational efficiency, reliability, and customer satisfaction. She holds a Master's degree (Master II) in Transport and Logistics obtained from the University of Littoral Côte d'Opale (France) in partnership with the Trainmar Center of Dakar. She also holds a Master's degree (Master II) in Marketing and Communication as well as a Higher Diploma in Management from the Institut Supérieur de Management (ISM) of Dakar, and a Bachelor's degree in English from Cheikh Anta Diop University of Dakar, enabling her to operate easily in an international environment. Before founding One Choice Logistique, Mrs. Fofana gained solid professional experience in several international companies.",
            expertise: ["Supply Chain", "Strategy", "International Trade"],
          },
          {
            name: "Guedado DJIGO",
            role: "Sales Manager",
            quote: "Your growth is our growth. We grow together.",
            description: "Guedado brings a dynamic approach to client relations, ensuring that every partnership is built on understanding and mutual growth. His deep knowledge of the local market helps clients navigate complex trade environments with ease.",
            expertise: ["Client Relations", "Market Analysis", "Business Dev"],
          },
          {
            name: "Bousso DIOP",
            role: "Sea Freight Manager",
            quote: "The ocean connects us, but reliability keeps us together.",
            description: "Bousso oversees our maritime operations with precision and care. From consolidating LCL shipments to managing full containers, she ensures that every vessel carries our promise of reliability.",
            expertise: ["Maritime Logistics", "Containers", "Port Ops"],
          },
          {
            name: "Fatou DIENG",
            role: "Air Freight Manager",
            quote: "Speed and safety are our standard.",
            description: "When speed is of the essence, Fatou delivers. Leading our air freight division, she specializes in time-critical shipments, ensuring that urgent cargo reaches its destination safely and on schedule.",
            expertise: ["Air Logistics", "Shipping", "Time Mgmt"],
          },
        ],
      },
    },
    aboutHero: {
      badge: "Your Trusted Logistics Partner",
      title1: "Committed to Excellence,",
      title2: "Driven by Results",
      desc: "Our professional team provides end-to-end logistics solutions with real-time visibility, dedicated support, and a commitment to excellence that has earned the trust of businesses across West Africa.",
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
      quote: "",
      quote: "At One Choice Logistics, we don't just move cargo  we move trust, efficiency, and long-term value for your business.",
      name: "Mrs. Fofana Mame Ndoumbé Diène",
      role: "General Director, ONE CHOICE LOGISTICS",
      desc: "With over 20 years of expertise in international logistics and supply chain management, Mrs. Diène brings visionary leadership to One Choice Logistics. Her commitment to client satisfaction has positioned the company as a rising force in West Africa's freight sector.",
    },
    footer: {
      description: "",
      description: "At One Choice Logistics, we don't just move cargo — we move trust, efficiency, and long-term value for your business.",
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
      contact: "Contactez", blog: "Blog", faq: "FAQ", getQuote: "Obtenir un Devis",
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
      servicesData: [
        {
          title: "Fret Maritime (FCL & LCL)",
          description: "Solutions maritimes complètes reliant les centres mondiaux à l'Afrique de l'Ouest.",
          performance: "15 conteneurs / mois",
          features: [
            "Expéditions consolidées hebdomadaires (LCL) d'Asie vers Dakar",
            "Solutions de conteneur complet (FCL) – 20', 40' et high cube",
            "Forte présence opérationnelle à Guangzhou et Yiwu",
            "Support documentaire complet : B/L, BESC, DPI",
          ],
        },
        {
          title: "Fret Aérien",
          description: "Services de fret aérien rapides pour les expéditions commerciales et personnelles urgentes.",
          performance: "40–50 tonnes / mois",
          features: [
            "Livraison rapide d'échantillons commerciaux et d'envois urgents",
            "Livraison au dernier kilomètre chez le client",
            "Coordination avec les douanes et les autorités aéroportuaires",
            "Traitement des marchandises sensibles et de haute valeur",
          ],
        },
        {
          title: "Dédouanement",
          description: "Navigation dans les réglementations complexes pour assurer une importation et exportation fluides.",
          performance: "100+ conteneurs / mois",
          features: [
            "Déclaration import/export de bout en bout via GAINDE",
            "Gestion complète des documents : DPI, PA, FDI",
            "Coordination étroite avec les agents portuaires et douaniers",
            "Dédouanement au port et à l'aéroport de Dakar",
          ],
        },
        {
          title: "Entreposage & Distribution",
          description: "Stockage sécurisé et réseaux de distribution efficaces.",
          performance: "Installations Sécurisées",
          features: [
            "Solutions de stockage sécurisé pour fret aérien et maritime",
            "Documentation photo en temps réel",
            "Contrôle des stocks et suivi des inventaires",
            "Coordination de la livraison finale",
          ],
        },
        {
          title: "Conseil en Chaîne d'Approvisionnement",
          description: "Conseils stratégiques pour optimiser vos opérations logistiques.",
          performance: "Conseils d'Experts",
          features: [
            "Planification des itinéraires et optimisation du fret",
            "Stratégies personnalisées de consolidation de fret",
            "Coordination des fournisseurs",
            "Analyse de réduction des coûts",
          ],
        },
      ],
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
    faq: {
      banner: {
        title: "Centre de Connaissances",
        subtitle: "Tout ce que vous devez savoir sur l'expédition avec One Choice Logistics. Vous ne trouvez pas ce que vous cherchez ? Contactez notre équipe.",
        searchPlaceholder: "Rechercher des réponses...",
      },
      cantFind: "Vous ne trouvez pas la réponse ?",
      contactUs: "Contactez-Nous",
      sections: [
        {
          category: "Questions Générales",
          questions: [
            { question: "Combien de temps prend le fret maritime de la Chine à Dakar ?", answer: "Les délais de transit varient généralement de 35 à 45 jours, selon la compagnie maritime et l'itinéraire. Nous proposons des options directes et de transbordement pour équilibrer rapidité et coût." },
            { question: "Proposez-vous des services LCL (Groupage) ?", answer: "Oui, nous sommes spécialisés dans la consolidation LCL depuis nos entrepôts à Guangzhou et Yiwu. Vous pouvez expédier à partir d'1 CBM sans avoir besoin de remplir un conteneur entier." },
            { question: "Quels documents sont nécessaires pour le dédouanement ?", answer: "En général, vous avez besoin de la facture commerciale, de la liste de colisage, du connaissement (B/L) et du certificat d'origine. Pour certaines marchandises, des permis supplémentaires peuvent être requis. Notre équipe vous guide tout au long de ce processus." },
            { question: "L'assurance cargo est-elle obligatoire ?", answer: "Bien que non légalement obligatoire pour toutes les expéditions, nous la recommandons vivement. Nous proposons une assurance cargo complète pour protéger vos marchandises contre la perte ou les dommages pendant le transit." },
            { question: "Comment puis-je suivre mon expédition ?", answer: "Une fois votre expédition réservée, vous recevrez un numéro de suivi. Vous pouvez contacter notre équipe d'assistance ou utiliser le portail de suivi de la compagnie maritime pour des mises à jour en temps réel." },
          ],
        },
        {
          category: "Fret Maritime",
          questions: [
            { question: "Quelle est la différence entre LCL et FCL ?", answer: "LCL (Less than Container Load) signifie que votre fret partage l'espace d'un conteneur avec d'autres expéditeurs — idéal pour les petits volumes. FCL (Full Container Load) vous donne l'usage exclusif d'un conteneur de 20 ou 40 pieds — idéal pour les grands volumes avec un transit plus rapide et un risque de dommages réduit." },
            { question: "Combien de temps prend le fret maritime de la Chine à Dakar ?", answer: "Le délai de transit de Guangzhou ou Yiwu à Dakar varie généralement de 25 à 35 jours selon la compagnie maritime, l'itinéraire et la congestion portuaire. Nous proposons des départs consolidés hebdomadaires pour garantir des horaires réguliers." },
            { question: "Quels documents sont nécessaires pour le fret maritime ?", answer: "Les documents standard comprennent le connaissement (B/L), la facture commerciale, la liste de colisage, le BESC (Bordereau Électronique de Suivi des Cargaisons) et le DPI (Déclaration Préalable d'Importation). Notre équipe gère toute la documentation en votre nom." },
          ],
        },
        {
          category: "Fret Aérien",
          questions: [
            { question: "Quand dois-je utiliser le fret aérien plutôt que maritime ?", answer: "Le fret aérien est idéal pour les expéditions urgentes, sensibles au temps ou de grande valeur. Si votre fret doit arriver en quelques jours plutôt qu'en semaines, ou si les marchandises sont périssables ou fragiles, le fret aérien est la meilleure option malgré le coût plus élevé." },
            { question: "Quels types de marchandises peuvent être expédiés par avion ?", answer: "Nous traitons des échantillons commerciaux, des marchandises urgentes, des produits pharmaceutiques, de l'électronique, des articles de mode et d'autres marchandises de grande valeur. Les marchandises dangereuses et certains articles restreints nécessitent une manipulation spéciale — contactez-nous pour plus de détails." },
            { question: "Combien de temps prend le fret aérien de la Chine à Dakar ?", answer: "Le fret aérien de la Chine à Dakar prend généralement 3 à 7 jours, dédouanement inclus. Pour les expéditions extrêmement urgentes, nous pouvons organiser des services express avec des délais de transit aussi courts que 2 jours." },
          ],
        },
        {
          category: "Dédouanement",
          questions: [
            { question: "Gérez-vous le dédouanement au Sénégal ?", answer: "Oui. Nous fournissons des services complets de dédouanement au port de Dakar et à l'aéroport international Blaise Diagne. Notre équipe gère toutes les déclarations via le système GAINDE et coordonne directement avec les autorités douanières." },
            { question: "Qu'est-ce que le DPI et pourquoi est-il requis ?", answer: "Le DPI (Déclaration Préalable d'Importation) est une déclaration pré-importation obligatoire requise par les douanes sénégalaises pour la plupart des expéditions commerciales. Il doit être obtenu avant que le fret ne quitte le pays d'origine. Nous gérons ce processus pour tous nos clients." },
          ],
        },
        {
          category: "Suivi & Assistance",
          questions: [
            { question: "Puis-je suivre mon expédition ?", answer: "Oui. Nous fournissons des mises à jour en temps réel et une documentation photo tout au long du processus d'expédition. Notre équipe communique proactivement les étapes clés — de la collecte du fret au départ du port, à l'arrivée et à la livraison finale." },
            { question: "Que se passe-t-il si mon fret est retardé ?", answer: "En cas de retard, notre équipe enquête immédiatement sur la cause et vous communique le calendrier mis à jour. Nous travaillons en étroite collaboration avec les compagnies maritimes, les compagnies aériennes et les autorités portuaires pour minimiser les perturbations et trouver des solutions alternatives si nécessaire." },
            { question: "Comment puis-je contacter votre équipe d'assistance ?", answer: "Notre équipe d'assistance est disponible 24h/24 et 7j/7. Vous pouvez nous joindre par téléphone au +221 76 140 57 57, par email à serviceclient@onechoicelogistics.com, ou en visitant notre bureau au 42 Rue Tolbiac, Plateau, Dakar, Sénégal." },
          ],
        },
      ],
    },
    contact: {
      breadcrumb: {
        title: "Contactez Notre Équipe",
        subtitle: "Nous sommes disponibles 24h/24 et 7j/7 pour répondre à vos besoins logistiques.",
      },
      offices: [
        { title: "Siège Social", address: "42, Rue Tolbiac, Immeuble El Haj M. Niang, Plateau, Dakar, Sénégal", postal: "Code Postal : 13000", color: "red" as const },
        { title: "Entrepôt Cargo", address: "C.I.C.E.S \u2013 Pavillon Orange, Dakar, Sénégal", postal: "", color: "blue" as const },
      ],
      contacts: {
        callUs: "Appelez-Nous",
        emailUs: "Écrivez-Nous",
        phones: ["+221 76 140 57 57", "+221 76 362 95 95"],
        email: "serviceclient@onechoicelogistics.com",
      },
      success: {
        title: "Dédiés à Votre Succès",
        desc: "Notre équipe s'engage à fournir un service exceptionnel et des solutions logistiques sur mesure pour répondre à vos besoins professionnels uniques.",
      },
      form: {
        title: "Envoyez-nous un message",
        subtitle: "Remplissez le formulaire ci-dessous pour des devis ou des renseignements.",
        fullName: "Nom Complet",
        email: "Email",
        phone: "Téléphone",
        subject: "Sujet",
        message: "Message",
        send: "Envoyer le Message",
      },
    },
    about: {
      breadcrumb: {
        title: "Notre Histoire",
        description: "Fondée en 2020, nous sommes bâtis sur les piliers de la confiance, la transparence et l'excellence opérationnelle.",
        home: "Accueil",
      },
      section: {
        title: "À Propos de ONE CHOICE LOGISTICS",
        paragraphs: [
          "Fondée le 5 octobre 2020, ONE CHOICE LOGISTICS est une société SAL enregistrée au Sénégal. Nous sommes spécialisés dans la fourniture de solutions de fret et de logistique de bout en bout adaptées au marché africain.",
          "Dirigée par Mme Fofana Mame Ndoumbé Diène, One Choice Logistics est un partenaire logistique stratégique offrant des solutions complètes de l'origine à la destination. Nous prenons le temps de comprendre vos besoins uniques et adaptons nos services en conséquence, assurant une exécution stratégique de votre fret.",
        ],
        cards: [
          { title: "Confiance", description: "Favoriser une culture de transparence et de responsabilité dans chaque expédition.", icon: "trust" },
          { title: "Excellence", description: "Une efficacité opérationnelle qui crée une valeur réelle à long terme pour votre entreprise.", icon: "excellence" },
        ],
      },
      missionVision: [
        { title: "Notre Mission", description: "Créer une valeur réelle pour votre entreprise en améliorant l'efficacité, la rentabilité et la transparence de vos opérations logistiques. Nous aspirons à être plus qu'un prestataire de services. Nous sommes un partenaire de votre croissance.", variant: "mission" as const },
        { title: "Notre Vision", description: "Devenir la force leader dans le secteur du fret et de la logistique en Afrique de l'Ouest, en établissant de nouveaux standards de fiabilité et de satisfaction client grâce à notre solide réseau mondial et nos solutions innovantes.", variant: "vision" as const },
      ],
      globalNetwork: {
        title: "Notre Réseau Mondial",
        description: "Pour renforcer nos capacités logistiques internationales, nous collaborons firement avec CHOICE Logistics (Chine) — notre partenaire de confiance avec des entrepôts à Guangzhou et Yiwu.",
        features: [
          { title: "Flux de Fret Fluide", description: "Connectivité transparente des centres de fabrication asiatiques vers les marchés d'Afrique de l'Ouest." },
          { title: "Visibilité en Temps Réel", description: "Coordination avancée vous permettant de toujours savoir où se trouve votre fret." },
          { title: "Manutention Fiable", description: "Services de consolidation professionnels protégeant vos marchandises à chaque étape." },
        ],
      },
      leadership: {
        title: "Notre Équipe Dirigeante",
        subtitle: "Notre équipe cumule des décennies d'expérience en logistique internationale, garantissant que votre fret est entre des mains expertes.",
        expertiseLabel: "Expertise",
        members: [
          {
            name: "Mme Fofana Mame Ndoumbé Diène",
            role: "Directrice Générale",
            quote: "Chez One Choice Logistics, nous ne déplaçons pas seulement des marchandises — nous déplaçons la confiance, l'efficacité et la valeur à long terme pour votre entreprise.",
            description: "Mme Mame Fofana est la fondatrice et PDG de One Choice Logistique, une société spécialisée dans les solutions logistiques intégrées incluant la consolidation maritime, le fret aérien, le transport, l'entreposage et les services de transit. Elle dirige l'entreprise avec une vision axée sur l'efficacité opérationnelle, la fiabilité et la satisfaction client. Elle est titulaire d'un Master II en Transport et Logistique obtenu à l'Université du Littoral Côte d'Opale (France) en partenariat avec le Centre Trainmar de Dakar. Elle détient également un Master II en Marketing et Communication ainsi qu'un Diplôme Supérieur en Management de l'Institut Supérieur de Management (ISM) de Dakar, et une Licence en Anglais de l'Université Cheikh Anta Diop de Dakar, lui permettant d'évoluer aisément dans un environnement international. Avant de fonder One Choice Logistique, Mme Fofana a acquis une solide expérience professionnelle dans plusieurs entreprises internationales.",
            expertise: ["Chaîne d'Approvisionnement", "Stratégie", "Commerce International"],
          },
          {
            name: "Guedado DJIGO",
            role: "Directeur Commercial",
            quote: "Votre croissance est notre croissance. Nous grandissons ensemble.",
            description: "Guedado apporte une approche dynamique aux relations clients, veillant à ce que chaque partenariat soit fondé sur la compréhension et la croissance mutuelle. Sa connaissance approfondie du marché local aide les clients à naviguer dans des environnements commerciaux complexes.",
            expertise: ["Relations Clients", "Analyse de Marché", "Développement Commercial"],
          },
          {
            name: "Bousso DIOP",
            role: "Responsable Fret Maritime",
            quote: "L'océan nous connecte, mais la fiabilité nous unit.",
            description: "Bousso supervise nos opérations maritimes avec précision et soin. De la consolidation des expéditions LCL à la gestion des conteneurs complets, elle veille à ce que chaque navire porte notre promesse de fiabilité.",
            expertise: ["Logistique Maritime", "Conteneurs", "Opérations Portuaires"],
          },
          {
            name: "Fatou DIENG",
            role: "Responsable Fret Aérien",
            quote: "La rapidité et la sécurité sont notre standard.",
            description: "Quand la rapidité est essentielle, Fatou livre. À la tête de notre division fret aérien, elle est spécialisée dans les expéditions urgentes, garantissant que le fret critique atteint sa destination en toute sécurité et dans les délais.",
            expertise: ["Logistique Aérienne", "Expédition", "Gestion du Temps"],
          },
        ],
      },
    },
    aboutHero: {
      badge: "Votre Partenaire Logistique de Confiance",
      title1: "Engagés pour l'Excellence,",
      title2: "Portés par les Résultats",
      desc: "Notre équipe professionnelle fournit des solutions logistiques de bout en bout avec une visibilité en temps réel, un support dédié et un engagement envers l'excellence qui a gagné la confiance des entreprises à travers l'Afrique de l'Ouest.",
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
      quote: "",
      quote: "Chez One Choice Logistics, nous ne déplaçons pas seulement des marchandises  nous déplaçons la confiance, l'efficacité et la valeur à long terme pour votre entreprise.",
      name: "Mme Fofana Mame Ndoumbé Diène",
      role: "Directrice Générale, ONE CHOICE LOGISTICS",
      desc: "Avec plus de 20 ans d'expertise en logistique internationale et gestion de la chaîne d'approvisionnement, Mme Diène apporte un leadership visionnaire à One Choice Logistics. Son engagement envers la satisfaction client a positionné l'entreprise comme une force montante dans le secteur du fret en Afrique de l'Ouest.",
    },
    footer: {
      description: "",
      description: "Chez One Choice Logistics, nous ne déplaçons pas seulement des marchandises — nous déplaçons la confiance, l'efficacité et la valeur à long terme pour votre entreprise.",
      quickLinks: "Liens Rapides", ourServices: "Nos Services", contactUs: "Contactez-Nous",
      address: "42, Rue Tolbiac, Immeuble El Hadj M. Niang, Plateau, Dakar, Sénégal",
      copyright: "Tous droits réservés.",
      privacy: "Politique de Confidentialité",
      terms: "Conditions d'Utilisation",
      links: [
        { name: "Accueil", url: "/" },
        { name: "Nos Services", url: "/services" },
        { name: "À Propos", url: "/about" },
        { name: "Contactez", url: "/contact" },
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
