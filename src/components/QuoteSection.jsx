import React from 'react';
import './QuoteSection.css';
import quoteBg from '../assets/quote-bg.jpg';
import { motion } from 'framer-motion';

const QuoteSection = () => {
    return (
        <section
            className="quote-section"
            style={{ backgroundImage: `url(${quoteBg})` }}
        >
            <div className="quote-overlay"></div>
            <div className="quote-container">
                <motion.h2
                    className="quote-text"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    The function of good software is to make the complex appear to be simple.
                </motion.h2>
            </div>
        </section>
    );
};

export default QuoteSection;
