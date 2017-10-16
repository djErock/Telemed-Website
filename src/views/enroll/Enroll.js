import React, { Component } from 'react';

import Banner from '../../components/banner/Banner.js';
import PageBreak from '../../components/pageBreak/PageBreak.js';
import Form from '../../components/forms/Forms.js';

import './enroll.css';

const Enroll = () => (
  <section className="about">
    <Banner imgSrc="enroll_caduceus_usa_telemed.jpg" />
    <PageBreak heading="Telemed: New Company Enrollment Form" />
    <Form type="enrollment" />
  </section>
)

export default Enroll;