import React from 'react';
import './DigitalQuoteSection.css';
import digitalQuoteBg from '../assets/digital-quote-bg.jpg';
import { motion } from 'framer-motion';

const DigitalQuoteSection = () => {
    return (
        <section
            className="digital-quote-section"
            style={{ backgroundImage: `url(${digitalQuoteBg})` }}
        >
            <div className="digital-quote-overlay"></div>
            <div className="digital-quote-container">
                <motion.h2
                    className="digital-quote-text"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    Marketing is no longer about the stuff that you make, but about the stories you tell.
                </motion.h2>
            </div>
        </section>
    );
};

export default DigitalQuoteSection;
