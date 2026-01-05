import React from 'react';
import './HelpSection.css';
import { motion } from 'framer-motion';
import { FaEnvelope, FaCommentDots } from 'react-icons/fa';

const HelpSection = () => {
    return (
        <section className="help-section">
            <div className="help-container">
                <motion.h2
                    className="help-title"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    Need Help? Get In Touch
                </motion.h2>

                <div className="help-options">
                    <motion.a
                        href="mailto:kanavustartupvillage@gmail.com"
                        className="help-item"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        style={{ textDecoration: 'none' }}
                    >
                        <div className="help-icon-box">
                            <FaEnvelope />
                        </div>
                        <div className="help-text-content">
                            <span className="help-label">Support Email</span>
                            <span className="help-value">kanavustartupvillage@gmail.com</span>
                        </div>
                    </motion.a>

                    <motion.a
                        href="https://wa.me/918825889368"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="help-item"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        style={{ textDecoration: 'none' }}
                    >
                        <div className="help-icon-box">
                            <FaCommentDots />
                        </div>
                        <div className="help-text-content">
                            <span className="help-label">Talk To Our Agent</span>
                            <span className="help-value">Live Chat Now</span>
                        </div>
                    </motion.a>
                </div>
            </div>
        </section>
    );
};

export default HelpSection;
