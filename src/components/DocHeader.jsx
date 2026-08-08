import React from 'react';

const DocHeader = () => {
    const issued = new Date().toLocaleString('en-US', { month: 'long', year: 'numeric' });

    return (
        <header className="doc-meta">
            <div className="doc-meta-columns">
                <div className="doc-meta-col">
                    <p className="doc-meta-line">Phone: <a href="tel:+917094894457">+91 7094894457</a></p>
                    <p className="doc-meta-line">Email: <a href="mailto:paerarason.dev@gmail.com">paerarason.dev@gmail.com</a></p>
                    <p className="doc-meta-line">GitHub: <a href="https://github.com/paerarason" target="_blank" rel="noopener noreferrer">github.com/paerarason</a></p>
                    <p className="doc-meta-line">LinkedIn: <a href="https://linkedin.com/in/paerarason" target="_blank" rel="noopener noreferrer">linkedin.com/in/paerarason</a></p>
                    <p className="doc-meta-line">URI: <a href="https://paerarason.in" target="_blank" rel="noopener noreferrer">paerarason.in</a></p>
                </div>

                <div className="doc-meta-col doc-meta-col-right">
                    <p className="doc-meta-line">Paerarason T</p>
                    <p className="doc-meta-line">Backend Developer</p>
                    <p className="doc-meta-line">Bengaluru, India</p>
                    <p className="doc-meta-line">{issued}</p>
                </div>
            </div>

            <div className="doc-title-block">
                <h1 className="doc-title">Paerarason T — Backend Developer</h1>
                <p className="doc-subtitle">A living record of experience, projects, and travel</p>
            </div>
        </header>
    );
};

export default DocHeader;
