import React from 'react';
import './WebContent.css'; // Reusing existing styles
import { FaCircle } from 'react-icons/fa';

const DesignContent = () => {
    return (
        <section className="web-content-section">
            <div className="web-content-container">
                <div className="web-content-block">
                    <h2>Design</h2>
                    <p>
                        Great design communicates before a single word is read. Our design services focus on creating <strong>visually compelling, purpose-driven creatives</strong> that capture attention, communicate clearly, and strengthen your brand identity across platforms.
                    </p>
                    <p>
                        From eye-catching posters to polished video edits, every design is crafted to reflect your brand's personality and connect meaningfully with your audience.
                    </p>
                </div>

                <div className="web-content-block">
                    <h2>Core Design Services We Provide</h2>
                    <ul className="web-benefit-list" style={{ listStyle: 'none', padding: 0 }}>
                        <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                            <FaCircle className="web-bullet" />
                            <span><strong>Poster creation & visual creatives</strong> for social media, ads, and campaigns</span>
                        </li>
                        <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                            <FaCircle className="web-bullet" />
                            <span><strong>Video editing & motion content</strong> including reels, short videos, and promos</span>
                        </li>
                        <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                            <FaCircle className="web-bullet" />
                            <span><strong>Brand-aligned design systems</strong> for consistent visuals</span>
                        </li>
                        <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                            <FaCircle className="web-bullet" />
                            <span><strong>Creative concepts & layouts</strong> that enhance clarity and impact</span>
                        </li>
                        <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                            <FaCircle className="web-bullet" />
                            <span><strong>Platform-ready designs</strong> optimized for web, social media, and ads</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default DesignContent;
