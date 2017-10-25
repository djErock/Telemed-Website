import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";

import { createStore, applyMiddleware, compose } from 'redux';
import { AppContainer } from 'react-hot-loader';

import App from './App';
import Store from './DataModel.js';

const appElement = document.getElementById('root');
const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={Store}>
        <Component />
      </Provider>
    </AppContainer>,
    appElement
  );
};

render(App);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./App', () => {
    render(App)
  });
}
