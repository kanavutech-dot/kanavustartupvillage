import React from 'react';
import './AcademyQuote.css';
import academyQuoteBg from '../assets/academy-quote-bg.jpg';
import { motion } from 'framer-motion';

const AcademyQuote = () => {
    return (
        <section
            className="academy-quote-section"
            style={{ backgroundImage: `url(${academyQuoteBg})` }}
        >
            <div className="academy-quote-overlay"></div>
            <div className="academy-quote-container">
                <motion.h2
                    className="academy-quote-text"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    The beautiful thing about learning is that no one can take it away from you.
                </motion.h2>
            </div>
        </section>
    );
};

export default AcademyQuote;
