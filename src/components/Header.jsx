import React, { useState } from 'react';
import './Header.css';
import logo from '../assets/logo.png';
import { IoSearch, IoMenu, IoClose, IoChevronDown, IoChevronUp } from 'react-icons/io5';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import SearchOverlay from './SearchOverlay';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const [isBlogsOpen, setIsBlogsOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const toggleBlogs = () => setIsBlogsOpen(!isBlogsOpen);
    const openSearch = () => setIsSearchOpen(true);
    const closeSearch = () => setIsSearchOpen(false);

    return (
        <header className="header">
            <SearchOverlay isOpen={isSearchOpen} onClose={closeSearch} />
            <div className="container header-container">
                <motion.div
                    className="logo"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <a href="https://kanavu.org">
                        <img src={logo} alt="Kanavu Logo" className="logo-img" />
                    </a>
                </motion.div>


                {/* Desktop Nav */}
                <motion.nav
                    className="desktop-nav"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <ul>
                        <li><a href="https://tech.kanavu.org">Home</a></li>

                        <li><Link to="/development">Development</Link></li>
                        <li><Link to="/digital">Digital</Link></li>
                        <li><Link to="/hub">Hub</Link></li>
                        <li><Link to="/academy">Academy</Link></li>
                        <li><a href="https://www.kanavu.org/contact-us/" className="contact-link">Contact</a></li>
                        <li className="nav-item has-dropdown">
                            <a href="/#blogs">Blogs</a>
                            <ul className="dropdown-menu">
                                <li><a href="#">Technology</a></li>
                                <li><a href="#">Digital</a></li>
                            </ul>
                        </li>
                    </ul>
                </motion.nav>

                <div className="header-actions">
                    <button className="search-btn" onClick={openSearch}><IoSearch /></button>
                    <button className={`mobile-menu-btn ${isMenuOpen ? 'menu-open' : ''}`} onClick={toggleMenu} aria-label="Toggle menu">
                        {isMenuOpen ? <IoClose /> : <IoMenu />}
                    </button>
                </div>

                {/* Mobile Nav Overlay */}
                <div className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
                    <ul>
                        <li><a href="https://tech.kanavu.org" onClick={toggleMenu}>Home</a></li>

                        <li><Link to="/development" onClick={toggleMenu}>Development</Link></li>
                        <li><Link to="/digital" onClick={toggleMenu}>Digital</Link></li>
                        <li><Link to="/hub" onClick={toggleMenu}>Hub</Link></li>
                        <li><Link to="/academy" onClick={toggleMenu}>Academy</Link></li>
                        <li><a href="https://www.kanavu.org/contact-us/" onClick={toggleMenu}>Contact</a></li>
                        <li className="mobile-nav-item">
                            <div className="mobile-nav-link-wrapper" onClick={toggleBlogs}>
                                <span className="mobile-link-text">Blogs</span>
                                {isBlogsOpen ? <IoChevronUp /> : <IoChevronDown />}
                            </div>
                            <AnimatePresence>
                                {isBlogsOpen && (
                                    <motion.ul
                                        className="mobile-submenu"
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <li><a href="#" onClick={toggleMenu}>Technology</a></li>
                                        <li><a href="#" onClick={toggleMenu}>Digital</a></li>
                                    </motion.ul>
                                )}
                            </AnimatePresence>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;
