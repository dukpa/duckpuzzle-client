import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Login from './components/login/login.container';
import Dashboard from './components/main/main.container'

function App() {
  return (
    <Switch>
      <Route path="/login">
        <Login></Login>
      </Route>
      <Route path="/">
        <Dashboard></Dashboard>
      </Route>
    </Switch>
  );
}

export default App;
