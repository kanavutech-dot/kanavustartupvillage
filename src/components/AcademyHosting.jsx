import React from 'react';
import './AcademyHosting.css';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import hostingImg from '../assets/academy-hosting.jpg';

const AcademyHosting = () => {
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
        <section className="academy-hosting-section">
            <div className="academy-hosting-container">
                <motion.p
                    className="academy-hosting-text"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    Scalable, secure, and high-performance software solutions to accelerate your business growth. <a href="/contact" className="academy-contact-link">Get In Touch With Us</a>
                </motion.p>
                <motion.div
                    className="academy-hosting-img-wrapper"
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
                        src={hostingImg}
                        alt="Hosting Services"
                        className="academy-hosting-img"
                        style={{
                            transform: "translateZ(50px)"
                        }}
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default AcademyHosting;
