import React from 'react';
import './WebContent.css';
import { FaCheckCircle } from 'react-icons/fa';

const AIContent = () => {
    return (
        <section className="web-content-section">
            <div className="web-content-container">
                <div className="web-content-block">
                    <h2>AI Services & Solutions for Smarter Business Growth</h2>
                    <p>
                        Transform your business with cutting-edge Artificial Intelligence (AI) services designed to automate processes, enhance decision-making, and improve customer experiences. Our AI solutions help businesses stay competitive in a data-driven digital world.
                    </p>
                </div>

                <div className="web-content-block">
                    <h2>Why Choose AI for Your Business?</h2>
                    <ul className="web-feature-list">
                        <li>
                            <FaCheckCircle className="web-icon-red" />
                            <span><strong>Automate repetitive tasks</strong> and reduce operational costs</span>
                        </li>
                        <li>
                            <FaCheckCircle className="web-icon-red" />
                            <span><strong>Analyze large datasets</strong> for accurate insights and predictions</span>
                        </li>
                        <li>
                            <FaCheckCircle className="web-icon-red" />
                            <span><strong>Improve customer engagement</strong> with intelligent chatbots and personalization</span>
                        </li>
                    </ul>
                </div>

                <div className="web-content-block">
                    <h2>Our AI Development Services</h2>
                    <p>We offer customized AI solutions tailored to your business needs:</p>

                    <div style={{ marginBottom: '1.5rem' }}>
                        <h3 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '0.5rem', color: '#111' }}>Custom AI Solutions</h3>
                        <p style={{ marginBottom: '0.5rem' }}>Design and deploy AI models that align with your goals, from recommendation systems to intelligent automation.</p>
                    </div>

                    <div style={{ marginBottom: '1.5rem' }}>
                        <h3 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '0.5rem', color: '#111' }}>Machine Learning & Deep Learning</h3>
                        <p style={{ marginBottom: '0.5rem' }}>Develop predictive models using advanced algorithms to improve forecasting, classification, and data analysis.</p>
                    </div>

                    <div style={{ marginBottom: '1.5rem' }}>
                        <h3 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '0.5rem', color: '#111' }}>AI Chatbots & Virtual Assistants</h3>
                        <p style={{ marginBottom: '0.5rem' }}>Enhance customer support with 24/7 AI-powered chatbots that provide instant responses and improve user satisfaction.</p>
                    </div>

                    <div style={{ marginBottom: '1.5rem' }}>
                        <h3 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '0.5rem', color: '#111' }}>Natural Language Processing (NLP)</h3>
                        <p style={{ marginBottom: '0.5rem' }}>Leverage NLP to analyze text, sentiment, speech, and customer interactions for smarter business insights.</p>
                    </div>

                    <div style={{ marginBottom: '1.5rem' }}>
                        <h3 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '0.5rem', color: '#111' }}>Computer Vision Solutions</h3>
                        <p style={{ marginBottom: '0.5rem' }}>Implement AI systems for image recognition, facial detection, video analytics, and quality inspection.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AIContent;
