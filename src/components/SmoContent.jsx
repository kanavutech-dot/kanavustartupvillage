import React from 'react';
import './WebContent.css'; // Reusing existing styles
import { FaCircle } from 'react-icons/fa';

const SmoContent = () => {
    return (
        <section className="web-content-section">
            <div className="web-content-container">
                <div className="web-content-block">
                    <h2>Social Media Optimization (SMO)</h2>
                    <p>
                        Your social media profiles are often the <strong>first touchpoint</strong> people use to understand your brand. Our SMO services optimize your presence with <strong>clean layouts, strong messaging, and keyword-driven content structures</strong> that improve discoverability and consistency across platforms.
                    </p>
                    <p>
                        Our goal is simple — <strong>build trust, create clarity, and help your brand grow organically</strong> through a well-optimized and professional social presence.
                    </p>
                </div>

                <div className="web-content-block">
                    <h2>Core SMO Services We Provide</h2>
                    <ul className="web-benefit-list" style={{ listStyle: 'none', padding: 0 }}>
                        <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                            <FaCircle className="web-bullet" />
                            <span><strong>Profile & bio optimization</strong> for clarity, branding, and search visibility</span>
                        </li>
                        <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                            <FaCircle className="web-bullet" />
                            <span><strong>Highlights, layouts & visual branding</strong> for a clean and consistent look</span>
                        </li>
                        <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                            <FaCircle className="web-bullet" />
                            <span><strong>Keyword & hashtag planning</strong> to improve reach and discoverability</span>
                        </li>
                        <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                            <FaCircle className="web-bullet" />
                            <span><strong>Caption structure & posting guidelines</strong> for better engagement</span>
                        </li>
                        <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                            <FaCircle className="web-bullet" />
                            <span><strong>Platform-specific optimizations</strong> to maximize performance on each channel</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default SmoContent;
