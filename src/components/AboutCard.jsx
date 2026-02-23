import React from 'react';
import { motion } from 'framer-motion';

const AboutCard = ({ children }) => {
    const [isHovered, setIsHovered] = React.useState(false);

    const cardStyle = {
        background: 'var(--card-bg-new)',
        border: 'var(--card-border)',
        borderRadius: 'var(--card-radius)',
        padding: '2rem',
        width: 'calc(20% - 0.75rem)',
        minWidth: '300px',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        cursor: 'pointer',
        flexDirection: 'column',
        position: 'center',
        overflow: 'hidden'
    };

    const dashStyle = {
        width: '40px',
        height: '6px',
        backgroundColor: isHovered ? 'var(--card-accent-dash-hover)' : 'var(--card-accent-dash)',
        borderRadius: '10px',
        marginBottom: '1.5rem',
        border: '1px solid rgba(0,0,0,0.1)',
        transition: 'background-color 0.2s ease'
    };

    return (
        <motion.div
            style={cardStyle}
            whileHover={{ y: -4, boxShadow: '4px 4px 0px var(--spotify-white)' }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
        >
            <div style={dashStyle}></div>
            <div style={{ color: 'var(--spotify-light-gray)', fontSize: '1.1rem', lineHeight: '1.6' }}>
                {children}
            </div>
        </motion.div>
    );
};

export default AboutCard;
