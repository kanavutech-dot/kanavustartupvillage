import React from 'react';
import './WebContent.css'; // Reusing existing styles
import { FaCircle } from 'react-icons/fa';

const SeoContent = () => {
    return (
        <section className="web-content-section">
            <div className="web-content-container">
                <div className="web-content-block">
                    <h2>Search Engine Optimization (SEO)</h2>
                    <p>
                        Growing online starts with being <strong>discoverable</strong>. Our SEO services help your website rank higher on Google and attract <strong>consistent, high-quality traffic</strong>. We refine your content, strengthen your site structure, and improve overall performance so your business stays visible and competitive for the long run.
                    </p>
                    <p>
                        Every update we make is <strong>practical, purposeful, and focused on real growth</strong>—not just technical checklists.
                    </p>
                </div>

                <div className="web-content-block">
                    <h2>Core SEO Services We Provide</h2>
                    <ul className="web-benefit-list" style={{ listStyle: 'none', padding: 0 }}>
                        <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                            <FaCircle className="web-bullet" />
                            <span><strong>Keyword planning</strong> based on real search intent and user behavior</span>
                        </li>
                        <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                            <FaCircle className="web-bullet" />
                            <span><strong>Page-level optimization</strong> for improved clarity, relevance, and rankings</span>
                        </li>
                        <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                            <FaCircle className="web-bullet" />
                            <span><strong>Technical SEO improvements</strong> for faster, cleaner, and more reliable performance</span>
                        </li>
                        <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                            <FaCircle className="web-bullet" />
                            <span><strong>SEO-friendly content creation</strong> that informs, engages, and converts</span>
                        </li>
                        <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                            <FaCircle className="web-bullet" />
                            <span><strong>Authority building & continuous analytics monitoring</strong> to track progress and refine strategy</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default SeoContent;
