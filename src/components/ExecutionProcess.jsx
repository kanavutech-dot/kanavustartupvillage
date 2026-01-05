import React from 'react';
import './ExecutionProcess.css';
import { motion } from 'framer-motion';
import iconDefine from '../assets/icon-define.png';
import iconDesign from '../assets/icon-design.png';
import iconDevelop from '../assets/icon-develop.png';
import iconDeploy from '../assets/icon-deploy.png';

const ExecutionProcess = () => {
    const steps = [
        {
            title: "Define",
            description: "The Define phase is where the foundation of the project is laid. In this stage, the focus is on understanding the goals, identifying user needs, and gathering all requirements from stakeholders.",
            icon: iconDefine
        },
        {
            title: "Design",
            description: "In the Design phase, the ideas and requirements collected earlier are transformed into visual and structural plans. This includes creating wireframes, prototypes, and user interfaces.",
            icon: iconDesign
        },
        {
            title: "Develop",
            description: "The Develop phase is where the actual building happens. Developers write the code to bring the designs to life, implementing both frontend and backend functionality. This stage also includes database integration.",
            icon: iconDevelop
        },
        {
            title: "Deploy",
            description: "The Deploy phase is when the project is made live and accessible to users. This includes moving the code to a production server, setting up domains and hosting, and ensuring the environment is secure and stable.",
            icon: iconDeploy
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

export default ExecutionProcess;
