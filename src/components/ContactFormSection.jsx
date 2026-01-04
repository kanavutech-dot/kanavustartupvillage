import React, { useState } from 'react';
import './ContactFormSection.css';

const ContactFormSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("https://formsubmit.co/ajax/kvsnavee@gmail.com", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    subject: formData.subject,
                    message: formData.message
                })
            });

            if (response.ok) {
                alert("Message sent successfully!");
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                alert("Something went wrong. Please try again.");
            }
        } catch (error) {
            console.error("Error sending message:", error);
            alert("Error sending message. Please try again later.");
        }
    };

    return (
        <section className="contact-form-section">
            <div className="contact-form-container">
                <div className="contact-info">
                    <div className="info-block">
                        <h3 className="info-title">Contact sales</h3>
                        <p className="info-text">+91 8825889368</p>
                        <a href="mailto:kvsnavee@gmail.com" className="info-text" style={{ textDecoration: 'none', color: '#333' }}>kvsnavee@gmail.com</a>
                    </div>

                    <div className="info-block">
                        <h3 className="info-title">Service Hours</h3>
                        <p className="info-text">Monday to Saturday : 9am – 6pm</p>
                    </div>

                    <div className="info-block">
                        <h3 className="info-title">Office Address</h3>
                        <p className="info-text">
                            21/83A, Annamalai kottai, Periyakattu<br />
                            thottam, Ammankovil Post, Sivagiri<br />
                            Village, Erode,<br />
                            Tamil nadu – 638 109,<br />
                            India
                        </p>
                    </div>
                </div>

                <div className="contact-form-wrapper">
                    <h2 className="form-heading">send a message</h2>
                    <form onSubmit={handleSubmit} className="contact-form">
                        <div className="form-group">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="form-input"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="form-input"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                name="subject"
                                placeholder="Subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                className="form-input"
                            />
                        </div>
                        <div className="form-group">
                            <textarea
                                name="message"
                                placeholder="Type your message / question"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="6"
                                className="form-textarea"
                            ></textarea>
                        </div>
                        <button type="submit" className="submit-btn">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactFormSection;
