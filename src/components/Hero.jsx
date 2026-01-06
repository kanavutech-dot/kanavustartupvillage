import { Link } from 'react-router-dom';
import React from 'react';
import './Hero.css';
import { FaCheckCircle, FaAngleDoubleRight } from 'react-icons/fa';
import { FiCheckCircle } from 'react-icons/fi';
import videoBg from '../assets/background.mp4';
import banner from '../assets/banner.png';

import { motion } from 'framer-motion';

const Hero = () => {
    // using local video
    const videoUrl = videoBg;

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, // Stagger animations by 0.2s
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <section className="hero">
            <div className="video-background">
                <video autoPlay loop muted playsInline poster={banner}>
                    <source src={videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="overlay"></div>
            </div>

            <motion.div
                className="container hero-content"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div className="hero-subtitle" variants={itemVariants}>
                    <FiCheckCircle className="check-icon" /> <span>Dream, Start, Grow</span>
                </motion.div>

                <motion.h1 className="hero-title" variants={itemVariants}>
                    Kanavu Startup Village
                </motion.h1>

                <motion.p className="hero-description" variants={itemVariants}>
                    Expert-driven development and digital marketing solutions<br />
                    An academy and hub designed for future-ready professionals
                </motion.p>

                <motion.div className="hero-footer" variants={itemVariants}>
                    <Link to="/contact" className="contact-btn">
                        Contact <FaAngleDoubleRight size={14} style={{ marginLeft: '5px' }} />
                    </Link>

                    <div className="location-info">
                        <strong>Annamalaikottai</strong>
                        <span>Sivagiri</span>
                    </div>
                </motion.div>
            </motion.div>

            {/* Optional dot grid overlay effect via CSS */}
            <div className="grid-overlay"></div>
        </section>
    );
};



export default Hero;
