import React from 'react';
import './ServicesSection.css';
import { motion } from 'framer-motion';

import iconDev from '../assets/icon-development.png';
import iconDigital from '../assets/icon-digital.png';
import iconHub from '../assets/icon-hub.png';
import iconAcademy from '../assets/icon-academy.png';

const ServicesSection = () => {
    const services = [
        {
            title: "Development",
            description: "Expert software development services that transform ideas into reliable, future-ready applications.",
            icon: iconDev,
            highlight: true // The design shows development with a red border
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
            <div className="services-grid">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        className="service-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <div className="service-icon-wrapper">
                            <img src={service.icon} alt={service.title} className="service-icon" />
                        </div>
                        <div className="service-content">
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-description">{service.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default ServicesSection;
