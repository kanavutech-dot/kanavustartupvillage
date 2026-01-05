import React from 'react';
import './WebContent.css';
import { FaCheckCircle, FaCircle } from 'react-icons/fa';

const WebContent = () => {
    return (
        <section className="web-content-section">
            <div className="web-content-container">
                <div className="web-content-block">
                    <h2>Professional WordPress & WooCommerce Development Services</h2>
                    <p>
                        Looking to create a stunning, responsive, and high-converting website? Our WordPress and WooCommerce development services are designed to help businesses, entrepreneurs, and online stores establish a strong digital presence.
                    </p>
                </div>

                <div className="web-content-block">
                    <h2>Why Choose WordPress for Your Website?</h2>
                    <ul className="web-feature-list">
                        <li>
                            <FaCheckCircle className="web-icon-red" />
                            <span><strong>Native AppCustomizable themes & plugins</strong> for a unique website experiences</span>
                        </li>
                        <li>
                            <FaCheckCircle className="web-icon-red" />
                            <span><strong>SEO-friendly architecture</strong> to boost search engine rankings</span>
                        </li>
                        <li>
                            <FaCheckCircle className="web-icon-red" />
                            <span><strong>Responsive design</strong> for mobile, tablet, and desktop users</span>
                        </li>
                    </ul>
                </div>

                <div className="web-content-block">
                    <h2>WooCommerce: Power Your Online Store</h2>
                    <p>With WooCommerce, you can transform your WordPress site into a fully functional e-commerce store. Benefits include:</p>
                    <ul className="web-benefit-list">
                        <li><FaCircle className="web-bullet" /> Flexible product management (physical, digital, or subscription-based products)</li>
                        <li><FaCircle className="web-bullet" /> Secure payment gateways integration</li>
                        <li><FaCircle className="web-bullet" /> Inventory & order management</li>
                        <li><FaCircle className="web-bullet" /> Optimized for SEO and speed to attract more buyers</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default WebContent;
