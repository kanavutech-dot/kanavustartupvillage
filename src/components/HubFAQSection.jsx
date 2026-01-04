import React, { useState } from 'react';
import './HubFAQSection.css';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlus, FaMinus } from 'react-icons/fa';

const HubFAQSection = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: "What is a Hub at Kanavu Startup Village?",
            answer: "A Hub is a dedicated space within Kanavu Startup Village designed to support startups, innovators, and entrepreneurs through learning, collaboration, and ecosystem-driven activities."
        },
        {
            question: "What is the objective of the Hub?",
            answer: "The Hub aims to nurture innovation, encourage skill development, and create opportunities for startups to grow through shared resources, mentoring, and community engagement."
        },
        {
            question: "Who can be part of the Hub?",
            answer: "The Hub is open to startups, student entrepreneurs, innovators, and early-stage founders associated with Kanavu Startup Village."
        },
        {
            question: "What kind of activities take place in the Hub?",
            answer: "The Hub hosts workshops, mentoring sessions, peer-learning activities, discussions, and ecosystem programs that support startup development."
        },
        {
            question: "Is the Hub focused on a specific industry or sector?",
            answer: "The Hub is designed to be flexible and can support startups across multiple sectors depending on the focus and programs conducted."
        }
    ];

    const toggleFaq = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="hub-faq-section">
            <div className="hub-faq-container">
                <div className="hub-faq-header">
                    <motion.h2
                        className="hub-faq-title"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        Frequently Asked Questions
                    </motion.h2>
                    <motion.p
                        className="hub-faq-subtitle"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        Get clearance with us and our community
                    </motion.p>
                </div>

                <div className="hub-faq-content-wrapper">
                    {faqs.map((faq, index) => (
                        <div key={index} className="hub-faq-item">
                            <button
                                className="hub-faq-question-btn"
                                onClick={() => toggleFaq(index)}
                                aria-expanded={activeIndex === index}
                            >
                                <span>{faq.question}</span>
                                <span className="hub-faq-toggle-icon">
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
                                        className="hub-faq-answer"
                                    >
                                        <div className="hub-faq-answer-inner">
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

export default HubFAQSection;
