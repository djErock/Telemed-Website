import React from 'react';
import { AnimatedSwitch } from 'react-router-transition';
import { BrowserRouter, Route } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group'

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

const TransitionedPage = (WrappedComponent) => {
  const TransitionedComponent = (props) => (
    <CSSTransitionGroup
      transitionAppear={true}
      transitionAppearTimeout={600}
      transitionEnterTimeout={600}
      transitionLeaveTimeout={200}
      transitionName="switch-route">
      <WrappedComponent {...props} />
    </CSSTransitionGroup>
  );
  return TransitionedComponent;
};

const App = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Route exact path="/" component={TransitionedPage(Home)} />
      <Route path="/aboutus/" component={TransitionedPage(About)} />
      <Route path="/contact/" component={TransitionedPage(Contact)} />
      <Route path="/enroll/" component={TransitionedPage(Enroll)} />
      <Footer />
    </div>
  </BrowserRouter >
);

export default App;
