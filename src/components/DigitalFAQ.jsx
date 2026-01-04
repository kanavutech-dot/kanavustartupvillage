import React, { useState } from 'react';
import './DigitalFAQ.css';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlus, FaMinus } from 'react-icons/fa';

const DigitalFAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqData = [
        {
            question: "What digital marketing services does Kanavu Startup Village offer?",
            answer: "Kanavu Startup Village offers end-to-end digital marketing support including social media marketing, search engine optimization (SEO), content creation, paid advertising (Google & social media ads), branding, and campaign strategy tailored for startups and small businesses."
        },
        {
            question: "Who can benefit from these digital marketing services?",
            answer: "Our services are ideal for early-stage startups, entrepreneurs, MSMEs, student founders, and innovation-driven businesses looking to build their online presence and grow sustainably."
        },
        {
            question: "How is Kanavu Startup Village’s digital marketing approach different?",
            answer: "We focus on startup-centric, cost-effective, and growth-oriented strategies. Our approach combines market research, data-driven insights, and creative execution while mentoring founders on how to scale their digital reach efficiently."
        },
        {
            question: "Do you provide customized digital marketing plans?",
            answer: "Yes. Every startup is unique, so we design customized marketing strategies based on your business goals, target audience, industry, and budget."
        },
        {
            question: "Can startups with limited budgets access these services?",
            answer: "Absolutely. We specialize in optimizing digital marketing for startups with limited resources by prioritizing high-impact channels and measurable outcomes."
        }
    ];

    return (
        <section className="digital-faq-section">
            <div className="digital-faq-container">
                <div className="digital-faq-header">
                    <h2 className="digital-faq-title">Frequently Asked Questions</h2>
                    <p className="digital-faq-subtitle">Get clearance with us and our community</p>
                </div>

                <div className="digital-faq-content-wrapper">
                    {faqData.map((item, index) => (
                        <div className="digital-faq-item" key={index}>
                            <button
                                className="digital-faq-question"
                                onClick={() => toggleAccordion(index)}
                            >
                                <span>{item.question}</span>
                                <div className="digital-faq-icon">
                                    {activeIndex === index ? <FaMinus /> : <FaPlus />}
                                </div>
                            </button>
                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        className="digital-faq-answer"
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <p>{item.answer}</p>
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

export default DigitalFAQ;
