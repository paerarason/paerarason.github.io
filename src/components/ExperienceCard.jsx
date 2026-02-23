import React from 'react';
import { motion } from 'framer-motion';

const ExperienceCard = ({ role, company, period, description }) => {
    const [isHovered, setIsHovered] = React.useState(false);

    const cardStyle = {
        background: 'rgba(255, 255, 255, 0.1)', // Glassmorphism
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        borderRadius: 'var(--card-radius, 8px)',
        padding: '2rem',
        width: 'calc(20% - 0.75rem)',
        minWidth: '300px',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden',
        color: '#FFFFFF',
        textAlign: 'left'
    };

    const dashStyle = {
        width: '40px',
        height: '6px',
        backgroundColor: 'var(--color-accent)', // Teal
        borderRadius: '10px',
        marginBottom: '1.5rem',
        border: 'none',
        transition: 'width 0.2s ease'
    };

    return (
        <motion.div
            style={cardStyle}
            whileHover={{ y: -4, boxShadow: '4px 4px 0px var(--spotify-white)' }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
        >
            <div style={dashStyle}></div>
            <h3 style={{ color: '#FFFFFF', marginBottom: '0.5rem', fontSize: '1.5rem', fontWeight: 700 }}>{role}</h3>
            <h4 style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1rem', marginBottom: '1rem', fontWeight: 500 }}>{company} • {period}</h4>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1rem', lineHeight: '1.5' }}>{description}</p>

        </motion.div>
    );
};

export default ExperienceCard;
