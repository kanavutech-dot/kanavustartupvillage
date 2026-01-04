import React, { useState } from 'react';
import './ProcessSection.css';
import { motion, AnimatePresence } from 'framer-motion';
import devImage from '../assets/process-development.jpg';
import marketingImage from '../assets/process-marketing.jpg';
import hubImage from '../assets/process-hub.jpg';
import academyImage from '../assets/process-academy.jpg';
import servicesImage from '../assets/process-services.jpg';
import supportImage from '../assets/process-support.jpg';

const ProcessSection = () => {
    const [activeTab, setActiveTab] = useState('development');

    const tabs = [
        { id: 'development', label: 'Development' },
        { id: 'marketing', label: 'Marketing' },
        { id: 'hub', label: 'Hub' },
        { id: 'academy', label: 'Academy' },
        { id: 'services', label: 'Services' },
        { id: 'support', label: 'Support' },
    ];

    const content = {
        development: (
            <div className="text-content">
                <div className="content-block">
                    <h3 className="block-title">Frontend Development (User-Facing)</h3>
                    <p className="block-description">Frontend development focuses on the visual and interactive aspects of a website or application that users directly engage with.</p>
                    <span className="tech-list-title">Key Technologies:</span>
                    <ul className="tech-list">
                        <li>🖥 HTML – Structure of web pages</li>
                        <li>🎨 CSS – Styling and layout (e.g., Tailwind, Bootstrap)</li>
                        <li>⚡ JavaScript – Interactive features (e.g., React, Vue.js, Angular)</li>
                    </ul>
                </div>

                <div className="content-block">
                    <h3 className="block-title">Backend Development (Server-Side)</h3>
                    <p className="block-description">Backend development handles server-side logic, database management, and APIs, ensuring data is processed and delivered to the frontend.</p>
                    <span className="tech-list-title">Key Technologies:</span>
                    <ul className="tech-list">
                        <li>🔹 Programming Languages – Python, PHP, Node.js, Java, Ruby</li>
                        <li>🔹 Databases – MySQL, PostgreSQL, MongoDB</li>
                        <li>🔹 APIs – RESTful APIs, GraphQL for data exchange</li>
                        <li>🔹 Authentication – OAuth, JWT, Firebase Authentication</li>
                    </ul>
                </div>

                <div className="content-block">
                    <h3 className="block-title">Full-Stack Development</h3>
                    <p className="block-description">A full-stack developer works on both frontend and backend, managing the entire development lifecycle.</p>
                    <span className="frameworks-title">Popular Full-Stack Frameworks:</span>
                    <ul className="tech-list">
                        <li>🔹 MERN Stack – MongoDB, Express.js, React, Node.js</li>
                        <li>🔹 MEAN Stack – MongoDB, Express.js, Angular, Node.js</li>
                        <li>🔹 LAMP Stack – Linux, Apache, MySQL, PHP</li>
                    </ul>
                </div>
            </div>
        ),
        marketing: (
            <div className="text-content">
                <div className="content-block">
                    <p className="block-description">
                        In today’s world, digital skills are essential for personal growth, education, and professional success. The Digital space at Kanavu focuses on empowering individuals with the tools and knowledge to navigate the digital world confidently. Whether it’s creating websites, using digital tools for communication, or understanding how to stay safe online, we aim to provide accessible resources for learners of all levels.
                    </p>
                    <p className="block-description">
                        Through hands-on projects and easy-to-follow tutorials, we make technology more approachable and practical for everyone.
                    </p>
                </div>
            </div>
        ),
        hub: (
            <div className="text-content">
                <div className="content-block">
                    <p className="block-description">
                        The Kanavu Tech Hub is a space for collaboration, learning, and innovation. It brings together community members, learners, and tech enthusiasts to share knowledge, showcase projects, and stay updated on the latest developments. Whether you’re exploring new tools, restoring old systems, or building something from scratch, the Hub is where ideas come to life.
                    </p>
                </div>
            </div>
        ),
        academy: (
            <div className="text-content">
                <div className="content-block">
                    <p className="block-description">
                        The Kanavu Tech Academy is a learning space focused on building digital skills for students, youth, and community members. Here, we explore how to use technology for education, communication, and creative expression.
                    </p>
                    <p className="block-description">
                        From learning how to build websites to understanding basic online tools, the Academy helps learners grow step by step. Our goal is to make technology simple, useful, and accessible to everyone—especially in rural and underrepresented communities.
                    </p>
                </div>
            </div>
        ),
        services: (
            <div className="text-content">
                <div className="content-block">
                    <p className="block-description">
                        Software testing ensures that a product is functional, reliable, secure, and user-friendly before it goes live. It involves various techniques and tools to identify bugs, performance issues, and security vulnerabilities.
                    </p>
                </div>

                <div className="content-block">
                    <h3 className="block-title">Types of Software Testing</h3>

                    <h4 className="tech-list-title" style={{ marginTop: '1rem' }}>Manual Testing (Human-Driven)</h4>
                    <ul className="tech-list">
                        <li>✔ Performed by testers without automation tools.</li>
                        <li>✔ Best for exploratory, usability, and ad-hoc testing.</li>
                    </ul>

                    <h4 className="tech-list-title" style={{ marginTop: '1rem' }}>Automated Testing (Tool-Driven)</h4>
                    <ul className="tech-list">
                        <li>✔ Uses scripts and testing tools to automate repetitive tasks.</li>
                        <li>✔ Best for regression, load, and performance testing.</li>
                    </ul>
                </div>
            </div>
        ),
        support: (
            <div className="text-content">
                <div className="content-block">
                    <p className="block-description">
                        Once a website, app, or software is launched, support and maintenance ensure that it continues to function optimally, stays secure, and meets user needs. This phase is crucial for fixing bugs, improving performance, and adding new features over time.
                    </p>
                </div>

                <div className="content-block">
                    <h3 className="block-title">Types of Support & Maintenance</h3>

                    <h4 className="tech-list-title" style={{ marginTop: '1rem' }}>Corrective Maintenance (Bug Fixing)</h4>
                    <ul className="tech-list">
                        <li>✔ Identifies and fixes errors, crashes, and performance issues.</li>
                        <li>✔ Addresses user-reported issues and system failures.</li>
                    </ul>

                    <h4 className="tech-list-title" style={{ marginTop: '1rem' }}>Adaptive Maintenance (System Updates & Compatibility)</h4>
                    <ul className="tech-list">
                        <li>✔ Modifies the software to work with new OS versions, browsers, or third-party integrations.</li>
                        <li>✔ Ensures compatibility with evolving technology stacks.</li>
                    </ul>
                </div>
            </div>
        ),
    };

    const images = {
        development: devImage,
        marketing: marketingImage,
        hub: hubImage,
        academy: academyImage,
        services: servicesImage,
        support: supportImage,
    };

    return (
        <section className="process-section">

            <motion.div
                className="process-container"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
            >
                <div className="process-tabs">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                            onClick={() => setActiveTab(tab.id)}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                <div className="process-content">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <img src={images[activeTab]} alt={tabs.find(t => t.id === activeTab).label} className="content-image" />
                            {content[activeTab]}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </motion.div>
        </section>
    );
};

export default ProcessSection;
