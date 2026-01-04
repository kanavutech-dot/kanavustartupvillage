import React, { useState } from 'react';
import './Header.css';
import logo from '../assets/logo.png';
import { IoSearch, IoMenu, IoClose } from 'react-icons/io5';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header className="header">
            <div className="container header-container">
                <motion.div
                    className="logo"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Link to="/">
                        <img src={logo} alt="Kanavu Logo" className="logo-img" />
                    </Link>
                </motion.div>


                {/* Desktop Nav */}
                <motion.nav
                    className="desktop-nav"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <ul>
                        <li><a href="/#about">About</a></li>
                        <li><Link to="/development">Development</Link></li>
                        <li><Link to="/digital">Digital</Link></li>
                        <li><a href="/#hub">Hub</a></li>
                        <li><a href="/#academy">Academy</a></li>
                        <li><a href="/#contact" className="contact-link">» Contact</a></li>
                        <li><a href="/#blogs">Blogs</a></li>
                    </ul>
                </motion.nav>

                <div className="header-actions">
                    <button className="search-btn"><IoSearch /></button>
                    <button className={`mobile-menu-btn ${isMenuOpen ? 'menu-open' : ''}`} onClick={toggleMenu} aria-label="Toggle menu">
                        {isMenuOpen ? <IoClose /> : <IoMenu />}
                    </button>
                </div>

                {/* Mobile Nav Overlay */}
                <div className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
                    <ul>
                        <li><a href="/#about" onClick={toggleMenu}>About</a></li>
                        <li><Link to="/development" onClick={toggleMenu}>Development</Link></li>
                        <li><Link to="/digital" onClick={toggleMenu}>Digital</Link></li>
                        <li><a href="/#hub" onClick={toggleMenu}>Hub</a></li>
                        <li><a href="/#academy" onClick={toggleMenu}>Academy</a></li>
                        <li><a href="/#contact" onClick={toggleMenu}>Contact</a></li>
                        <li><a href="/#blogs" onClick={toggleMenu}>Blogs</a></li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;
