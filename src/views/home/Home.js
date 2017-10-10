import React, { Component } from 'react';

import './home.css';

import Slider from '../../components/slider/Slider';
import CTA from '../../components/cta/CTA.js';

const Home = () => (
  <section className="home"> 
    <div className="container">
        <Slider />
      <div className="callsToAction table">
        <CTA type="about" destination="/aboutus/" />
        <CTA type="contact" destination="/contact/" />
        <CTA type="enroll" destination="/enroll/" />
      </div>
    </div>
  </section>
)

export default Home;
