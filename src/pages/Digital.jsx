import React, { useState } from 'react';
import videoSource from '../assets/digital-banner.mp4';
import fallbackImage from '../assets/digital-fallback.png';
import { motion } from 'framer-motion';
import DigitalProcess from '../components/DigitalProcess';
import DigitalBrainSection from '../components/DigitalBrainSection';
import DigitalServices from '../components/DigitalServices';
import DigitalQuoteSection from '../components/DigitalQuoteSection';
import DigitalAttributes from '../components/DigitalAttributes';
import DigitalMarketingBanner from '../components/DigitalMarketingBanner';
import DigitalFAQ from '../components/DigitalFAQ';
import './Digital.css';

const Digital = () => {
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);

    return (
        <main className="digital-page">
            <section className="digital-hero" style={{ position: 'relative', height: '100vh', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>

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
                        zIndex: 0,
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

                <div className="digital-hero-content">
                    <motion.h1
                        className="digital-hero-title"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        DIGITAL
                    </motion.h1>
                    <motion.p
                        className="digital-hero-subtitle"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Boost your online visibility, attract the right audience, and move your business forward through smart digital marketing
                    </motion.p>
                </div>
            </section>

            <DigitalProcess />
            <DigitalBrainSection />
            <DigitalServices />
            <DigitalQuoteSection />
            <DigitalAttributes />
            <DigitalMarketingBanner />
            <DigitalFAQ />
        </main>
    );
};

export default Digital;
