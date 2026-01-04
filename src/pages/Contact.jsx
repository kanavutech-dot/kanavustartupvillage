import React, { useState } from 'react';
import videoSource from '../assets/contact-banner.mp4';
import fallbackImage from '../assets/contact-fallback.png';
import { motion } from 'framer-motion';
import ContactMap from '../components/ContactMap';
import ContactFormSection from '../components/ContactFormSection';
import './Contact.css';

const Contact = () => {
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);

    return (
        <main className="contact-page">
            <section className="contact-hero" style={{ position: 'relative', height: '100vh', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', marginBottom: '0' }}>

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

                <div className="contact-hero-content" style={{ position: 'relative', zIndex: 3, textAlign: 'left', padding: '0 2rem', maxWidth: '1200px', width: '100%' }}>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        style={{ fontSize: '2.8rem', fontWeight: '700', marginBottom: '1rem', lineHeight: '1.2', textTransform: 'uppercase' }}
                    >
                        CONTACT
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        style={{ fontSize: '1.1rem', maxWidth: '600px', margin: '0', lineHeight: '1.6', color: '#f3f4f6' }}
                    >
                        Have questions or ideas to discuss? Get in touch with Kanavu Startup Village to collaborate, innovate, and grow together. We're here to support your journey—connect with us today.
                    </motion.p>
                </div>
            </section>

            <ContactMap />
            <ContactFormSection />
        </main>
    );
};

export default Contact;
