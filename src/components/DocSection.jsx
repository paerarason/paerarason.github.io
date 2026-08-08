import React from 'react';

export const DocSection = ({ id, number, title, children }) => (
    <section id={id} className="doc-section">
        <h2 className="doc-heading">{number ? `${number}. ${title}` : title}</h2>
        {children}
    </section>
);

export const DocSubsection = ({ id, number, title, children }) => (
    <div id={id} className="doc-subsection">
        <h3 className="doc-subheading">{number} {title}</h3>
        {children}
    </div>
);

export default DocSection;
