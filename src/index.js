import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import { createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import './index.css';
import App from './App';
import store from './redux/store'

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path="/">
        <React.Fragment>
          <CssBaseline />
          <ThemeProvider theme={createMuiTheme()}>
            <App></App>
          </ThemeProvider>
        </React.Fragment>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);