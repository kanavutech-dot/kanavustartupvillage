import React from 'react';
import './TechAttributes.css';
import { motion } from 'framer-motion';
import { FaMobileAlt, FaCloud, FaLaptopCode, FaGlobe } from 'react-icons/fa';

const TechAttributes = () => {
    const attributes = [
        {
            title: "Innovation",
            description: "Innovation is the process of creating new ideas, products, or methods, or significantly improving existing ones. It involves recognizing a need or opportunity and developing a novel solution that adds value. Innovation can range from incremental improvements to radical breakthroughs that disrupt existing markets and create entirely new ones. It's a driving force behind economic growth, societal progress, and technological advancement, requiring creativity, experimentation, and a willingness to challenge the status quo. Successful innovation often involves a combination of research, development, and a deep understanding of user needs.",
            icon: <FaMobileAlt />
        },
        {
            title: "Tools",
            description: "Tools are implements or instruments used to accomplish a task or achieve a specific purpose. They extend human capabilities by providing a means to manipulate the environment, shape materials, and perform actions more efficiently or effectively than possible with bare hands. Tools can be simple, like a hammer or a lever, or complex, like a computer or a surgical instrument. They are essential for everything from basic survival to advanced technological endeavors, and their development has been a key driver of human progress throughout history. The design and application of tools often reflect the level of technological advancement.",
            icon: <FaCloud />
        },
        {
            title: "Progress",
            description: "Progress signifies advancement or improvement towards a desired goal or state. It implies a positive change, often measured by advancements in technology, knowledge, standards of living, or social structures. Progress can be gradual and incremental or marked by significant breakthroughs and paradigm shifts. While the concept of progress is often associated with positive connotations, it's important to acknowledge that it can also be accompanied by challenges and unintended consequences. Measuring progress can be complex and often involves considering the variety of factors and perspectives, sustainability, inclusivity.",
            icon: <FaLaptopCode />
        },
        {
            title: "Application",
            description: "Application refers to the practical use or implementation of something, such as a theory, method, or technology. It involves putting knowledge or resources into action to achieve a specific purpose or solve a problem. Applications can range from everyday uses of familiar tools to complex implementations of scientific discoveries in fields like medicine, engineering, and computer science. The effectiveness of an application is often judged by its efficiency, its impact on the intended target, and its alignment with the desired outcome. The process of application often involves adaptation and refinement to suit specific contexts and circumstances.",
            icon: <FaGlobe />
        }
    ];

    return (
        <section className="tech-attributes-section">
            <div className="tech-attributes-container">
                <div className="tech-header">
                    <motion.span
                        className="tech-subtitle"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        Dream Start Grow
                    </motion.span>
                    <motion.h2
                        className="tech-title"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        Kanavu Technologies
                    </motion.h2>
                    <motion.p
                        className="tech-description"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        Technology is the application of scientific knowledge for practical purposes, often to improve efficiency, solve problems, and extend human capabilities.
                    </motion.p>
                </div>

                <div className="tech-grid">
                    {attributes.map((attr, index) => (
                        <motion.div
                            key={index}
                            className="tech-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="tech-icon-wrapper">
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

export default TechAttributes;
