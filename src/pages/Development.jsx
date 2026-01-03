import React, { useState } from 'react';
import videoSource from '../assets/development-banner.mp4';
import fallbackImage from '../assets/development-fallback.png';
import { motion } from 'framer-motion';

import ExecutionProcess from '../components/ExecutionProcess';
import CodeBanner from '../components/CodeBanner';
import DevelopmentServices from '../components/DevelopmentServices';
import QuoteSection from '../components/QuoteSection';
import TechAttributes from '../components/TechAttributes';
import ApproachSection from '../components/ApproachSection';
import HostingSection from '../components/HostingSection';
import FaqSection from '../components/FAQSection';

const Development = () => {
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);

    return (
        <main className="development-page">
            <section className="development-hero" style={{ position: 'relative', height: '100vh', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                {/* ... (Hero content remains same) ... */}
                {/* Fallback Image */}
                <div
                    className="hero-image-layer"
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundImage: `url(${fallbackImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        zIndex: 1,
                        opacity: isVideoLoaded ? 0 : 1,
                        transition: 'opacity 1s ease'
                    }}
                />

                {/* Video Layer */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    onLoadedData={() => setIsVideoLoaded(true)}
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        zIndex: 0, // Behind image initially, but image fades out
                    }}
                >
                    <source src={videoSource} type="video/mp4" />
                </video>

                {/* Overlay for text readability */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'rgba(0,0,0,0.5)',
                    zIndex: 2
                }}></div>

                <div className="hero-content" style={{ position: 'relative', zIndex: 3, textAlign: 'left', padding: '0 2rem', maxWidth: '1200px', width: '100%' }}>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        style={{ fontSize: '2.8rem', fontWeight: '700', marginBottom: '1rem', lineHeight: '1.2' }}
                    >
                        Simply exceptional<br />software engineering
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        style={{ fontSize: '1.1rem', maxWidth: '550px', margin: '0', lineHeight: '1.6', color: '#f3f4f6' }}
                    >
                        Proven IT consulting & custom software development solution for your complex business challenges ensuring long term success.
                    </motion.p>
                </div>
            </section>

            <ExecutionProcess />
            <CodeBanner />
            <DevelopmentServices />
            <QuoteSection />
            <TechAttributes />
            <ApproachSection />
            <HostingSection />
            <FaqSection />
        </main>
    );
};

export default Development;
