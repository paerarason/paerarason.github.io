
import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ id, title, children, backgroundImage, align = 'left', justify, className = '' }) => {
    const sectionStyle = {
        height: '100vh',
        width: '100%',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: align === 'center' ? 'center' : 'flex-start',
        scrollSnapAlign: 'start',
        background: backgroundImage ? `url(${backgroundImage}) center / cover no-repeat fixed` : 'var(--color-bg)',
        color: backgroundImage ? '#FFFFFF' : 'var(--color-text)',
        padding: '0 5%', // Horizontal padding
        overflow: 'hidden' // Hide overflow by default, inner container handles content overflow
    };

    const overlayStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: backgroundImage ? 'rgba(0, 0, 0, 0.4)' : 'transparent', // Reduced opacity
        zIndex: 1
    };

    const contentWrapperStyle = {
        position: 'relative',
        zIndex: 2,
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: justify || 'center',
        // Allow scrolling for content if it exceeds viewport
        overflowY: 'auto',
        maxHeight: '100vh',
        padding: '4rem 0', // Padding top/bottom for scrollable content
        alignItems: align === 'center' ? 'center' : (align === 'right' ? 'flex-end' : 'flex-start'),
        textAlign: align === 'center' ? 'center' : (align === 'right' ? 'right' : 'left')
    };

    return (
        <section id={id} className={`section ${className} `} style={sectionStyle}>
            {backgroundImage && <div style={overlayStyle}></div>}

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.2, delay: 0.5 }}
                style={contentWrapperStyle}
                className="section-content"
            >
                {title && <h2 style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '3rem',
                    marginBottom: '2rem',
                    color: backgroundImage ? 'var(--color-accent)' : 'var(--color-text)',
                    fontWeight: 700,
                    alignSelf: align === 'center' ? 'center' : (align === 'right' ? 'flex-end' : 'flex-start')
                }}>{title}</h2>}
                {children}
            </motion.div>
        </section>
    );
};

export default Section;
