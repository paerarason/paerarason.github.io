import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom'; // Import RouterLink
import '../styles/global.css';

const Header = () => {
    const location = useLocation(); // Hook to get current route

    const navStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        padding: '1rem 2rem',
        background: 'rgba(30, 30, 30, 0.9)', // Dark Grey translucent
        backdropFilter: 'blur(10px)',
        display: 'flex',
        justifyContent: 'center', // Center content
        alignItems: 'center',
        zIndex: 1000,
        transition: 'background-color 0.3s ease',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
    };

    const linkStyle = {
        margin: '0 1.5rem', // Equal spacing
        cursor: 'pointer',
        fontSize: '1rem',
        fontWeight: 600,
        color: '#FFFFFF', // White text
        textDecoration: 'none',
        transition: 'color 0.2s, transform 0.1s'
    };

    const handleMouseEnter = (e) => {
        e.target.style.color = 'var(--color-accent)'; // Accent color on hover
        e.target.style.transform = 'scale(1.05)';
    };

    const handleMouseLeave = (e) => {
        e.target.style.color = '#FFFFFF'; // Return to white text color
        e.target.style.transform = 'scale(1)';
    };

    const handleNavClick = (id) => {
        const targetId = id === 'about' ? 'hero' : id;
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const navItems = ['About', 'Experience', 'Projects', 'Contact'];

    return (
        <nav style={navStyle}>
            <div className="nav-links" style={{ display: 'flex', alignItems: 'center' }}>
                {navItems.map((item) => (
                    <a
                        key={item}
                        onClick={() => {
                            if (location.pathname !== '/') {
                                // If not on home, technically we should navigate first, 
                                // but for this single page app logic:
                                window.location.href = `/#${item.toLowerCase()}`;
                            } else {
                                handleNavClick(item.toLowerCase());
                            }
                        }}
                        style={linkStyle}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        {item}
                    </a>
                ))}
            </div>
        </nav>
    );
};

export default Header;
