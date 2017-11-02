import React, { Component } from 'react';

import Banner from '../../components/banner/Banner.js';
import PageBreak from '../../components/pageBreak/PageBreak.js';
import PageContent from '../../components/pageContent/PageContent.js';

import './about.css';

const About = () => (
  <section className="about">
    <Banner imgSrc="about_caduceus_usa_telemed.jpg" />
    <PageBreak heading="Telemed: Remote locations using telecommunications technology" />
    <PageContent type="about"/>
  </section>
)

export default About;