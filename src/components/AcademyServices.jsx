import React from 'react';
import './AcademyServices.css';
import { motion } from 'framer-motion';
import academyFlutter from '../assets/academy-flutter.gif';
import academyWordpress from '../assets/academy-wordpress.gif';
import academyReact from '../assets/academy-react.gif';
import academyJava from '../assets/academy-java.gif';
import academyPython from '../assets/academy-python.gif';
import academyDigitalMarketing from '../assets/academy-digital-marketing.gif';

const AcademyServices = () => {
    const services = [
        {
            title: "Flutter",
            description: "An open-source UI framework by Google for building fast, natively compiled apps for mobile, web, and desktop from a single codebase.",
            icon: academyFlutter
        },
        {
            title: "Wordpress",
            description: "A flexible and powerful content management system for building and managing dynamic, SEO-friendly websites with ease.",
            icon: academyWordpress
        },
        {
            title: "React",
            description: "A powerful JavaScript library for building fast, interactive, and scalable user interfaces for modern web applications.",
            icon: academyReact
        },
        {
            title: "Java",
            description: "A powerful, secure, and platform-independent programming language used to build scalable web, mobile, and enterprise applications.",
            icon: academyJava
        },
        {
            title: "Python",
            description: "A versatile, easy-to-learn programming language widely used for web development, data science, automation, and AI.",
            icon: academyPython
        },
        {
            title: "Digital Marketing",
            description: "Learn data-driven strategies to grow brands through SEO, social media, online advertising, and analytics insights.",
            icon: academyDigitalMarketing
        }
    ];

    return (
        <section className="academy-services-section">
            <div className="academy-services-container">
                <motion.h2
                    className="academy-services-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    our services
                </motion.h2>

                <div className="academy-services-grid">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="academy-service-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <img src={service.icon} alt={`${service.title} Icon`} className="academy-service-icon" />
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AcademyServices;
