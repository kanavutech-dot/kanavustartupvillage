import React, { useState } from 'react';
import videoSource from '../assets/academy-banner.mp4';
// Reusing development fallback for consistency until a specific one is provided or I could use a place holder
import fallbackImage from '../assets/academy-fallback.png';
import { motion } from 'framer-motion';
import './Academy.css';
import AcademyProcess from '../components/AcademyProcess';
import AcademyInteraction from '../components/AcademyInteraction';
import AcademyServices from '../components/AcademyServices';
import AcademyQuote from '../components/AcademyQuote';
import AcademyHosting from '../components/AcademyHosting';
import AcademyFAQ from '../components/AcademyFAQ';





const Academy = () => {
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);

    return (
        <main className="academy-page">
            <section className="academy-hero" style={{ position: 'relative', height: '100vh', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>

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

                <div className="hero-content" style={{ position: 'relative', zIndex: 3, textAlign: 'left', padding: '0 2rem', maxWidth: '1200px', width: '100%' }}>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        style={{ fontSize: '2.8rem', fontWeight: '700', marginBottom: '1rem', lineHeight: '1.2', textTransform: 'uppercase' }}
                    >
                        ACADEMY
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        style={{ fontSize: '1.1rem', maxWidth: '550px', margin: '0', lineHeight: '1.6', color: '#f3f4f6' }}
                    >
                        Kanavu Academy empowers learners with practical skills, innovative thinking, and real-world knowledge to turn dreams into successful careers.
                    </motion.p>
                </div>
            </section>
            <AcademyProcess />
            <AcademyInteraction />
            <AcademyServices />
            <AcademyQuote />
            <AcademyHosting />
            <AcademyFAQ />


        </main>
    );
};

export default Academy;
