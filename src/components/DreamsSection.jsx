import React, { useRef } from 'react';
import './DreamsSection.css';
import dreamsImage from '../assets/dreams-bg.jpg';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

const DreamsSection = () => {
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
        <section className="dreams-section">
            <div className="dreams-container">
                <motion.h2
                    className="dreams-title"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    Kanavu Startup Village: Where Dreams Take Flight
                </motion.h2>

                <motion.div
                    className="dreams-image-wrapper"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    style={{
                        rotateX,
                        rotateY,
                        transformStyle: "preserve-3d",
                    }}
                >
                    <img
                        src={dreamsImage}
                        alt="Future of Technology"
                        className="dreams-image"
                        style={{
                            transform: "translateZ(50px)", /* Slight pop effect */
                        }}
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default DreamsSection;
