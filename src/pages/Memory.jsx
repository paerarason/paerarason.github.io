import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Memory = () => {
    const { location } = useParams();

    // Placeholder data - in a real app, this could come from a data file or API
    const memories = {
        "Chennai": {
            title: "The Beginning",
            date: "March 2022",
            description: "Where it all started. From the classrooms of MIT to my first steps in the tech world. The heat, the beach, and the code.",
            image: "https://images.unsplash.com/photo-1582510003544-524378ae10d6?q=80&w=2070&auto=format&fit=crop" // Placeholder image
        },
        "Bengaluru": {
            title: "The Tech Hub",
            date: "March 2024",
            description: "Moving to the Silicon Valley of India. Fast-paced startups, filter coffee, and building scalable systems.",
            image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?q=80&w=2127&auto=format&fit=crop" // Placeholder image
        }
    };

    const memory = memories[location] || {
        title: location,
        date: "Unknown Date",
        description: "Exploring new horizons.",
        image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2144&auto=format&fit=crop"
    };

    return (
        <div style={{ backgroundColor: 'var(--spotify-black)', minHeight: '100vh', color: 'var(--spotify-white)' }}>
            <Header />

            <div className="container" style={{ paddingTop: '100px', paddingBottom: '4rem' }}>
                <Link to="/" style={{ color: 'var(--spotify-light-gray)', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', textDecoration: 'none' }}>
                    ← Back to Home
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div style={{ height: '400px', borderRadius: '16px', overflow: 'hidden', marginBottom: '2rem', position: 'relative' }}>
                        <img
                            src={memory.image}
                            alt={location}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                        <div style={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            width: '100%',
                            background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)',
                            padding: '2rem'
                        }}>
                            <h1 style={{ fontSize: '4rem', margin: 0, color: 'white' }}>{location}</h1>
                            <p style={{ color: 'var(--spotify-green)', fontSize: '1.2rem', fontWeight: 500 }}>{memory.date}</p>
                        </div>
                    </div>

                    <div style={{ maxWidth: '800px' }}>
                        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>{memory.title}</h2>
                        <p style={{ fontSize: '1.1rem', color: 'var(--spotify-light-gray)', lineHeight: '1.6' }}>
                            {memory.description}
                        </p>
                    </div>
                </motion.div>
            </div>

            <Footer />
        </div>
    );
};

export default Memory;
