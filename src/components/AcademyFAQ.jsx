import React, { useState } from 'react';
import './AcademyFAQ.css';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlus, FaMinus } from 'react-icons/fa';

const AcademyFAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: "What is the Academy at Kanavu Startup Village?",
            answer: "The Academy is a structured learning and skill development initiative designed to equip students, startups, and aspiring entrepreneurs with industry-relevant knowledge and practical exposure."
        },
        {
            question: "What is the objective of the Academy?",
            answer: "The Academy aims to build talent, enhance employability, and support entrepreneurship through focused training, learning programs, and mentorship."
        },
        {
            question: "Who can enroll in the Academy?",
            answer: "The Academy is open to students, early-stage founders, innovators, and individuals interested in acquiring skills aligned with startup and industry needs."
        },
        {
            question: "What type of programs does the Academy offer?",
            answer: "The Academy is open to students, early-stage founders, innovators, and individuals interested in acquiring skills aligned with startup and industry needs."
        },
        {
            question: "Are the programs theoretical or practical?",
            answer: "The Academy follows a hands-on, practical learning approach with real-world exposure, projects, and interactive sessions."
        }
    ];

    const toggleFaq = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="academy-faq-section">
            <div className="academy-faq-container">
                <div className="academy-faq-header">
                    <motion.h2
                        className="academy-faq-title"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        Frequently Asked Questions
                    </motion.h2>
                    <motion.p
                        className="academy-faq-subtitle"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        Get clearance with us and our community
                    </motion.p>
                </div>

                <div className="academy-faq-content-wrapper">
                    {faqs.map((faq, index) => (
                        <div key={index} className="academy-faq-item">
                            <button
                                className="academy-faq-question-btn"
                                onClick={() => toggleFaq(index)}
                                aria-expanded={activeIndex === index}
                            >
                                <span>{faq.question}</span>
                                <span className="academy-faq-toggle-icon">
                                    {activeIndex === index ? <FaMinus size={12} /> : <FaPlus size={12} />}
                                </span>
                            </button>
                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="academy-faq-answer"
                                    >
                                        <div className="academy-faq-answer-inner">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AcademyFAQ;
