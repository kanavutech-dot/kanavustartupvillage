import React from 'react';
import './CommunitySection.css';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaGlobeAmericas, FaChartPie, FaDatabase, FaCogs, FaBuilding } from 'react-icons/fa';

const CommunitySection = () => {
    const communities = [
        {
            title: "Entrepreneurs",
            icon: <FaLaptopCode />,
            description: "KSV stands out as a premier destination for entrepreneurs, housing some of the brightest minds in the startup industry, including serial entrepreneurs and accomplished businesspeople. Through its vibrant community and rich pool of resources, KSV provides an unparalleled platform for entrepreneurial success, fueling the growth and innovation of startups.."
        },
        {
            title: "CXO's",
            icon: <FaGlobeAmericas />, // Representing global/strategic view
            description: "KSV's ready-made CXO opportunities provide startups with a unique advantage, increasing their chances of success and operational efficiency. By tapping into the expertise, experience, and networks of our CXOs, startups can fast-track their growth plans and navigate the challenges of the startup journey with confidence and effectiveness.."
        },
        {
            title: "Investors",
            icon: <FaChartPie />, // Representing investment/portfolio
            description: "KSV goes beyond just funding and offers startups a comprehensive ecosystem of resources, including access to a diverse network of Investors and strategic partnerships with Hourglass Ventures USA. This ensures that startups at KSV have ample opportunities for funding, mentorship, and support on their entrepreneurial journey .By tapping into the expertise."
        },
        {
            title: "Resources",
            icon: <FaDatabase />,
            description: "Research is the foundation of innovation, discovery, and informed decision-making. It involves systematic investigation to gather facts, analyze data, and develop new insights. From scientific breakthroughs to business strategies, research drives progress in every field. It helps solve complex problems, improve existing solutions, and uncover new opportunities. A strong research process ensures accuracy, reliability, and continuous learning for future advancements."
        },
        {
            title: "Data Scientists",
            icon: <FaCogs />,
            description: "Data scientists analyze complex data to uncover patterns, trends, and insights that drive decision-making. They use machine learning, statistics, and algorithms to extract valuable information from large datasets. Their work helps businesses optimize processes, predict outcomes, and enhance customer experiences. Data scientists play a crucial role in AI development, automation, and big data analytics. With data-driven strategies, they empower industries to innovate and grow efficiently."
        },
        {
            title: "Office Area",
            icon: <FaBuilding />,
            description: "Kanavu Startup Village (KSV) offers a vibrant and collaborative office space designed for entrepreneurs and innovators. The workspace includes modern infrastructure, high-speed internet, and dedicated areas for brainstorming and teamwork. It provides a productive environment with meeting rooms, conference facilities, and co-working zones. Located in Erode, Tamil Nadu, KSV fosters creativity and networking among startups, investors, and mentors. These work is office area"
        }
    ];

    return (
        <section className="community-section">
            <div className="community-header">
                <motion.p
                    className="community-subtitle"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    Why choose us
                </motion.p>
                <motion.h2
                    className="community-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                >
                    Kanavu Community
                </motion.h2>
            </div>

            <div className="community-grid">
                {communities.map((item, index) => (
                    <motion.div
                        key={index}
                        className="community-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <div className="icon-box">
                            {item.icon}
                        </div>
                        <h3 className="card-title">{item.title}</h3>
                        <p className="card-description">{item.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default CommunitySection;
