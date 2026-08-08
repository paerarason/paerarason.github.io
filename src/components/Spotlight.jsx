import React, { useState, useEffect } from 'react';

const Spotlight = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '15px',
                height: '15px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-link)',
                boxShadow: '0 0 6px var(--color-link)',
                pointerEvents: 'none',
                zIndex: 9999,
                transform: `translate(${position.x - 7.5}px, ${position.y - 7.5}px)`,
                transition: 'transform 0.05s linear'
            }}
        />
    );
};

export default Spotlight;
