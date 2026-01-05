import React from 'react';
import './DevelopmentServices.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import serviceWeb from '../assets/service-web.gif';
import serviceAi from '../assets/service-ai.gif';
import serviceMobile from '../assets/service-mobile.gif';

import serviceSoftware from '../assets/service-software.gif';
import serviceCloud from '../assets/service-cloud.gif';
import serviceUiUx from '../assets/service-uiux.gif';

const DevelopmentServices = () => {
    const services = [
        {
            title: "Web",
            description: "Fast, secure, SEO-first websites and WooCommerce stores, optimized for conversions.",
            icon: serviceWeb
        },
        {
            title: "AI",
            description: "Smart, scalable AI solutions that automate tasks, enhance insights, and drive faster business decisions.",
            icon: serviceAi
        },
        {
            title: "Mobile App",
            description: "High-performance, cross-platform mobile apps built with Flutter for seamless Android and iOS experiences.",
            icon: serviceMobile
        },
        {
            title: "Software",
            description: "Custom, secure, and scalable software solutions tailored to streamline operations and grow your business.",
            icon: serviceSoftware
        },
        {
            title: "Cloud",
            description: "Secure, scalable, cost-efficient cloud solutions on AWS to deploy, manage, and optimize your applications.",
            icon: serviceCloud
        },
        {
            title: "UI/UX",
            description: "Intuitive, user-centric designs that deliver seamless experiences and visually engaging interfaces.",
            icon: serviceUiUx
        }
    ];



    return (
        <section className="dev-services-section">
            <div className="dev-services-container">
                <motion.h2
                    className="dev-services-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    our services
                </motion.h2>

                <div className="dev-services-grid">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="dev-service-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <img src={service.icon} alt={`${service.title} Icon`} className="dev-service-icon" />
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                            {service.title === "Web" ? (
                                <Link to="/web" className="dev-service-link">View Details &gt;</Link>
                            ) : service.title === "AI" ? (
                                <Link to="/ai" className="dev-service-link">View Details &gt;</Link>
                            ) : service.title === "Mobile App" ? (
                                <Link to="/flutter" className="dev-service-link">View Details &gt;</Link>
                            ) : (
                                <a href="#" className="dev-service-link">View Details &gt;</a>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DevelopmentServices;
