import React from 'react';
import { motion } from 'framer-motion';
import SeoContent from '../components/SeoContent';

const Seo = () => {
    const bannerImage = "https://tech.kanavu.school/wp-content/uploads/2026/01/tech.kanavu.school-tech-seo-banner-37-example-tech-seo-banner-37-example.jpeg";

    return (
        <main className="seo-page">
            <section className="seo-hero" style={{ position: 'relative', height: '100vh', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>

                {/* Background Image Layer */}
                <div
                    className="hero-image-layer"
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundImage: `url(${bannerImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        zIndex: 0
                    }}
                />

                {/* Overlay */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'rgba(0,0,0,0.6)',
                    zIndex: 1
                }}></div>

                <div className="hero-content" style={{ position: 'relative', zIndex: 2, textAlign: 'left', padding: '0 2rem', maxWidth: '1200px', width: '100%' }}>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        style={{ fontSize: '2.8rem', fontWeight: '700', marginBottom: '1rem', lineHeight: '1.2' }}
                    >
                        SEO
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        style={{ fontSize: '1.1rem', maxWidth: '600px', margin: '0', lineHeight: '1.6', color: '#f3f4f6' }}
                    >
                        Boost your online visibility and drive organic traffic with our expert SEO strategies. We help your business rank higher, reach more customers, and grow online.
                    </motion.p>
                </div>
            </section>

            <SeoContent />
        </main>
    );
};

export default Seo;
