import React from 'react';
import './FloatingWhatsApp.css';
import { FaWhatsapp } from 'react-icons/fa';

const FloatingWhatsApp = () => {
    const phoneNumber = "918825889368";
    const whatsappUrl = `https://wa.me/${phoneNumber}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="floating-whatsapp"
            aria-label="Chat on WhatsApp"
        >
            <FaWhatsapp className="whatsapp-icon" />
        </a>
    );
};

export default FloatingWhatsApp;
