import React from 'react';
import { createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import Login from './components/login/LoginController';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <ThemeProvider theme={createMuiTheme()}>
        <Login></Login>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
