import React from 'react';
import './WebContent.css'; // Reusing existing styles
import { FaCircle } from 'react-icons/fa';

const StudioContent = () => {
    return (
        <section className="web-content-section">
            <div className="web-content-container">
                <div className="web-content-block">
                    <h2>Creative Studio at Kanavu Startup Village</h2>
                    <p>
                        At <strong>Kanavu Startup Village</strong>, our creative studio brings your brand to life through <strong>photography, videography, reels, and professional product shoots</strong>. We focus on <strong>cinematic lighting, clean visuals, and meaningful storytelling</strong>, ensuring every piece of content feels authentic, purposeful, and aligned with your brand voice.
                    </p>
                    <p>
                        Whether you need content for your <strong>website, social media, or a full-scale campaign</strong>, we create visuals that connect with people and strengthen your brand identity.
                    </p>
                </div>

                <div className="web-content-block">
                    <h2>Studio Services We Provide</h2>
                    <ul className="web-benefit-list" style={{ listStyle: 'none', padding: 0 }}>
                        <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                            <FaCircle className="web-bullet" />
                            <span><strong>Stunning product photography, reels, videos, and brand films</strong></span>
                        </li>
                        <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                            <FaCircle className="web-bullet" />
                            <span><strong>High-performing visuals</strong> optimized for social media, websites, and digital ads</span>
                        </li>
                        <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                            <FaCircle className="web-bullet" />
                            <span><strong>Story-driven content</strong> with professional lighting and clean, modern aesthetics</span>
                        </li>
                        <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                            <FaCircle className="web-bullet" />
                            <span><strong>On-location shoots</strong> that capture your brand in real, authentic environments</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default StudioContent;
