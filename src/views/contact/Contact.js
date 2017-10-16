import React, { Component } from 'react';

import Banner from '../../components/banner/Banner.js';
import PageBreak from '../../components/pageBreak/PageBreak.js';
import Form from '../../components/forms/Forms.js';

import './contact.css';

const Contact = () => (
  <section className="about">
    <Banner imgSrc="contact_caduceus_usa_telemed.jpg" />
    <PageBreak heading="Telemed: Contact Us Today!!!" />
    <Form type="contact" />
  </section>
)

export default Contact;