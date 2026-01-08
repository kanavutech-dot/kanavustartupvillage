import { Link } from 'react-router-dom';
import './ObjectiveSection.css';
import { FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ObjectiveSection = () => {
    return (
        <section className="objective-section">
            <div className="objective-container">
                <motion.h2
                    className="objective-title"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    KSV Objective
                </motion.h2>

                <motion.div
                    className="objective-content"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <p className="objective-text">
                        Kanavu Startup Village (KSV), a part of Kanavu.org is a dynamic place for entrepreneurship and innovation, where the seeds of ideas and aspirations take root and flourish.
                    </p>

                    <Link to="/development" className="visit-link">
                        LEARN MORE <FaArrowRight />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default ObjectiveSection;
