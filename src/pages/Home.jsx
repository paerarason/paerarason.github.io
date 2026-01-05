import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Section from '../components/Section';
import ContactForm from '../components/ContactForm';
import ProjectCard from '../components/ProjectCard';
import ExperienceCard from '../components/ExperienceCard';
import AboutCard from '../components/AboutCard';
import TechStackCard from '../components/TechStackCard';
import TravelTimeline from '../components/TravelTimeline';
import TravelMap from '../components/TravelMap';
import Spotlight from '../components/Spotlight';

import chapter1Img from '../assets/chapter1.jpg';
import chapter2Img from '../assets/chapter2.jpeg';
import chapter3Img from '../assets/chapter3.jpg';
import chapter4Img from '../assets/chapter4.jpg';
import chapter5Img from '../assets/chapter5.jpg';

const Home = () => {
    const projects = [
        {
            title: "CNC Machine Desktop Application",
            description: "Robust desktop application for CNC machine control using GTK3. Migrated from Tkinter for improved performance. Integrated real-time data visualization.",
            techStack: ["GTK3", "Python", "Linux"]
        },
        {
            title: "Real-time API Development",
            description: "REST and WebSocket APIs for real-time CNC machine control. Managed InfluxDB for time-series data and enabled live dashboards.",
            techStack: ["Django", "WebSockets", "InfluxDB", "Redis"]
        },
        {
            title: "Notification Microservice",
            description: "Scalable notification system supporting email, SMS, and WhatsApp. Implemented non-blocking queuing with RabbitMQ and Celery.",
            techStack: ["FastAPI", "RabbitMQ", "Celery", "AWS"]
        },
        {
            title: "Data Processing & Automation",
            description: "Migration scripts for InfluxDB to PostgreSQL. Anomaly detection pipelines and automated recruitment screening scripts.",
            techStack: ["PostgreSQL", "Python", "Azure APIs"]
        }
    ];

    const experience = [
        {
            role: "Backend Developer",
            company: "Ethereal Machines",
            period: "2+ Years Exp.",
            description: "Designed database schemas, developed APIs for CNC machines, and built CRM modules.",
            techStack: ["Django", "WebSockets", "InfluxDB", "Redis"]
        },
        {
            role: "Backend Developer",
            company: "Advertyzement",
            period: "Previous",
            description: "Led transition to microservices, resolved file management issues, and built notification systems.",
            techStack: ["Django", "WebSockets", "InfluxDB", "Redis"]
        }
    ];

    const imageStyle = {
        width: '80%',
        maxWidth: 'none',
        height: 'auto',
        borderRadius: '12px',
        margin: '0 auto 2rem auto',
        display: 'block',
        boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
    };

    const aboutContent = `Born with an innate curiosity for technology, my story begins in the classrooms of the Madras Institute of Technology.
                    Here, I not only honed my skills in Production Engineering but also discovered my passion for solving real-world problems using technology.`;

    return (
        <div style={{ backgroundColor: 'var(--color-bg)', minHeight: '100vh', color: 'var(--color-text)' }}>
            <Spotlight />
            <Header />
            <Hero backgroundImage={chapter1Img} aboutText={aboutContent} />

            <Section id="experience" title="Chapter 2: Engineer → Developer" backgroundImage={chapter2Img} align="right">
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'flex-end' }}>
                    {experience.map((exp, index) => (
                        <ExperienceCard key={index} {...exp} />
                    ))}
                </div>
            </Section>

            <Section id="cricket" title="Chapter 3: The Fast Bowler" backgroundImage={chapter3Img} justify="flex-end">
                <p style={{ fontSize: '1.2rem', color: '#e6ffe6', lineHeight: '1.8', textAlign: 'left', maxWidth: '800px' }}>
                    Cricket has always been a significant part of my life. Representing my college in ZONAL and INTER-ZONAL tournaments as a fast bowler taught me the value of perseverance, teamwork, and thinking under pressure. These lessons have seamlessly translated into my professional journey.
                </p>
            </Section>

            <Section id="projects" title="Chapter 4: Projects">
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'flex-start' }}>
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </Section>

            {/* <Section id="travel" title="Chapter 5: Travel Diaries" backgroundImage={chapter5Img}>
                <p style={{ fontSize: '1.2rem', color: '#e6ffe6', marginBottom: '2rem', lineHeight: '1.8', textAlign: 'left', maxWidth: '800px' }}>
                    Exploration is the engine of inspiration. Here are some of the places I've left my footprints.
                </p>
                <div style={{ width: '100%', maxWidth: '900px' }}>
                    <TravelTimeline />
                </div>
            </Section>*/}

            <Section id="contact" title="Get In Touch">
                <ContactForm />
            </Section>
        </div>
    );
};

export default Home;
