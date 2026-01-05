import React from 'react';
import { motion } from 'framer-motion';

const TechStackCard = ({ techStack }) => {
    const [isHovered, setIsHovered] = React.useState(false);

    const cardStyle = {
        padding: '2rem',
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        borderRadius: 'var(--card-radius)',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        cursor: 'default',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        maxWidth: '800px',
        margin: '2rem auto 0',
        color: '#FFFFFF'
    };

    const dashStyle = {
        width: '40px',
        height: '6px',
        backgroundColor: 'var(--color-accent)',
        borderRadius: '10px',
        marginBottom: '1.5rem',
        border: 'none',
        transition: 'background-color 0.2s ease'
    };

    const tagContainerStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.5rem',
        marginTop: '1rem'
    };

    const tagStyle = {
        fontSize: '0.75rem',
        padding: '6px 14px',
        background: 'transparent',
        border: '1px solid rgba(255,255,255,0.3)',
        color: 'rgba(255,255,255,0.8)',
        borderRadius: '500px',
        fontWeight: 500
    };

    return (
        <motion.div
            style={cardStyle}
            whileHover={{ y: -4, boxShadow: '4px 4px 0px var(--spotify-white)' }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
        >
            <div style={dashStyle}></div>
            <h3 style={{ color: '#FFFFFF', fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem' }}>Tech Stack</h3>
            <div style={tagContainerStyle}>
                {techStack.map((tech, index) => (
                    <span key={index} style={tagStyle}>{tech}</span>
                ))}
            </div>
        </motion.div>
    );
};

export default TechStackCard;
