import React from 'react';
import './HubIntroSection.css';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import hubIntroImage from '../assets/hub-intro.jpg';

const HubIntroSection = () => {
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
        <section className="hub-intro-section">
            <div className="hub-intro-container">
                <motion.h2
                    className="hub-intro-title"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    Kanavu Hub
                </motion.h2>

                <motion.p
                    className="hub-intro-description"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    KSV Hub is a ready-to-operate business space designed for founders who want to start fast without setup delays, heavy costs, or infrastructure hassles. With fully furnished workstations, high-speed internet, backup power, meeting rooms, security, and more, everything your team needs is already in place. The location offers the ideal blend of calm and connectivity, enabling deep work while staying easily accessible. Whether you're building a product, scaling a team, or shaping a bold idea, KSV Hub provides an efficient, all-inclusive workspace that boosts productivity, cuts overhead, and supports instant growth. Bring your vision — we'll handle the rest, so you can start operating from Day 1.
                </motion.p>

                <motion.div
                    className="hub-intro-image-wrapper"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    style={{
                        rotateX,
                        rotateY,
                        transformStyle: "preserve-3d",
                        cursor: "pointer"
                    }}
                >
                    <img
                        src={hubIntroImage}
                        alt="Kanavu Hub Workspace"
                        className="hub-intro-image"
                        style={{
                            transform: "translateZ(50px)", /* Slight pop effect */
                        }}
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default HubIntroSection;
