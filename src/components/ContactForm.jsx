import React from 'react';
import { motion } from 'framer-motion';

const ContactForm = () => {
    const containerStyle = {
        width: '100%',
        maxWidth: '900px',
        margin: '0 auto',
        padding: '2rem',
        display: 'flex',
        gap: '2rem',
        flexWrap: 'wrap',
        justifyContent: 'center'
    };

    const cardStyle = {
        background: '#2a2a2a',
        borderRadius: '24px',
        padding: '3rem 2rem',
        minWidth: '320px',
        maxWidth: '400px',
        flex: '1',
        position: 'relative'
    };

    const speechBubbleStyle = {
        background: '#d9534f',
        color: '#fff',
        padding: '1.2rem 1.8rem',
        borderRadius: '24px',
        position: 'relative',
        marginBottom: '2rem',
        fontStyle: 'italic',
        fontSize: '1.1rem',
        textAlign: 'center'
    };

    const speechBubbleTailStyle = {
        content: '""',
        position: 'absolute',
        bottom: '-10px',
        left: '50px',
        width: '0',
        height: '0',
        borderLeft: '15px solid transparent',
        borderRight: '15px solid transparent',
        borderTop: '15px solid #d9534f'
    };

    const nameStyle = {
        fontSize: '2.5rem',
        fontWeight: '300',
        letterSpacing: '0.1em',
        color: '#fff',
        marginBottom: '0.5rem',
        textAlign: 'left',
        lineHeight: '1.2'
    };

    const titleStyle = {
        fontSize: '1.2rem',
        color: 'rgba(255,255,255,0.7)',
        marginBottom: '2rem',
        textAlign: 'left'
    };

    const contactBubbleStyle = {
        background: '#000',
        color: '#fff',
        padding: '1rem 1.5rem',
        borderRadius: '20px',
        marginBottom: '1.5rem',
        fontStyle: 'italic',
        fontSize: '1rem',
        textAlign: 'center'
    };

    const contactItemStyle = {
        background: '#000',
        color: '#fff',
        padding: '1rem 1.5rem',
        borderRadius: '12px',
        marginBottom: '1rem',
        fontSize: '1rem',
        textAlign: 'center',
        textDecoration: 'none',
        display: 'block',
        transition: 'transform 0.2s ease, background 0.2s ease'
    };

    return (
        <div style={containerStyle}>
            {/* Left Card - Introduction */}
            <div style={cardStyle}>
                <div style={speechBubbleStyle}>
                    <div>"Always Strive to be the best version of yourself"</div>
                    <div style={speechBubbleTailStyle}></div>
                </div>

                <div style={nameStyle}>
                    PAERARASON
                </div>
                <div style={titleStyle}>
                    Backend Dev | Left Arm Fast Bowler
                </div>

                <div style={{
                    borderTop: '1px dotted rgba(255,255,255,0.2)',
                    borderBottom: '1px dotted rgba(255,255,255,0.2)',
                    padding: '1.5rem 0',
                    margin: '2rem 0',
                    textAlign: 'center',
                    color: 'rgba(255,255,255,0.5)',
                    fontSize: '0.9rem'
                }}>
                    python • rust
                </div>
            </div>

            {/* Right Card - Contact Info */}
            <div style={cardStyle}>
                <div style={contactBubbleStyle}>
                    <div>"Let's connect!"</div>
                </div>

                <motion.a
                    href="https://linkedin.com/in/paerarason/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={contactItemStyle}
                    whileHover={{ scale: 1.03, background: '#0077B5' }}
                    whileTap={{ scale: 0.97 }}
                >
                    linkedin.com/in/paerarason
                </motion.a>

                <motion.a
                    href="https://github.com/paerarason"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={contactItemStyle}
                    whileHover={{ scale: 1.03, background: '#333' }}
                    whileTap={{ scale: 0.97 }}
                >
                    github.com/paerarason
                </motion.a>

                <motion.a
                    href="mailto:paerarason.dev@gmail.com"
                    style={contactItemStyle}
                    whileHover={{ scale: 1.03, background: '#EA4335' }}
                    whileTap={{ scale: 0.97 }}
                >
                    paerarason.dev@gmail.com
                </motion.a>

                <motion.a
                    href="https://paerarason.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={contactItemStyle}
                    whileHover={{ scale: 1.03, background: '#4CAF50' }}
                    whileTap={{ scale: 0.97 }}
                >
                    www.paerarason.in
                </motion.a>
            </div>

            <div style={{
                width: '100%',
                marginTop: '2rem',
                textAlign: 'center',
                color: 'rgba(255,255,255,0.6)',
                fontSize: '0.9rem'
            }}>
                <p>&copy; {new Date().getFullYear()} Paerarason. All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default ContactForm;
