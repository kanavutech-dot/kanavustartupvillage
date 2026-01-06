import React from 'react';
import './DigitalAttributes.css';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaChartLine, FaDesktop, FaChartBar } from 'react-icons/fa';

const DigitalAttributes = () => {
    const attributes = [
        {
            title: "Strategy",
            description: "Strategy in digital marketing is the process of planning and aligning online efforts to achieve specific business goals. It involves identifying target audiences, selecting the right digital channels, defining messaging, and setting measurable objectives. A strong strategy ensures that marketing actions are data-driven, consistent, and focused on delivering maximum ROI.",
            icon: <FaPaperPlane />
        },
        {
            title: "Innovation",
            description: "Innovation in digital marketing is about adopting new ideas, technologies, and creative approaches to engage audiences more effectively. This includes leveraging AI, automation, interactive content, and emerging platforms to stay ahead of competitors. Continuous experimentation and understanding user behavior drive impactful and memorable campaigns.",
            icon: <FaChartLine />
        },
        {
            title: "Tools & Platforms",
            description: "Digital marketing tools and platforms enable marketers to execute, manage, and measure campaigns efficiently. From SEO tools and analytics dashboards to CRM systems and ad platforms, these tools help optimize performance, track user behavior, and improve decision-making across all marketing channels in real time globally, efficiently, and cost-effectively.",
            icon: <FaDesktop />
        },
        {
            title: "Growth",
            description: "Growth in digital marketing represents the continuous improvement of brand visibility, audience engagement, and conversions. It is achieved through consistent optimization, data analysis, and scaling successful campaigns effectively and efficiently. Sustainable growth focuses on long-term customer relationships, loyalty, trust, and not just short-term results.",
            icon: <FaChartBar />
        }
    ];

    return (
        <section className="digital-attributes-section">
            <div className="digital-attributes-container">
                <div className="digital-attr-header">
                    <motion.span
                        className="digital-attr-subtitle"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        Dream, Start, Grow
                    </motion.span>
                    <motion.h2
                        className="digital-attr-title"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        Kanavu Startup Village
                    </motion.h2>
                    <motion.p
                        className="digital-attr-description"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        Digital marketing is the strategic use of digital technologies and data-driven insights to promote brands, engage audiences, and drive measurable business growth.
                    </motion.p>
                </div>

                <div className="digital-attr-grid">
                    {attributes.map((attr, index) => (
                        <motion.div
                            key={index}
                            className="digital-attr-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="digital-attr-icon-wrapper">
                                {attr.icon}
                            </div>
                            <h3>{attr.title}</h3>
                            <p>{attr.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DigitalAttributes;
