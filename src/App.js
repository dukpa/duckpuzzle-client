import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Login from './components/login/login.container';
import Main from './components/main/main.container'

function App() {
  return (
    <Switch>
      <Route path="/login">
        <Login></Login>
      </Route>
      <Route path="/">
        <Main></Main>
      </Route>
    </Switch>
  );
}

export default App;
