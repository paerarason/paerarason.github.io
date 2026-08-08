import React from 'react';
import DocHeader from '../components/DocHeader';
import DocSection, { DocSubsection } from '../components/DocSection';

const Home = () => {
    const etherealGroups = [
        {
            name: 'API Development',
            bullets: [
                'Built and deployed a CRM module in Django for machine lifecycle management, improving internal team efficiency by 25%.',
                'Implemented Redis-based caching, reducing API response times from ~200ms to 50ms on frequently accessed endpoints.',
                'Designed and optimized a scalable database schema for CNC machine data, reducing query latency by 35% and enabling high-throughput real-time data flow.',
                'Engineered WebSocket communication to deliver real-time machine status updates with sub-second latency, supporting 500+ concurrent connections.',
                'Implemented Microsoft OAuth authentication and Swagger/OpenAPI documentation across all API implementations.'
            ]
        },
        {
            name: 'Data Collection Driver',
            bullets: [
                'Upgraded and streamlined the existing machine status collection code to better fit the backend architecture.',
                'Established an FTP workflow for programmers to transfer files from the NAS or backend server, based on the production schedule or on demand for NPD (New Product Development) machines.',
                'Enabled seamless FTP-based integration across the Driver → Backend → Frontend pipeline.',
                'Automated the SAP integration pipeline up to auto-assignment-level machine scheduling, cutting manual planning effort by 70%.',
                'Developed and integrated Django APIs with the InfluxDB time-series database, processing 10K+ machine events per day and improving monitoring reliability by 40%.'
            ]
        },
        {
            name: 'eSSL Device Driver',
            bullets: [
                'Designed and implemented a high-performance network daemon and custom device driver to interface with eSSL biometric hardware, establishing a centralized architecture to manage and synchronize fingerprint templates across a distributed factory network.',
                'Engineered a low-latency biometric authentication pipeline that securely validates factory-floor transactions in real time, using network socket programming to stream and process verification requests reliably.',
                'Optimized system fault-tolerance and uptime for the background service, ensuring continuous, tamper-proof logging and multi-point authentication for critical operational files and machinery logs.'
            ]
        },
        {
            name: 'Database Migration',
            bullets: [
                'Migrated 2 billion rows from InfluxDB to ClickHouse, restructuring the dataset into an event-based model and achieving a 93% compression ratio versus the original volume.',
                'Migrated the historical data pipeline from InfluxDB to PostgreSQL using an ETL model, accelerating REST API responses by 10x.',
                'Automated anomaly detection and reporting with Python-based data-processing workflows, triggering detailed email alerts via Azure Outlook and reducing downtime by 15%.',
                'Developed a shortlisting script for first-level candidate screening based on required technical skills, reducing recruiter manual effort by 60%.'
            ]
        },
        {
            name: 'External Integration',
            bullets: [
                'Built a QR-code sticker system — required across the manufacturing process, from material identification to shipment — generated directly from SAP production order details or invoices.',
                'Made the system robust enough to track which material belongs to whom and at what stage of the manufacturing process.',
                'Integrated the QR generation system with TSC industrial sticker printers (multiple models) using TSPL commands over TCP sockets, falling back to a Samba client connection for printers without Ethernet connectivity.'
            ]
        },
        {
            name: 'Deployment Scripting (CI/CD)',
            bullets: [
                'Built a GitLab webhook-triggered deployment pipeline that runs the build and test procedures on the server automatically.',
                'Restarted the relevant PM2 process to apply changes as part of the deployment flow.'
            ]
        }
    ];

    const advertyzementBullets = [
        'Spearheaded transition from monolithic to microservices architecture, improving scalability and performance of core services while reducing deployment time by 40%.',
        'Designed and implemented a robust Notification Microservice (email, SMS, WhatsApp) with a queuing mechanism, ensuring non-blocking delivery and supporting 50K+ daily notifications without bottlenecks.',
        'Integrated Firebase Cloud Messaging (FCM) into the Notification service, enabling real-time push updates across multiple platforms.',
        'Resolved high-impact issues in the File Management Microservice, optimizing file upload/download workflows and reducing error rates by 30%.',
        'Developed an internal SDK for the Notification Microservice to simplify adoption across teams, increasing developer productivity and promoting consistent usage.',
        'Collaborated on the CI/CD pipeline with GitLab, streamlining automated deployments and improving release frequency.',
        'Optimized microservice communication and scaling using Docker & AWS (EC2, RDS), enabling cost-efficient horizontal scaling.'
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

    const travelWaypoints = [
        'Ooty — April 2022',
        'Wayanad — April 2023',
        'Munnar — May 2024',
        'Coorg — September 2025 (planned)'
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
                    <li><a href="#introduction">1. Introduction</a></li>
                    <li><a href="#experience">2. Professional Experience</a></li>
                    <li className="doc-toc-sub"><a href="#exp-ethereal">2.1 Ethereal Machines</a></li>
                    <li className="doc-toc-sub"><a href="#exp-advertyzement">2.2 Advertyzement</a></li>
                    <li><a href="#education">3. Education</a></li>
                    <li><a href="#book-knowledge">4. Book Knowledge</a></li>
                    <li><a href="#certifications">5. Certifications</a></li>
                    <li><a href="#key-skills">6. Key Skills</a></li>
                    <li><a href="#interests">7. Personal Interests</a></li>
                    <li><a href="#travel">8. Travel and Field Notes</a></li>
                    <li><a href="#contact">9. Author's Address</a></li>
                </ul>
            </nav>

            <DocSection id="introduction" number="1" title="Introduction">
                <p>
                    Born with an innate curiosity for technology, my story begins in the classrooms of the Madras
                    Institute of Technology. Here, I not only honed my skills in Production Engineering but also
                    discovered my passion for solving real-world problems using technology.
                </p>
            </DocSection>

            <DocSection id="experience" number="2" title="Professional Experience">
                <DocSubsection id="exp-ethereal" number="2.1" title="Ethereal Machines — Backend Developer (Feb 2024 – Present)">
                    {etherealGroups.map((group, index) => (
                        <div key={index} className="doc-subgroup">
                            <p className="doc-subgroup-title">{group.name}</p>
                            <ul className="doc-list">
                                {group.bullets.map((bullet, i) => (
                                    <li key={i}>{bullet}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </DocSubsection>

                <DocSubsection id="exp-advertyzement" number="2.2" title="Advertyzement — Backend Developer (Aug 2022 – Oct 2023)">
                    <ul className="doc-list">
                        {advertyzementBullets.map((bullet, index) => (
                            <li key={index}>{bullet}</li>
                        ))}
                    </ul>
                </DocSubsection>

                <p className="doc-note"><em>Additional field notes and reflections from these roles will be added here over time.</em></p>
            </DocSection>

            <DocSection id="education" number="3" title="Education">
                <p>
                    <strong>Bachelor's in Production Engineering</strong> — Madras Institute of Technology, Anna
                    University (08/2018 – 06/2022)
                </p>
                <p className="doc-tech-line">CGPA: 7.78/10</p>
            </DocSection>

            <DocSection id="book-knowledge" number="4" title="Book Knowledge">
                <ul className="doc-list">
                    {bookKnowledge.map((book, index) => (
                        <li key={index}>{book}</li>
                    ))}
                </ul>
            </DocSection>

            <DocSection id="certifications" number="5" title="Certifications">
                <ul className="doc-list">
                    {certifications.map((cert, index) => (
                        <li key={index}>
                            <strong>{cert.title}</strong> — {cert.description}{' '}
                            <span className="doc-tech-inline">(Focus: {cert.techStack.join(', ')})</span>
                        </li>
                    ))}
                </ul>
            </DocSection>

            <DocSection id="key-skills" number="6" title="Key Skills">
                <ul className="doc-list">
                    {keySkills.map((group, index) => (
                        <li key={index}><strong>{group.category}:</strong> {group.items.join(', ')}</li>
                    ))}
                </ul>
            </DocSection>

            <DocSection id="interests" number="7" title="Personal Interests">
                <p>
                    Cricket has always been a significant part of my life. Representing my college in ZONAL and
                    INTER-ZONAL tournaments as a left-arm fast bowler taught me the value of perseverance, teamwork,
                    and thinking under pressure — lessons that have seamlessly translated into my professional
                    journey.
                </p>
            </DocSection>

            <DocSection id="travel" number="8" title="Travel and Field Notes">
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
                <p className="doc-note"><em>Full stories for each trip will be added here over time.</em></p>
            </DocSection>

            <DocSection id="contact" number="9" title="Author's Address">
                <pre className="doc-address">
                    {'   Paerarason T\n   Bengaluru, India\n\n   Phone:    '}
                    <a href="tel:+917094894457">+91 7094894457</a>
                    {'\n   Email:    '}
                    <a href="mailto:paerarason.dev@gmail.com">paerarason.dev@gmail.com</a>
                    {'\n   GitHub:   '}
                    <a href="https://github.com/paerarason" target="_blank" rel="noopener noreferrer">github.com/paerarason</a>
                    {'\n   LinkedIn: '}
                    <a href="https://linkedin.com/in/paerarason" target="_blank" rel="noopener noreferrer">linkedin.com/in/paerarason</a>
                    {'\n   URI:      '}
                    <a href="https://paerarason.in" target="_blank" rel="noopener noreferrer">paerarason.in</a>
                </pre>
            </DocSection>

            <footer className="doc-footer">
                <p>&copy; {new Date().getFullYear()} Paerarason T — Informational — Personal Portfolio Document</p>
            </footer>
        </div>
    );
};

export default Home;
