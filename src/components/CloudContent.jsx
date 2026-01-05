import React from 'react';
import './WebContent.css'; // Reusing existing styles
import { FaCheckCircle, FaCircle } from 'react-icons/fa';

const CloudContent = () => {
    return (
        <section className="web-content-section">
            <div className="web-content-container">
                <div className="web-content-block">
                    <h2>Secure, Scalable & High-Performance Cloud Infrastructure with AWS</h2>
                    <p>
                        Amazon Web Services (AWS) is the world's leading cloud platform, offering reliable, secure, and scalable cloud solutions. We provide <strong>end-to-end AWS cloud services</strong> that help businesses build, deploy, and manage applications with high availability, performance, and cost efficiency.
                    </p>
                </div>

                <div className="web-content-block">
                    <h2>Our AWS Cloud Services</h2>
                    <ul className="web-feature-list">
                        <li>
                            <FaCheckCircle className="web-icon-red" />
                            <span><strong>AWS Cloud Architecture & Consulting</strong></span>
                        </li>
                        <li>
                            <FaCheckCircle className="web-icon-red" />
                            <span><strong>Cloud Migration to AWS</strong></span>
                        </li>
                        <li>
                            <FaCheckCircle className="web-icon-red" />
                            <span><strong>Application Deployment & Management</strong></span>
                        </li>
                    </ul>
                </div>

                <div className="web-content-block">
                    <h2>Why Choose AWS for Cloud Computing?</h2>
                    <ul className="web-benefit-list" style={{ listStyle: 'none', padding: 0 }}>
                        <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                            <FaCircle className="web-bullet" />
                            <span>Global, highly available infrastructure</span>
                        </li>
                        <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                            <FaCircle className="web-bullet" />
                            <span>Pay-as-you-go cost model</span>
                        </li>
                        <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                            <FaCircle className="web-bullet" />
                            <span>High security and compliance standards</span>
                        </li>
                        <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                            <FaCircle className="web-bullet" />
                            <span>Auto-scaling and high fault tolerance</span>
                        </li>
                        <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                            <FaCircle className="web-bullet" />
                            <span>Wide range of managed services</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default CloudContent;
