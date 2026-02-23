import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

import ootyImg from '../assets/ooty.png';
import wayanadImg from '../assets/wayanad.png';
import munnarImg from '../assets/munnar.jpg';
import coorgImg from '../assets/coorg.png';

const TravelTimeline = () => {
    const events = [
        {
            date: "April 2022",
            title: "Ooty",
            description: "Queen of Hill Stations.",
            images: [ootyImg, ootyImg],
            tag: "Trip",
            color: "#2ecc71" // Emerald
        },
        {
            date: "April 2023",
            title: "Wayanad",
            description: "Nature's Abode.",
            images: [wayanadImg, wayanadImg],
            tag: "Adventure",
            color: "#3498db" // Blue
        },
        {
            date: "May 2024",
            title: "Munnar",
            description: "Tea Gardens & Mist.",
            images: [munnarImg, munnarImg],
            tag: "Leisure",
            color: "#9b59b6" // Purple
        },
        {
            date: "September 2025",
            title: "Coorg",
            description: "Scotland of India.",
            images: [coorgImg, coorgImg],
            tag: "Planned",
            color: "#e67e22" // Orange
        },
        {
            date: "Future",
            title: "The Unknown",
            description: "Where to next?",
            images: [null, null],
            tag: "Future",
            color: "#f1c40f" // Yellow
        }
    ];

    const containerRef = useRef(null);

    // Provide placeholders for images if none exist
    const ImagePlaceholder = () => (
        <div style={{
            flex: 1,
            background: 'rgba(255,255,255,0.05)',
            border: '1px dashed var(--spotify-light-gray)',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--spotify-light-gray)',
            fontSize: '0.8rem',
            minHeight: '100px'
        }}>
            <span>Add Photo</span>
        </div>
    );

    return (
        <div ref={containerRef} style={{ position: 'relative', width: '100%', maxWidth: '1000px', margin: '0 auto', padding: '2rem 0' }}>
            {/* Central Line */}
            <div style={{
                position: 'absolute',
                left: '50%',
                top: 0,
                bottom: 0,
                width: '4px',
                background: 'var(--spotify-light-gray)', // Keeping it subtle
                transform: 'translateX(-50%)',
                borderRadius: '2px',
                opacity: 0.3
            }}></div>

            {events.map((event, index) => {
                const isLeft = index % 2 === 0; // Alternating sides

                return (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        style={{
                            display: 'flex',
                            justifyContent: isLeft ? 'flex-end' : 'flex-start',
                            marginBottom: '4rem',
                            position: 'relative',
                            width: '100%'
                        }}
                    >
                        {/* Dot on the line - Corrected Positioning */}
                        <div style={{
                            position: 'absolute',
                            left: '50%',
                            top: '20px', // Align with the card top roughly
                            width: '20px',
                            height: '20px',
                            background: event.color,
                            borderRadius: '50%',
                            transform: 'translateX(-50%)',
                            zIndex: 2,
                            border: '4px solid var(--spotify-black)', // Match bg to create 'cutout' effect
                            boxShadow: `0 0 0 2px ${event.color}`
                        }}></div>

                        {/* Content Card Wrapper */}
                        <div style={{
                            width: '45%', // slightly less than half to leave gap for line
                            paddingLeft: isLeft ? 0 : '3rem',
                            paddingRight: isLeft ? '3rem' : 0,
                            boxSizing: 'border-box'
                        }}>
                            {/* The Card */}
                            <div style={{
                                background: 'rgba(255, 255, 255, 0.1)',
                                backdropFilter: 'blur(10px)',
                                borderRadius: '12px',
                                padding: '1.5rem',
                                position: 'relative',
                                border: '1px solid rgba(255, 255, 255, 0.2)',
                                overflow: 'hidden' // For the badge
                            }}>
                                {/* Badge like in reference */}
                                <div style={{
                                    position: 'absolute',
                                    top: 0,
                                    right: isLeft ? 'auto' : 0,
                                    left: isLeft ? 0 : 'auto',
                                    background: event.color,
                                    color: '#fff',
                                    padding: '4px 12px',
                                    fontSize: '0.75rem',
                                    fontWeight: 'bold',
                                    borderBottomRightRadius: isLeft ? '8px' : 0,
                                    borderBottomLeftRadius: isLeft ? 0 : '8px'
                                }}>
                                    {event.tag.toUpperCase()}
                                </div>

                                <div style={{ marginBottom: '1rem', marginTop: '1rem' }}>
                                    <span style={{ fontSize: '0.85rem', color: event.color, fontWeight: 'bold' }}>{event.date}</span>
                                    <h3 style={{ margin: '0.5rem 0', color: '#FFFFFF', fontSize: '1.5rem' }}>{event.title}</h3>
                                    <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1rem', lineHeight: '1.5' }}>{event.description}</p>
                                </div>

                                {/* Image Provision */}
                                <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem', height: '120px' }}>
                                    {[0, 1].map((i) => (
                                        event.images[i] ? (
                                            <div key={i} style={{
                                                flex: 1,
                                                borderRadius: '8px',
                                                overflow: 'hidden',
                                                position: 'relative',
                                                boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                                            }}>
                                                <img
                                                    src={event.images[i]}
                                                    alt={`${event.title} ${i + 1}`}
                                                    style={{
                                                        width: '100%',
                                                        height: '100%',
                                                        objectFit: 'cover',
                                                        transition: 'transform 0.3s ease'
                                                    }}
                                                    onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
                                                    onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                                                />
                                            </div>
                                        ) : (
                                            <ImagePlaceholder key={i} />
                                        )
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                );
            })}
        </div>
    );
};

export default TravelTimeline;
