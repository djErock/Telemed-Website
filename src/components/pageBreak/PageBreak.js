import React, { Component } from 'react';

import './pageBreak.css';

const PageBreak = (props) => (
    <article className="pageBreak">
        <div className="container">
            <h2>{props.heading}</h2>
        </div>
    </article>
)

export default PageBreak;