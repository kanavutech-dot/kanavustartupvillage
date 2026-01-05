import React from 'react';
import './DigitalMarketingBanner.css';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import bannerImg from '../assets/digital-marketing-banner.jpeg';

const DigitalMarketingBanner = () => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 500, damping: 50 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 50 });

    const rotateX = useTransform(mouseY, [-0.5, 0.5], [10, -10]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], [-10, 10]);

    const handleMouseMove = (event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <section className="digital-marketing-banner-section">
            <div className="digital-marketing-container">
                <motion.h3
                    className="digital-marketing-text"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    Scalable, secure, and high-performance software solutions to accelerate your business growth. <a href="/contact" className="highlight-red">Get In Touch With Us</a>
                </motion.h3>

                <motion.div
                    className="digital-marketing-wrapper"
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    style={{
                        rotateX,
                        rotateY,
                        transformStyle: "preserve-3d"
                    }}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <img
                        src={bannerImg}
                        alt="Digital Marketing"
                        className="digital-marketing-img"
                        style={{
                            transform: "translateZ(30px)"
                        }}
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default DigitalMarketingBanner;
