import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import mainBG from './img/corpWhiteBG_wash.jpg';

import './css/reset.css';
import './css/global.css';
import './css/structure.css';

import Header from './components/header/Header';
import Home from './views/home/Home';
import About from './views/about/About';
import Enroll from './views/enroll/Enroll';
import Contact from './views/contact/Contact';
import Footer from './components/footer/Footer';


const App = () => (
  <BrowserRouter>
    <div>
      <Header />
        <Route exact path="/" component={Home} />
        <Route path="/aboutus/" component={About} />
        <Route path="/contact/" component={Contact} />
        <Route path="/enroll/" component={Enroll} />
      <Footer />
    </div>
  </BrowserRouter>
);

export default App;
