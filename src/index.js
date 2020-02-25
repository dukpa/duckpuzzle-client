import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom'
import { initializeIcons } from '@uifabric/icons';

import './index.css';
import App from './components/App';
import store from './store'

initializeIcons();

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App></App>
    </Router>
  </Provider>,
  document.getElementById('root')
);