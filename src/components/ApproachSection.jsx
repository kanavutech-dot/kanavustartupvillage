import React from 'react';
import './ApproachSection.css';
import { motion } from 'framer-motion';
import { FaAngleDoubleRight } from 'react-icons/fa';

const ApproachSection = () => {
    const approaches = [
        {
            title: "Agile Approach",
            description: "Improve your digital responsiveness to customer and business demands. our deliver high quality software to leveraging agile methodologies to fast track business transformation"
        },
        {
            title: "Technological excellence",
            description: "Realign your business for growth and stay ahead of tech trends.leverage our advanced, always-evolving software engineering and it ecosystem to transform challenges"
        },
        {
            title: "Improved end user",
            description: "create meaningful experiences that are bulit to boost conversions .our clients-centricity makes us the best partner for your digital transformation journey of the user to improve"
        }
    ];

    return (
        <section className="approach-section">
            <div className="approach-container">
                <div className="approach-header">
                    <motion.h2
                        className="approach-title"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        Approach of kanavu<br />startup village
                    </motion.h2>
                    <motion.p
                        className="approach-description"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        Kanavu Startup Village likely follows a community-driven approach to fostering entrepreneurship, focusing on rural or grassroots innovation.
                    </motion.p>
                </div>

                <div className="approach-grid">
                    {approaches.map((item, index) => (
                        <motion.div
                            key={index}
                            className="approach-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                            <button className="approach-btn">
                                start now <FaAngleDoubleRight />
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ApproachSection;
