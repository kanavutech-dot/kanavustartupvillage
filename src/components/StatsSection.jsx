import React from 'react';
import './StatsSection.css';
import bgImage from '../assets/grow-bg.jpg';
import { motion } from 'framer-motion';

const StatsSection = () => {
    return (
        <section className="stats-section">
            <div className="stats-bg">
                <img src={bgImage} alt="Background" />
                <div className="stats-overlay"></div>
            </div>

            <div className="stats-container">
                <div className="stats-content-wrapper">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <p className="stats-small-title">It's time to build your career</p>
                        <h2 className="stats-main-title">Grow with kanavu</h2>
                        <p className="stats-description">
                            Kanavu Startup Village (KSV) stands as a dynamic hub for entrepreneurship and innovation, where the seeds of ideas and aspirations take root and flourish.
                        </p>
                    </motion.div>

                    <div className="stats-grid">
                        <motion.div
                            className="stat-item"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <span className="stat-number">40+</span>
                            <span className="stat-label">Startups</span>
                        </motion.div>

                        <motion.div
                            className="stat-item"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            <span className="stat-number">200+</span>
                            <span className="stat-label">Resources</span>
                        </motion.div>

                        <motion.div
                            className="stat-item"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            <span className="stat-number">30+</span>
                            <span className="stat-label">Scientists</span>
                        </motion.div>

                        <motion.div
                            className="stat-item"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <span className="stat-number">25k sqft</span>
                            <span className="stat-label">Office Area</span>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
