import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ title, description, techStack }) => {
    const [isHovered, setIsHovered] = React.useState(false);

    const cardStyle = {
        background: 'rgba(255, 255, 255, 0.1)',
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
        backgroundColor: 'var(--color-accent)',
        borderRadius: '10px',
        marginBottom: '1.5rem',
        border: 'none',
        transition: 'background-color 0.2s ease'
    };

    const titleStyle = {
        fontSize: '1.5rem',
        marginBottom: '0.75rem',
        color: '#FFFFFF',
        fontWeight: 700,
        lineHeight: 1.2
    };

    const descStyle = {
        color: 'rgba(255,255,255,0.7)',
        marginBottom: '1.5rem',
        fontSize: '1rem',
        lineHeight: '1.5',
        maxHeight: '120px',
        overflowY: 'auto',
        flexGrow: 1,
        paddingRight: '0.5rem'
    };

    const tagContainerStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.5rem',
        marginTop: 'auto'
    };

    const tagStyle = {
        fontSize: '0.75rem',
        padding: '6px 14px',
        background: 'transparent',
        border: '1px solid var(--spotify-light-gray)',
        color: 'var(--spotify-light-gray)',
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
            <h3 style={titleStyle} title={title}>{title}</h3>
            <p style={descStyle}>{description}</p>
            <div style={tagContainerStyle}>
                {techStack.map((tech, index) => (
                    <span key={index} style={tagStyle}>{tech}</span>
                ))}
            </div>
        </motion.div>
    );
};

export default ProjectCard;
