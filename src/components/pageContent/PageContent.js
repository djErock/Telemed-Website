import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './pageContent.css';

class PageContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div className="container pageContent">
      <ul>
        <li>24/7/365 access to Caduceus MDs (patent pending)</li>
        <li>Works like a “Face Time” or "Hang Out"</li>
        <li>It is for Treatment; not triage</li>
        <li>Includes drug testing, prescriptions, labs, x-rays and physical therapy (if needed)</li>
        <li>Visit Result: immediate email with the ICD-10 diagnosis, office visit notes, work restrictions, and follow up (if required)</li>
        <li>Complicated visits get referred to a Caduceus Exams medical facility, or a local Clinic of your choosing</li>
      </ul>
    </div>
        );
    }
};

export default PageContent;