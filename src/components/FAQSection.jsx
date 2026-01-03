import React, { useState } from 'react';
import './FaqSection.css';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlus, FaMinus } from 'react-icons/fa';

const FaqSection = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: "What programming languages are best suited for web development today?",
            answer: "The best programming languages for web development today include JavaScript and TypeScript for frontend development, with JavaScript also widely used on the backend through Node.js, enabling full-stack development."
        },
        {
            question: "What is the role of APIs in modern web development?",
            answer: "APIs (Application Programming Interfaces) play a crucial role in modern web development by enabling seamless communication between different software systems."
        },
        {
            question: "How do you manage state in complex web applications?",
            answer: "Managing state in complex web applications involves organizing and controlling the data that flows through the app to ensure consistency, performance, and maintainability."
        },
        {
            question: "How does modular coding help in scalable application development?",
            answer: "Modular coding helps in scalable application development by breaking down complex applications into smaller, manageable, and reusable components or modules."
        },
        {
            question: "How do you handle debugging and error logging during development?",
            answer: "Developers often use console.log() (in JavaScript) or equivalent in other languages to print out values and trace execution flow. However, these are often removed or replaced by more sophisticated logging before production deployment."
        }
    ];

    const toggleFaq = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="faq-section">
            <div className="faq-container">
                <div className="faq-header">
                    <motion.h2
                        className="faq-title"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        Frequently Asked Questions
                    </motion.h2>
                    <motion.p
                        className="faq-subtitle"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        Get clearance with us and our community
                    </motion.p>
                </div>

                <div className="faq-content-wrapper">
                    {faqs.map((faq, index) => (
                        <div key={index} className="faq-item">
                            <button
                                className="faq-question-btn"
                                onClick={() => toggleFaq(index)}
                                aria-expanded={activeIndex === index}
                            >
                                {faq.question}
                                <span className="faq-toggle-icon">
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
                                        className="faq-answer"
                                    >
                                        <div className="faq-answer-inner">
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

export default FaqSection;
