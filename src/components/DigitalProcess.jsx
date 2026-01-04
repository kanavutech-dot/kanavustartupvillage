import React from 'react';
import './DigitalProcess.css';
import extractionIcon from '../assets/process-extraction.png';
import ideationIcon from '../assets/process-ideation.png';
import creationIcon from '../assets/process-creation.png';
import conversionIcon from '../assets/process-conversion.png';
import distributionIcon from '../assets/process-distribution.png';
import optimizationIcon from '../assets/process-optimization.png';
import observationIcon from '../assets/process-observation.png';
import { motion } from 'framer-motion';

const DigitalProcess = () => {
    const steps = [
        {
            title: "Extraction",
            description: "Analyzing customer data to uncover trends and opportunities.",
            icon: extractionIcon,
            delay: 0.2
        },
        {
            title: "Ideation",
            description: "Generating creative, data-driven ideas to shape effective strategies and innovative solutions.",
            icon: ideationIcon,
            delay: 0.4
        },
        {
            title: "Creation",
            description: "Designing and producing engaging content and assets that bring ideas to life across platforms.",
            icon: creationIcon,
            delay: 0.6
        },
        {
            title: "Conversion",
            description: "Turning engagement into leads and sales through optimized, performance-driven funnels.",
            icon: conversionIcon,
            delay: 0.8
        },
        {
            title: "Distribution",
            description: "Delivering content across the right channels to maximize reach, visibility, and engagement.",
            icon: distributionIcon,
            delay: 1.0
        },
        {
            title: "Optimization",
            description: "Continuously refining strategies using analytics to maximize overall performance and results.",
            icon: optimizationIcon,
            delay: 1.2
        },
        {
            title: "Observation",
            description: "Monitoring user behavior and campaign performance to gain actionable insights.",
            icon: observationIcon,
            delay: 1.4
        }
    ];

    return (
        <section className="digital-process-section">
            <div className="digital-process-container">
                <motion.h2
                    className="digital-process-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Our Execution Process
                </motion.h2>

                <div className="digital-process-grid">
                    {steps.map((step, index) => (
                        <motion.div
                            className="process-card"
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: step.delay }}
                        >
                            <div className="process-icon-wrapper">
                                <img src={step.icon} alt={step.title} className="process-icon" />
                            </div>
                            <div className="process-content">
                                <h3>{step.title}</h3>
                                <p>{step.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DigitalProcess;
