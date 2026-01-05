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
                backgroundColor: '#FFD700', // Solid Gold/Yellow
                boxShadow: '0 0 5px #FFD700',
                pointerEvents: 'none',
                zIndex: 9999,
                transform: `translate(${position.x - 7.5}px, ${position.y - 7.5}px)`, // Cenetered
                transition: 'transform 0.05s linear', // Faster, linear follow
                mixBlendMode: 'normal'
            }}
        />
    );
};

export default Spotlight;
