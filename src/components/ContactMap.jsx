import React from 'react';

const ContactMap = () => {
    return (
        <section className="contact-map-section" style={{ padding: '3rem 2rem', backgroundColor: '#fff' }}>
            <div className="contact-map-container" style={{ maxWidth: '1200px', margin: '0 auto', height: '450px', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
                <iframe
                    src="https://maps.google.com/maps?q=Kanavu%20Startup%20Village%20Nallichettipalayam&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    title="Kanavu Startup Village Map"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </section>
    );
};

export default ContactMap;
