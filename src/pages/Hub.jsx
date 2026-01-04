import React, { useState } from 'react';
import videoSource from '../assets/hub-banner.mp4';
import fallbackImage from '../assets/hub-fallback.png';
import { motion } from 'framer-motion';
import HubIntroSection from '../components/HubIntroSection';
import HubServices from '../components/HubServices';
import HubCommunitySection from '../components/HubCommunitySection';
import HubHostingSection from '../components/HubHostingSection';
import HubFAQSection from '../components/HubFAQSection';
import './Hub.css';

const Hub = () => {
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);

    return (
        <main className="hub-page">
            <section className="hub-hero">
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
                    Your browser does not support the video tag.
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

                <div className="hub-hero-content">
                    <motion.h1
                        className="hub-hero-title"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        HUB
                    </motion.h1>
                    <motion.p
                        className="hub-hero-subtitle"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Kanavu Startup Village serves as a dynamic hub for innovation and development, bringing together creators, developers, and entrepreneurs to collaborate, build real-world solutions, and drive impactful growth through technology and teamwork.
                    </motion.p>
                </div>
            </section>

            <HubIntroSection />
            <HubServices />
            <HubCommunitySection />
            <HubHostingSection />
            <HubFAQSection />
        </main>
    );
};

export default Hub;
