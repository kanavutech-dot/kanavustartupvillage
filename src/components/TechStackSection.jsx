import React from 'react';
import './TechStackSection.css';
import { motion } from 'framer-motion';

import flutterLogo from '../assets/logos/flutter.svg';
import javaLogo from '../assets/logos/java.svg';
import pythonLogo from '../assets/logos/python.svg';
import awsLogo from '../assets/logos/aws.svg';
import reactLogo from '../assets/logos/react.svg';
import wordpressLogo from '../assets/logos/wordpress.svg';

const TechStackSection = () => {
    const logos = [
        { name: 'Flutter', src: flutterLogo },
        { name: 'Java', src: javaLogo },
        { name: 'Python', src: pythonLogo },
        { name: 'AWS', src: awsLogo },
        { name: 'React', src: reactLogo },
        { name: 'WordPress', src: wordpressLogo },
    ];

    return (
        <section className="tech-stack-section">
            <div className="tech-stack-container">


                <div className="tech-logos-grid">
                    {logos.map((logo, index) => (
                        <motion.div
                            key={index}
                            className="tech-logo-item"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 0.7, y: 0 }} // Start semi-transparent/grayscale
                            whileHover={{ scale: 1.1, opacity: 1, filter: 'grayscale(0%)' }} // Framer motion hover
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <img src={logo.src} alt={`${logo.name} logo`} className="tech-logo-img" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStackSection;
