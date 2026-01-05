import React from 'react';

const Footer = () => {
    const footerStyle = {
        padding: '4rem 0',
        textAlign: 'center',
        marginTop: '4rem',
        color: 'var(--spotify-light-gray)',
        fontSize: '0.9rem'
    };

    const linkStyle = {
        margin: '0 15px',
        color: 'var(--spotify-white)',
        textDecoration: 'none',
        fontWeight: 500
    };

    return (
        <footer style={footerStyle}>
            <div className="container">
                <p>&copy; {new Date().getFullYear()} Paerarason. All Rights Reserved.</p>
                <div style={{ marginTop: '1.5rem' }}>
                    <a href="https://github.com/paerarason" target="_blank" rel="noopener noreferrer" style={linkStyle}>GitHub</a>
                    <a href="https://linkedin.com/in/paerarason/" target="_blank" rel="noopener noreferrer" style={linkStyle}>LinkedIn</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
