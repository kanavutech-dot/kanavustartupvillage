import React from 'react';
import Hero from '../components/Hero';
import ObjectiveSection from '../components/ObjectiveSection';
import ServicesSection from '../components/ServicesSection';
import ProcessSection from '../components/ProcessSection';
import StatsSection from '../components/StatsSection';
import CommunitySection from '../components/CommunitySection';
import ApproachSection from '../components/ApproachSection';
import DreamsSection from '../components/DreamsSection';
import FAQSection from '../components/FAQSection';
import TechStackSection from '../components/TechStackSection';
import HelpSection from '../components/HelpSection';

const Home = () => {
    return (
        <main>
            <Hero />
            <ObjectiveSection />
            <ServicesSection />
            <ProcessSection />
            <StatsSection />
            <CommunitySection />
            <ApproachSection />
            <DreamsSection />
            <FAQSection />
            <TechStackSection />
            <HelpSection />
        </main>
    );
};

export default Home;
