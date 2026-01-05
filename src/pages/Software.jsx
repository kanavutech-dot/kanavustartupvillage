import React from 'react';
import { motion } from 'framer-motion';
import SoftwareContent from '../components/SoftwareContent';

const Software = () => {
    const bannerImage = "https://tech.kanavu.school/wp-content/uploads/2025/12/react.jpeg";

    return (
        <main className="software-page">
            <section className="software-hero" style={{ position: 'relative', height: '100vh', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>

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
                        Software
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        style={{ fontSize: '1.1rem', maxWidth: '600px', margin: '0', lineHeight: '1.6', color: '#f3f4f6' }}
                    >
                        Develop fast, dynamic, and scalable web applications with React. We craft interactive user interfaces that deliver seamless experiences across all devices.
                    </motion.p>
                </div>
            </section>

            <SoftwareContent />
        </main>
    );
};

export default Software;
