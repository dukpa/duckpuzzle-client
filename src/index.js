import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './index.css';
import App from './App';
import store from './store'

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path="/">
        <App></App>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);