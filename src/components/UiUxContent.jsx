import React from 'react';
import './WebContent.css'; // Reusing existing styles
import { FaCheckCircle, FaCircle } from 'react-icons/fa';

const UiUxContent = () => {
    return (
        <section className="web-content-section">
            <div className="web-content-container">
                <div className="web-content-block">
                    <h2>Create Intuitive, Engaging & User-Centered Digital Experiences</h2>
                    <p>
                        Great design is more than appearance—it’s about usability, accessibility, and user satisfaction. Our <strong>UI/UX design services</strong> focus on creating visually appealing, user-friendly, and conversion-driven digital products that deliver seamless user experiences across web and mobile platforms.
                    </p>
                </div>

                <div className="web-content-block">
                    <h2>Our UI/UX Design Services</h2>
                    <ul className="web-feature-list">
                        <li>
                            <FaCheckCircle className="web-icon-red" />
                            <span><strong>User Interface (UI) Design</strong></span>
                        </li>
                        <li>
                            <FaCheckCircle className="web-icon-red" />
                            <span><strong>User Experience (UX) Design</strong></span>
                        </li>
                        <li>
                            <FaCheckCircle className="web-icon-red" />
                            <span><strong>Wireframing & Prototyping</strong></span>
                        </li>
                    </ul>
                </div>

                <div className="web-content-block">
                    <h2>Why Choose Our UI/UX Design Services?</h2>
                    <ul className="web-benefit-list" style={{ listStyle: 'none', padding: 0 }}>
                        <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                            <FaCircle className="web-bullet" />
                            <span>User-centered design approach</span>
                        </li>
                        <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                            <FaCircle className="web-bullet" />
                            <span>Modern & accessible designs</span>
                        </li>
                        <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                            <FaCircle className="web-bullet" />
                            <span>Mobile-first and responsive layouts</span>
                        </li>
                        <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                            <FaCircle className="web-bullet" />
                            <span>Consistent branding & design systems</span>
                        </li>
                        <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                            <FaCircle className="web-bullet" />
                            <span>Improved user engagement & conversions</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default UiUxContent;
