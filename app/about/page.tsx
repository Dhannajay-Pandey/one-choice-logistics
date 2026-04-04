import React from 'react'
import AboutBradcrums from '@/components/AboutPageComponents/AboutBradcrums';
import AboutSection from '@/components/AboutPageComponents/AboutSection';
import MissionVision from '@/components/AboutPageComponents/MissionVision';
import GlobalNetwork from '@/components/AboutPageComponents/GlobalNetwork';
import { MissionVisionData } from '@/data/MissionVision';
import { getAboutData } from '@/data/About';
import { GlobalNetworkData } from '@/data/GlobalNetworkData';

const AboutPage = async () => {
  const aboutData = await getAboutData();

  return (
    <>
    <main className="flex-grow">
        <AboutBradcrums 
        title="Our Story"
        description="Founded in 2020, we are built on the pillars of trust, transparency, and operational excellence."
        bgImage="/images/about/about-bg.jpg" 
        />
        <AboutSection 
        title={aboutData.title}
        paragraphs={aboutData.paragraphs}
        cards={aboutData.cards}
        image={aboutData.image}
        />
        <MissionVision cards={MissionVisionData} />
        <GlobalNetwork 
          title={GlobalNetworkData.title}
          description={GlobalNetworkData.description}
          features={GlobalNetworkData.features}
        />
    </main>
    </>
  )
}

export default AboutPage
