import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import Login from './components/login/login.container';

function App() {
  return (
    <Switch>
      <Route path="/login">
        <Login></Login>
      </Route>
      <Route path="/">
        <Redirect to="/login"></Redirect>
      </Route>
    </Switch>
  );
}

export default App;
