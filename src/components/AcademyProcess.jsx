import React from 'react';
import './ExecutionProcess.css';
import { motion } from 'framer-motion';
import iconAssessment from '../assets/icon-assessment.png';
import iconPlanning from '../assets/icon-planning.png';
import iconExecution from '../assets/icon-execution.png';
import iconEvaluation from '../assets/icon-evaluation.png';

const AcademyProcess = () => {
    const steps = [
        {
            title: "Assessment",
            description: "Identify learner goals, skill levels, and industry requirements.",
            icon: iconAssessment
        },
        {
            title: "Planning",
            description: "Design structured, industry-aligned curriculum and training roadmap.",
            icon: iconPlanning
        },
        {
            title: "Execution",
            description: "Deliver hands-on training through expert-led sessions and real projects.",
            icon: iconExecution
        },
        {
            title: "Evaluation",
            description: "Measure performance, give feedback, and support career readiness.",
            icon: iconEvaluation
        }
    ];

    return (
        <section className="execution-section">
            <div className="execution-container">
                <motion.h2
                    className="execution-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    Our Execution Process
                </motion.h2>

                <div className="execution-grid">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            className={`execution-card ${step.highlight ? 'highlight' : ''}`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="execution-icon-wrapper">
                                <img src={step.icon} alt={`${step.title} Icon`} className="execution-icon" />
                            </div>
                            <div className="execution-content">
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

export default AcademyProcess;
