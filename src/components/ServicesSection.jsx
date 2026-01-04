import React from 'react';
import './ServicesSection.css';
import { motion } from 'framer-motion';
import iconDevelopment from '../assets/icon-development.png';
import iconDigital from '../assets/icon-digital.png';
import iconHub from '../assets/icon-hub.png';
import iconAcademy from '../assets/icon-academy.png';

const ServicesSection = () => {
    const steps = [
        {
            title: "Development",
            description: "Expert software development services that transform ideas into reliable, future-ready applications.",
            icon: iconDevelopment
        },
        {
            title: "Digital",
            description: "Data-driven digital marketing strategies designed to enhance visibility, engagement, and business growth.",
            icon: iconDigital
        },
        {
            title: "Hub",
            description: "A modern workplace designed to foster collaboration, productivity, and continuous growth.",
            icon: iconHub
        },
        {
            title: "Academy",
            description: "A professional academy building industry-ready skills through expert-led learning.",
            icon: iconAcademy
        }
    ];

    return (
        <section className="services-section">
            <div className="services-container">
                <div className="services-grid">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            className="service-card-new"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="service-icon-wrapper-new">
                                <img src={step.icon} alt={`${step.title} Icon`} className="service-icon-new" />
                            </div>
                            <div className="service-content-new">
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

export default ServicesSection;
