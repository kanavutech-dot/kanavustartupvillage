import React from 'react';
import './WebContent.css'; // Reusing existing styles
import { FaCircle } from 'react-icons/fa';

const SmmContent = () => {
    return (
        <section className="web-content-section">
            <div className="web-content-container">
                <div className="web-content-block">
                    <h2>Social Media Marketing (SMM)</h2>
                    <p>
                        We help brands build a <strong>strong and consistent social presence</strong> through thoughtful creativity and smart strategy. From engaging reels and posts to targeted marketing campaigns, we manage everything needed to <strong>grow your audience, build meaningful engagement, and turn attention into real business impact</strong>.
                    </p>
                    <p>
                        Every design, caption, and campaign is crafted to reflect <strong>who your brand is — not just what you sell</strong>.
                    </p>
                </div>

                <div className="web-content-block">
                    <h2>Core SMM Services We Provide</h2>
                    <ul className="web-benefit-list" style={{ listStyle: 'none', padding: 0 }}>
                        <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                            <FaCircle className="web-bullet" />
                            <span><strong>Content planning & creative design</strong> aligned with your brand identity</span>
                        </li>
                        <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                            <FaCircle className="web-bullet" />
                            <span><strong>Reels, short videos & post production</strong> for high engagement</span>
                        </li>
                        <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                            <FaCircle className="web-bullet" />
                            <span><strong>Paid campaigns</strong> focused on reach, leads, and conversions</span>
                        </li>
                        <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                            <FaCircle className="web-bullet" />
                            <span><strong>Engagement management & audience analysis</strong> for better insights</span>
                        </li>
                        <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                            <FaCircle className="web-bullet" />
                            <span><strong>Platform-wise campaign management</strong> tailored to each social channel</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default SmmContent;
