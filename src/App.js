import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import mainBG from './img/corpWhiteBG_wash.jpg';

import './css/reset.css';
import './css/global.css';
import './css/structure.css';

import Header from './components/header/Header';
import Home from './views/home/Home';
import Footer from './components/footer/Footer';


const App = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Route exact path="/" component={Home} />
      <Footer />
    </div>
  </BrowserRouter>
);

export default App;
