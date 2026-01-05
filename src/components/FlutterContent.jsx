import React from 'react';
import './WebContent.css';
import { FaCheckCircle } from 'react-icons/fa';

const FlutterContent = () => {
    return (
        <section className="web-content-section">
            <div className="web-content-container">
                <div className="web-content-block">
                    <h2>Build Fast, Beautiful & Scalable Applications with Flutter</h2>
                    <p>
                        Flutter is Google's powerful UI toolkit that allows developers to build <strong>high-performance applications for Web, Android, iOS, and Desktop</strong> using a single codebase. Our Flutter development services help businesses launch visually stunning, scalable, and cost-effective applications faster.
                    </p>
                </div>

                <div className="web-content-block">
                    <h2>Why Choose Flutter for Web Development?</h2>
                    <ul className="web-feature-list">
                        <li>
                            <FaCheckCircle className="web-icon-red" />
                            <span><strong>Single Codebase</strong> – One app for web, mobile, and desktop</span>
                        </li>
                        <li>
                            <FaCheckCircle className="web-icon-red" />
                            <span><strong>High Performance</strong> – Compiled to native code for smooth UI</span>
                        </li>
                        <li>
                            <FaCheckCircle className="web-icon-red" />
                            <span><strong>Modern UI/UX</strong> – Pixel-perfect, customizable widgets</span>
                        </li>
                    </ul>
                </div>

                <div className="web-content-block">
                    <h2>Our Flutter Development Process</h2>
                    <ul className="web-benefit-list" style={{ listStyle: 'none', padding: 0 }}>
                        <li style={{ marginBottom: '1rem' }}>
                            <strong style={{ color: '#D92323', marginRight: '0.5rem' }}>1. Requirement Analysis</strong> – Understanding your business goals
                        </li>
                        <li style={{ marginBottom: '1rem' }}>
                            <strong style={{ color: '#D92323', marginRight: '0.5rem' }}>2. UI/UX Design</strong> – Clean, modern, and user-centric designs
                        </li>
                        <li style={{ marginBottom: '1rem' }}>
                            <strong style={{ color: '#D92323', marginRight: '0.5rem' }}>3. Development</strong> – Agile Flutter development with best practices
                        </li>
                        <li style={{ marginBottom: '1rem' }}>
                            <strong style={{ color: '#D92323', marginRight: '0.5rem' }}>4. Testing & QA</strong> – Performance, security, and usability testing
                        </li>
                        <li style={{ marginBottom: '1rem' }}>
                            <strong style={{ color: '#D92323', marginRight: '0.5rem' }}>5. Deployment</strong> – Smooth launch and post-deployment support
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default FlutterContent;
