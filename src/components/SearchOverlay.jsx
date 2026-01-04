import React, { useState, useEffect } from 'react';
import { IoClose, IoSearch } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import './SearchOverlay.css';

const siteContent = [
    // Pages
    { title: 'Home', path: '/', category: 'Page', keywords: 'home, main, kanavu, startup' },
    { title: 'Development Services', path: '/development', category: 'Page', keywords: 'software, engineering, app, web, custom, code' },
    { title: 'Digital Services', path: '/digital', category: 'Page', keywords: 'marketing, seo, branding, social media, design' },
    { title: 'Innovation Hub', path: '/hub', category: 'Page', keywords: 'community, events, coworking, space, startup village' },
    { title: 'Contact Us', path: '/contact', category: 'Page', keywords: 'email, phone, address, map, location, get in touch' },

    // Services / Sections (Deep links)
    { title: 'Web App Development', path: '/development', category: 'Service', keywords: 'react, website, portal, ecommerce' },
    { title: 'Mobile App Development', path: '/development', category: 'Service', keywords: 'ios, android, flutter, native' },
    { title: 'UI/UX Design', path: '/digital', category: 'Service', keywords: 'interface, user experience, figma, prototype' },
    { title: 'Digital Marketing', path: '/digital', category: 'Service', keywords: 'ads, campaign, social, growth' },
    { title: 'Co-working Space', path: '/hub', category: 'Feature', keywords: 'office, desk, rental, startup' },
    { title: 'Academy & Training', path: '/#academy', category: 'Education', keywords: 'learn, courses, training, internships' },
    { title: 'Our Team', path: '/#about', category: 'About', keywords: 'founders, staff, people' }
];

const recommendations = [
    { title: 'Custom Software Development', path: '/development' },
    { title: 'Digital Marketing Strategies', path: '/digital' },
    { title: 'Join our Community Hub', path: '/hub' },
    { title: 'Get a Quote', path: '/contact' }
];

const SearchOverlay = ({ isOpen, onClose }) => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
            setQuery('');
            setResults([]);
        }
        return () => { document.body.style.overflow = 'auto'; };
    }, [isOpen]);

    const handleSearch = (e) => {
        const value = e.target.value;
        setQuery(value);

        if (value.trim() === '') {
            setResults([]);
            return;
        }

        const filtered = siteContent.filter(item =>
            item.title.toLowerCase().includes(value.toLowerCase()) ||
            item.keywords.toLowerCase().includes(value.toLowerCase())
        );
        setResults(filtered);
    };

    const handleResultClick = (path) => {
        if (path.startsWith('/#') || path.startsWith('http')) {
            window.location.href = path;
        } else {
            navigate(path);
        }
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="search-overlay">
            <button className="search-close-btn" onClick={onClose}>
                <IoClose />
            </button>
            <div className="search-container">
                <div className="search-input-wrapper">
                    <IoSearch className="search-icon-large" />
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Type to search..."
                        value={query}
                        onChange={handleSearch}
                        autoFocus
                    />
                </div>

                <div className="search-body">
                    {query ? (
                        <div className="search-results">
                            {results.length > 0 ? (
                                <ul>
                                    {results.map((result, index) => (
                                        <li key={index} onClick={() => handleResultClick(result.path)}>
                                            <div className="result-info">
                                                <span className="result-title">{result.title}</span>
                                                <span className="result-category">{result.category}</span>
                                            </div>
                                            <span className="result-arrow">→</span>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="no-results">No matches found for "{query}"</p>
                            )}
                        </div>
                    ) : (
                        <div className="search-recommendations">
                            <h3>Recommended for you</h3>
                            <div className="pill-container">
                                {recommendations.map((rec, index) => (
                                    <button key={index} className="rec-pill" onClick={() => handleResultClick(rec.path)}>
                                        {rec.title}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SearchOverlay;
