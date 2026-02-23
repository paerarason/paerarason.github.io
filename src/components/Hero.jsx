import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Hero = ({ backgroundImage, aboutText }) => {
    const containerStyle = {
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start', // Left align
        padding: '0 5%',
        background: `url(${backgroundImage}) center/cover no-repeat fixed`,
        position: 'relative',
        color: '#FFFFFF',
        scrollSnapAlign: 'start', // Enable snapping
        width: '100%'
    };

    const overlayStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.4)', // Reduced opacity for better image visibility
        zIndex: 1
    };

    const contentStyle = {
        position: 'relative',
        zIndex: 2,
        textAlign: 'left',
        maxWidth: '800px',
        width: '100%'
    };

    const titleStyle = {
        fontFamily: 'var(--font-heading)',
        fontSize: 'clamp(3.5rem, 10vw, 7rem)',
        lineHeight: 1.1,
        marginBottom: '1.5rem',
        color: 'var(--color-accent)', // Green
        fontWeight: 700
    };

    const subtitleStyle = {
        fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
        color: '#e1ebe1ff',  // Light Green
        marginBottom: '2rem',
        fontWeight: 400,
        fontFamily: 'var(--font-heading)',
        fontStyle: 'italic'
    };

    return (
        <div id="hero" style={containerStyle}>
            <div style={overlayStyle}></div>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.5 }}
                style={contentStyle}
            >
                <h1 style={titleStyle}>Paerarason </h1>
                <h2 style={subtitleStyle}>Backend Developer &<br />System Architect</h2>
                <p style={{ margin: '0 auto 2rem auto', color: '#e6ffe6', fontSize: '1.2rem', lineHeight: '1.6' }}>
                    Building scalable, reliable, and high-performance systems.
                    Specializing in Python, Rust, and real-time data pipelines.
                </p>
                {aboutText && (
                    <div style={{ marginTop: '3rem', borderTop: '1px solid rgba(29, 185, 84, 0.3)', paddingTop: '2rem' }}>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-accent)' }}>Chapter 1: About Myself</h3>
                        <p style={{ fontSize: '1.1rem', color: '#e6ffe6', lineHeight: '1.6' }}>
                            {aboutText}
                        </p>
                    </div>
                )}

                <div style={{ marginTop: '3rem' }}>
                    <button
                        onClick={() => {
                            document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        style={{
                            backgroundColor: '#FFFFFF',
                            color: '#000000',
                            border: 'none',
                            padding: '1rem 2.5rem',
                            fontSize: '1.1rem',
                            borderRadius: '50px',
                            cursor: 'pointer',
                            fontWeight: 600
                        }}
                    >
                        Explore My Work
                    </button>
                </div>
            </motion.div>
        </div>
    );
};

export default Hero;
