import React from 'react';
import './HubHostingSection.css';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import hubHostingImg from '../assets/hub-hosting.jpg';

const HubHostingSection = () => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 500, damping: 50 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 50 });

    const rotateX = useTransform(mouseY, [-0.5, 0.5], [15, -15]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], [-15, 15]);

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
        <section className="hub-hosting-section">
            <div className="hub-hosting-container">
                <motion.p
                    className="hub-hosting-text"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    Fast, reliable, and secure hosting to fast track your business. <a href="#contact" className="highlight-red">Get In Touch With Us</a>
                </motion.p>

                <motion.div
                    className="hub-hosting-wrapper"
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
                        src={hubHostingImg}
                        alt="Hub Hosting"
                        className="hub-hosting-img"
                        style={{
                            transform: "translateZ(50px)" // Pop out effect
                        }}
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default HubHostingSection;
