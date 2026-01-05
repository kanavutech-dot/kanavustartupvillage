import React from 'react';
import './WebContent.css';
import { FaCheckCircle, FaCircle } from 'react-icons/fa';

const SoftwareContent = () => {
    return (
        <section className="web-content-section">
            <div className="web-content-container">
                <div className="web-content-block">
                    <h2>Powerful, Scalable & Modern Web Software with React</h2>
                    <p>
                        React is a leading JavaScript library used to build <strong>high-performance, scalable, and interactive web software</strong>. We specialize in developing robust React-based software solutions that deliver seamless user experiences and support long-term business growth.
                    </p>
                </div>

                <div className="web-content-block">
                    <h2>Why Choose React for Software Development?</h2>
                    <ul className="web-feature-list">
                        <li>
                            <FaCheckCircle className="web-icon-red" />
                            <span><strong>Component-based and reusable architecture</strong></span>
                        </li>
                        <li>
                            <FaCheckCircle className="web-icon-red" />
                            <span><strong>Fast rendering with Virtual DOM</strong></span>
                        </li>
                        <li>
                            <FaCheckCircle className="web-icon-red" />
                            <span><strong>Easy scalability and maintainability</strong></span>
                        </li>
                    </ul>
                </div>

                <div className="web-content-block">
                    <h2>Our React Software Solutions</h2>
                    <ul className="web-benefit-list" style={{ listStyle: 'none', padding: 0 }}>
                        <li style={{ marginBottom: '1.5rem', display: 'block' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.3rem' }}>
                                <FaCircle className="web-bullet" style={{ fontSize: '0.6rem' }} />
                                <h3 style={{ fontSize: '1.2rem', margin: 0, fontWeight: 700, color: '#111' }}>Custom React Software Development</h3>
                            </div>
                            <p style={{ marginLeft: '1.1rem', margin: 0 }}>Tailor-made web software designed to meet your exact business requirements.</p>
                        </li>

                        <li style={{ marginBottom: '1.5rem', display: 'block' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.3rem' }}>
                                <FaCircle className="web-bullet" style={{ fontSize: '0.6rem' }} />
                                <h3 style={{ fontSize: '1.2rem', margin: 0, fontWeight: 700, color: '#111' }}>Enterprise React Applications</h3>
                            </div>
                            <p style={{ marginLeft: '1.1rem', margin: 0 }}>Secure, scalable, and high-performing applications for enterprise-level needs.</p>
                        </li>

                        <li style={{ marginBottom: '1.5rem', display: 'block' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.3rem' }}>
                                <FaCircle className="web-bullet" style={{ fontSize: '0.6rem' }} />
                                <h3 style={{ fontSize: '1.2rem', margin: 0, fontWeight: 700, color: '#111' }}>Single Page Applications (SPA)</h3>
                            </div>
                            <p style={{ marginLeft: '1.1rem', margin: 0 }}>Fast-loading, responsive applications with smooth navigation and real-time updates.</p>
                        </li>

                        <li style={{ marginBottom: '1.5rem', display: 'block' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.3rem' }}>
                                <FaCircle className="web-bullet" style={{ fontSize: '0.6rem' }} />
                                <h3 style={{ fontSize: '1.2rem', margin: 0, fontWeight: 700, color: '#111' }}>React + Backend Integration</h3>
                            </div>
                            <p style={{ marginLeft: '1.1rem', margin: 0 }}>Seamless integration with REST APIs, GraphQL, cloud services, and databases.</p>
                        </li>

                        <li style={{ marginBottom: '1.5rem', display: 'block' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.3rem' }}>
                                <FaCircle className="web-bullet" style={{ fontSize: '0.6rem' }} />
                                <h3 style={{ fontSize: '1.2rem', margin: 0, fontWeight: 700, color: '#111' }}>Maintenance & Upgrades</h3>
                            </div>
                            <p style={{ marginLeft: '1.1rem', margin: 0 }}>Continuous improvement, performance optimization, and feature enhancements.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default SoftwareContent;
