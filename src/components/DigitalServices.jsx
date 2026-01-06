import React from 'react';
import './DigitalServices.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import studioIcon from '../assets/service-studio.gif';
import seoIcon from '../assets/service-seo-1.gif';
import semIcon from '../assets/service-sem-1.gif';
import smoIcon from '../assets/service-smo.gif';
import smmIcon from '../assets/service-smm.gif';
import designIcon from '../assets/service-design.gif';

const DigitalServices = () => {
    const services = [
        {
            title: "Studio",
            description: "A creative studio crafting impactful visuals, designs, and digital experiences that bring brands to life.",
            icon: studioIcon,
            link: "/studio",
            isInternal: true
        },
        {
            title: "SEO",
            description: "Optimizing your website to improve search rankings, increase visibility, and drive organic traffic.",
            icon: seoIcon,
            link: "/seo",
            isInternal: true
        },
        {
            title: "SEM",
            description: "Driving instant traffic and qualified leads through targeted, data-driven paid search campaigns.",
            icon: semIcon,
            link: "/sem",
            isInternal: true
        },
        {
            title: "SMO",
            description: "Improving brand reach and engagement through social media optimization and content interactions.",
            icon: smoIcon,
            link: "/smo",
            isInternal: true
        },
        {
            title: "SMM",
            description: "Promoting brands through targeted social media campaigns to boost engagement, reach, and conversions.",
            icon: smmIcon,
            link: "/smm",
            isInternal: true
        },
        {
            title: "Design",
            description: "Creative and user-focused designs that blend aesthetics with functionality to deliver impactful digital experiences.",
            icon: designIcon,
            link: "/design",
            isInternal: true
        }
    ];

    return (
        <section className="digital-services-section">
            <motion.h2
                className="digital-services-title"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                our services
            </motion.h2>

            <div className="digital-services-grid">
                {services.map((service, index) => (
                    <motion.div
                        className="service-card"
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className="service-icon-wrapper">
                            <img src={service.icon} alt={service.title} className="service-icon" />
                        </div>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                        {service.isInternal ? (
                            <Link to={service.link} className="service-link">View Details &gt;</Link>
                        ) : (
                            <a href={service.link} className="service-link">View Details &gt;</a>
                        )}
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default DigitalServices;
