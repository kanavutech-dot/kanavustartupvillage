import React from 'react';
import './HubCommunitySection.css';
import { motion } from 'framer-motion';
import communityBg from '../assets/hub-community.jpg';

const HubCommunitySection = () => {
    return (
        <section
            className="hub-community-section"
            style={{ backgroundImage: `url(${communityBg})` }}
        >
            <div className="hub-community-overlay"></div>

            <div className="hub-community-content">
                <motion.h2
                    className="hub-community-text"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <span style={{ display: 'block', marginBottom: '0.5rem' }}>A workspace should be more than desks-</span>
                    <span style={{ display: 'block' }}>it should be a community.</span>
                </motion.h2>
            </div>
        </section>
    );
};

export default HubCommunitySection;
