import React from 'react';
import './CodeBanner.css';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import codeBannerImg from '../assets/code-banner.jpg';

const CodeBanner = () => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 500, damping: 50 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 50 });

    const rotateX = useTransform(mouseY, [-0.5, 0.5], [15, -15]); // Matches DreamsSection
    const rotateY = useTransform(mouseX, [-0.5, 0.5], [-15, 15]); // Matches DreamsSection

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
        <section className="code-banner-section">
            <motion.div
                className="code-banner-wrapper"
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
                    src={codeBannerImg}
                    alt="Coding Background"
                    className="code-banner-img"
                    style={{
                        transform: "translateZ(50px)" // Pop out effect
                    }}
                />
            </motion.div>
        </section>
    );
};

export default CodeBanner;
