import React from 'react';
import { motion } from 'framer-motion';
import UiUxContent from '../components/UiUxContent';

const UiUx = () => {
    const bannerImage = "https://tech.kanavu.school/wp-content/uploads/2025/12/tech.kanavu.school-tech-uiux-3242-example-tech-uiux-3242-example.jpeg";

    return (
        <main className="uiux-page">
            <section className="uiux-hero" style={{ position: 'relative', height: '100vh', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>

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
                        UI/UX
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        style={{ fontSize: '1.1rem', maxWidth: '600px', margin: '0', lineHeight: '1.6', color: '#f3f4f6' }}
                    >
                        Crafting intuitive and visually stunning designs that delight users. We create seamless experiences that connect your brand with your audience.
                    </motion.p>
                </div>
            </section>

            <UiUxContent />
        </main>
    );
};

export default UiUx;
