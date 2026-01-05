import { Link } from 'react-router-dom';
import './Footer.css';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp, FaChevronDown, FaAngleUp, FaAngleDoubleRight } from 'react-icons/fa';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <footer className="footer">
            <div className="footer-container">
                {/* CTA Banner */}
                <div className="footer-cta">
                    <h2 className="footer-cta-text">Technology is best when it brings people together</h2>
                    <Link to="/contact" className="footer-cta-btn">
                        get started <FaAngleDoubleRight size={14} />
                    </Link>
                </div>

                {/* Footer Columns */}
                <div className="footer-links-grid">
                    <div className="footer-column">
                        <h3>Contact us</h3>
                        <span className="contact-number">8825889368</span>
                        <span className="contact-support">Get Free Support 24/7</span>
                    </div>

                    <div className="footer-column">
                        <h3>About us</h3>
                        <ul className="footer-link-list">
                            <li className="footer-link-item">
                                <a href="#who-we-are" className="footer-link">
                                    Who We Are <FaChevronDown size={10} />
                                </a>
                            </li>
                            <li className="footer-link-item">
                                <Link to="/contact" className="footer-link">
                                    Get In Touch
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h3>Follow us</h3>
                        <div className="social-icons">
                            <a href="#" className="social-icon-btn"><FaFacebookF /></a>
                            <a href="#" className="social-icon-btn"><FaInstagram /></a>
                            <a href="#" className="social-icon-btn"><FaLinkedinIn /></a>
                            <a href="#" className="social-icon-btn"><FaWhatsapp /></a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="footer-bottom">
                    <p>2026Copyright &copy; Allright reserved</p>
                    <div className="scroll-top-btn" onClick={scrollToTop}>
                        <FaAngleUp />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
