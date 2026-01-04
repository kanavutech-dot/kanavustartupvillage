import React from 'react';
import './HubServices.css';
import { motion } from 'framer-motion';
import workspaceGif from '../assets/hub-workspace.gif';
import trainingGif from '../assets/hub-training.gif';
import projectGif from '../assets/hub-project.gif';

const services = [
    {
        icon: workspaceGif,
        title: "Our Work Space",
        description: "A collaborative, creative environment where ideas thrive and innovation comes to life."
    },
    {
        icon: trainingGif,
        title: "Our Training",
        description: "Industry-focused training programs to build practical skills, boost confidence, and accelerate career growth."
    },
    {
        icon: projectGif,
        title: "Project management",
        description: "Structured planning and execution to deliver projects on time, within scope, and aligned with business goals."
    }
];

const HubServices = () => {
    return (
        <section className="hub-services-section">
            <div className="hub-services-container">
                <motion.h2
                    className="hub-services-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    our services
                </motion.h2>

                <div className="hub-services-grid">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="hub-service-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <img src={service.icon} alt={service.title} className="hub-service-icon" />
                            <h3 className="hub-service-name">{service.title}</h3>
                            <p className="hub-service-description">{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HubServices;
