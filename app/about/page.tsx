"use client";

import AboutBradcrums from "@/components/AboutPageComponents/AboutBradcrums";
import AboutSection from "@/components/AboutPageComponents/AboutSection";
import MissionVision from "@/components/AboutPageComponents/MissionVision";
import GlobalNetwork from "@/components/AboutPageComponents/GlobalNetwork";
import Leadership from "@/components/AboutPageComponents/Leadership";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/contexts/LanguageContext";
import Leadershipdata from "@/data/Leadership";

export default function AboutPage() {
  const { language } = useLanguage();
  const a = translations[language].about;

  const members = a.leadership.members.map((m, i) => ({
    ...m,
    image: Leadershipdata[i]?.image ?? "",
  }));

  return (
    <main>
      <AboutBradcrums
        title={a.breadcrumb.title}
        description={a.breadcrumb.description}
        bgImage="/images/about/about-bg.jpg"
        homeLabel={a.breadcrumb.home}
      />
      <AboutSection
        title={a.section.title}
        paragraphs={a.section.paragraphs}
        cards={a.section.cards}
        image="/images/about/group.jpg"
      />
      <MissionVision cards={a.missionVision} />
      <GlobalNetwork
        title={a.globalNetwork.title}
        description={a.globalNetwork.description}
        features={a.globalNetwork.features}
      />
      <Leadership
        title={a.leadership.title}
        subtitle={a.leadership.subtitle}
        expertiseLabel={a.leadership.expertiseLabel}
        members={members}
      />
    </main>
  );
}
