import React from 'react';
import DocHeader from '../components/DocHeader';
import DocSection, { DocSubsection } from '../components/DocSection';

const Home = () => {
    const etherealHighlights = [
        'Migrated 2 billion rows from InfluxDB to ClickHouse, restructuring the dataset into an event-based model and achieving a 93% compression ratio.',
        'Built and deployed a CRM module in Django for machine lifecycle management, improving internal team efficiency by 25%.',
        'Engineered WebSocket communication for real-time machine status updates, supporting 500+ concurrent connections.',
        'Designed a biometric authentication pipeline and custom device driver (eSSL) to secure factory-floor operations.',
        'Automated SAP integration for machine scheduling and built a QR-code system for tracking materials through manufacturing.'
    ];

    const advertyzementHighlights = [
        'Led the transition from a monolithic to microservices architecture, reducing deployment time by 40%.',
        'Built a Notification microservice (email, SMS, WhatsApp, FCM push) supporting 50K+ daily notifications, plus an internal SDK adopted by other teams.',
        'Resolved critical issues in the File Management microservice, reducing error rates by 30%.'
    ];

    const bookKnowledge = [
        'Operating Systems: Three Easy Pieces',
        'Designing Data-Intensive Applications',
        'Database Internals'
    ];

    const certifications = [
        {
            title: 'APIs (Django)',
            description: 'Built basic REST APIs and data backbones for web apps using Django; explored emerging API technologies and practices.',
            techStack: ['Django', 'REST APIs']
        },
        {
            title: 'Microservices & Serverless',
            description: 'Studied microservices and serverless architectures — core technologies for cloud-native and modernized application workloads.',
            techStack: ['Microservices', 'Serverless', 'Cloud']
        },
        {
            title: 'Rust & WebAssembly',
            description: 'Learned Rust fundamentals hands-on and used them to build small WebAssembly-powered applications.',
            techStack: ['Rust', 'WebAssembly']
        }
    ];

    const keySkills = [
        { category: 'Backend', items: ['Python', 'C++', 'Django', 'FastAPI'] },
        { category: 'Databases', items: ['PostgreSQL', 'Redis', 'InfluxDB', 'ClickHouse'] },
        { category: 'Messaging', items: ['RabbitMQ', 'Celery', 'WebSockets'] },
        { category: 'DevOps', items: ['Docker', 'Kubernetes', 'AWS (EC2, RDS, S3)', 'GitLab CI/CD', 'Nginx'] },
        { category: 'System Design', items: ['Microservices', 'Event-driven Architecture', 'Caching', 'Scalability', 'Distributed Systems', 'Shell Scripting'] }
    ];

    const songs = ['Jaalakaari & Vizhi Veekura', 'Aasa Kooda', 'Pavazha Malli'];

    const travelWaypoints = [
        'Ooty — April 2022',
        'Wayanad — April 2023',
        'Munnar — May 2024',
        'Coorg — September 2025'
    ];

    return (
        <div className="doc-container">
            <DocHeader />

            <div className="doc-frontmatter">
                <p className="doc-frontmatter-title">Abstract</p>
                <p>
                    Backend developer with 3+ years of experience building scalable systems in Python and C++.
                    I specialize in real-time data pipelines, microservices, and Linux-based applications. Proficient
                    in Django, FastAPI, PostgreSQL, ClickHouse, and Docker, with hands-on experience in WebSockets,
                    Kubernetes, and GTK3. I enjoy solving system-level challenges and optimizing backend workflows
                    for performance and reliability.
                </p>
            </div>

            <div className="doc-frontmatter">
                <p className="doc-frontmatter-title">Status of This Document</p>
                <p>
                    This is a living personal document, not a formal specification. It describes the professional
                    experience, projects, and background of the author, and is updated periodically as new work,
                    travel, and field notes are added. The latest version is always available at{' '}
                    <a href="https://paerarason.in" target="_blank" rel="noopener noreferrer">paerarason.in</a>.
                </p>
            </div>

            <nav className="doc-frontmatter" aria-label="Table of Contents">
                <p className="doc-frontmatter-title">Table of Contents</p>
                <ul className="doc-toc-list">
                    <li><a href="#spotify-playlist">1. My Spotify Playlist</a></li>
                    <li><a href="#travel">2. Travel and Field Notes</a></li>
                    <li><a href="#introduction">3. Motivation</a></li>
                    <li><a href="#education">4. Education</a></li>
                    <li><a href="#book-knowledge">5. Book Knowledge</a></li>
                    <li><a href="#certifications">6. Certifications</a></li>
                    <li><a href="#key-skills">7. Key Skills</a></li>
                    <li><a href="#interests">8. Personal Interests</a></li>
                    <li><a href="#experience">9. Professional Experience</a></li>
                    <li className="doc-toc-sub"><a href="#exp-ethereal">9.1 Ethereal Machines</a></li>
                    <li className="doc-toc-sub"><a href="#exp-advertyzement">9.2 Advertyzement</a></li>
                    <li><a href="#contact">10. Author's Address</a></li>
                </ul>
            </nav>

            <DocSection id="spotify-playlist" number="1" title="My Spotify Playlist">
                <p>
                    A running playlist of songs on repeat lately —{' '}
                    <a href="https://open.spotify.com/playlist/2zbsf0wgUkzKQUMHF1gXKY" target="_blank" rel="noopener noreferrer">
                        listen on Spotify
                    </a>.
                </p>
                <ol className="doc-list doc-list--ranked">
                    {songs.map((song, index) => (
                        <li key={index}>{song}</li>
                    ))}
                </ol>
            </DocSection>

            <DocSection id="travel" number="2" title="Travel and Field Notes">
                <p>
                    This section is reserved for travel stories and field notes, added as new journeys are
                    documented. Known waypoints so far:
                </p>
                <ul className="doc-list">
                    {travelWaypoints.map((entry, index) => (
                        <li key={index}>{entry}</li>
                    ))}
                    <li><em>[ more entries to come ]</em></li>
                </ul>
            </DocSection>

            <DocSection id="introduction" number="3" title="Motivation">
                <p>
                    Born with an innate curiosity for technology, my story begins in the classrooms of the Madras
                    Institute of Technology. Here, I not only honed my skills in Production Engineering but also
                    discovered my passion for solving real-world problems using technology.
                </p>
            </DocSection>

            <DocSection id="education" number="4" title="Education">
                <p>
                    <strong>Bachelor's in Production Engineering</strong> — Madras Institute of Technology, Anna
                    University (08/2018 – 06/2022)
                </p>
                <p className="doc-tech-line">CGPA: 7.78/10</p>
            </DocSection>

            <DocSection id="book-knowledge" number="5" title="Book Knowledge">
                <ul className="doc-list">
                    {bookKnowledge.map((book, index) => (
                        <li key={index}>{book}</li>
                    ))}
                </ul>
            </DocSection>

            <DocSection id="certifications" number="6" title="Certifications">
                <ul className="doc-list">
                    {certifications.map((cert, index) => (
                        <li key={index}>
                            <strong>{cert.title}</strong> — {cert.description}{' '}
                            <span className="doc-tech-inline">(Focus: {cert.techStack.join(', ')})</span>
                        </li>
                    ))}
                </ul>
            </DocSection>

            <DocSection id="key-skills" number="7" title="Key Skills">
                <ul className="doc-list">
                    {keySkills.map((group, index) => (
                        <li key={index}><strong>{group.category}:</strong> {group.items.join(', ')}</li>
                    ))}
                </ul>
            </DocSection>

            <DocSection id="interests" number="8" title="Personal Interests">
                <p>
                    Cricket has always been a significant part of my life. Representing my college in ZONAL and
                    INTER-ZONAL tournaments as a left-arm fast bowler taught me the value of perseverance, teamwork,
                    and thinking under pressure — lessons that have seamlessly translated into my professional
                    journey.
                </p>
            </DocSection>

            <DocSection id="experience" number="9" title="Professional Experience">
                <DocSubsection id="exp-ethereal" number="9.1" title="Ethereal Machines — Backend Developer (Feb 2024 – Present)">
                    <p className="doc-narrative">
                        Joining Ethereal Machines meant stepping into systems that talk to real machines on a
                        factory floor — not just APIs on a screen, but code that has to survive flaky networks,
                        hardware quirks, and the occasional late-night page when a CNC line goes quiet. Migrating
                        two billion rows into ClickHouse, wiring up a biometric device driver from scratch, chasing
                        down FTP handshakes with printers that refuse to behave — these weren't things I set out to
                        become an expert in, but the job kept handing me specific, weird problems, and solving them
                        one at a time is basically the story of how I grew here.
                    </p>
                    <ul className="doc-list">
                        {etherealHighlights.map((bullet, index) => (
                            <li key={index}>{bullet}</li>
                        ))}
                    </ul>
                </DocSubsection>

                <DocSubsection id="exp-advertyzement" number="9.2" title="Advertyzement — Backend Developer (Aug 2022 – Oct 2023)">
                    <p className="doc-narrative">
                        This was my first real taste of building things that had to survive contact with other
                        teams, not just other services. Tearing apart a monolith into microservices taught me less
                        about architecture diagrams and more about communication — every service boundary is really
                        a conversation about who owns what. Building the Notification service end-to-end, including
                        an SDK other engineers actually used, is still one of the things I'm proudest of from that
                        time: it's one thing to write code, another to hand it to someone else and have it just work
                        for them.
                    </p>
                    <ul className="doc-list">
                        {advertyzementHighlights.map((bullet, index) => (
                            <li key={index}>{bullet}</li>
                        ))}
                    </ul>
                </DocSubsection>

                <p className="doc-note"><em>Additional field notes and reflections from these roles will be added here over time.</em></p>
            </DocSection>

            <DocSection id="contact" number="10" title="Author's Address">
                <pre className="doc-address">
                    {'   Paerarason T\n   Bengaluru, India\n\n   Phone:    '}
                    <a href="tel:+917094894457">+91 7094894457</a>
                    {'\n   Email:    '}
                    <a href="mailto:paerarason.dev@gmail.com">paerarason.dev@gmail.com</a>
                    {'\n   GitHub:   '}
                    <a href="https://github.com/paerarason" target="_blank" rel="noopener noreferrer">github.com/paerarason</a>
                    {'\n   LinkedIn: '}
                    <a href="https://linkedin.com/in/paerarason" target="_blank" rel="noopener noreferrer">linkedin.com/in/paerarason</a>
                </pre>
            </DocSection>

            <footer className="doc-footer">
                <p>&copy; {new Date().getFullYear()} Paerarason T — Informational — Personal Portfolio Document</p>
            </footer>
        </div>
    );
};

export default Home;
