import React, { Component } from 'react';

import './home.css';

import Slider from '../../components/slider/Slider';
import CTA from '../../components/cta/CTA.js';
import PageBreak from '../../components/pageBreak/PageBreak.js';
import Chart from '../../components/chart/Chart.js';

const Home = () => (
  <section className="home">
    <Slider />
    <div className="container callsToAction table">
      <CTA type="about" destination="/aboutus/" />
      <CTA type="contact" destination="/contact/" />
      <CTA type="enroll" destination="/enroll/" />
    </div>
    <PageBreak heading="Telemed: Return on Investment" />
    <div className="container callsToAction table">
      <Chart type="roi" />
    </div>
  </section>
)

export default Home;
