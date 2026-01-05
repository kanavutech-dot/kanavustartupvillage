import React from 'react';
import './WebContent.css'; // Reusing existing styles
import { FaCircle } from 'react-icons/fa';

const SemContent = () => {
    return (
        <section className="web-content-section">
            <div className="web-content-container">
                <div className="web-content-block">
                    <h2>Search Engine Marketing (SEM)</h2>
                    <p>
                        We help your brand reach the <strong>right customers faster</strong> through targeted and performance-driven SEM campaigns. Our approach is simple and effective—<strong>smart keyword selection, compelling ad creatives, and well-optimized landing pages</strong> designed to convert.
                    </p>
                    <p>
                        With continuous monitoring, data-driven optimization, and transparent reporting, we ensure that <strong>every rupee you spend delivers real value and measurable results</strong>.
                    </p>
                </div>

                <div className="web-content-block">
                    <h2>Core SEM Services We Provide</h2>
                    <ul className="web-benefit-list" style={{ listStyle: 'none', padding: 0 }}>
                        <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                            <FaCircle className="web-bullet" />
                            <span><strong>Google Ads management</strong> for search and display campaigns</span>
                        </li>
                        <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                            <FaCircle className="web-bullet" />
                            <span><strong>Lead generation campaigns</strong> focused on quality and intent</span>
                        </li>
                        <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                            <FaCircle className="web-bullet" />
                            <span><strong>Conversion tracking</strong> for accurate performance measurement</span>
                        </li>
                        <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                            <FaCircle className="web-bullet" />
                            <span><strong>Real-time performance reporting</strong> with clear insights</span>
                        </li>
                        <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                            <FaCircle className="web-bullet" />
                            <span><strong>Audience targeting & budget optimization</strong> to maximize ROI</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default SemContent;
