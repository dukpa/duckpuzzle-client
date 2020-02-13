import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import { createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import {orange, blue, green, red} from '@material-ui/core/colors';
import './index.css';
import App from './App';
import store from './store'

let theme = createMuiTheme({
  palette: {
    warning: {
      light: orange[300],
      main: orange[500],
      dark: orange[700],
    },
    info: {
      light: blue[300],
      main: blue[500],
      dark: blue[700],
    },
    success: {
      light: green[300],
      main: green[500],
      dark: green[700],
    }
  }
});

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path="/">
        <React.Fragment>
          <CssBaseline />
          <ThemeProvider theme={theme}>
            <App></App>
          </ThemeProvider>
        </React.Fragment>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);