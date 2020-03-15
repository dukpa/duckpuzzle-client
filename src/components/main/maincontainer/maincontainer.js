import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from 'components/home';
import NewRequest from 'components/newrequest';
import Requests from 'components/requests';
import Reports from 'components/reports';
// import useMainContainer from './maincontainer.hook';

export default function MainContainer(props) {
    // const {} = useMainContainer();
    return (
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/requests/new">
          <NewRequest></NewRequest>
        </Route>
        <Route path="/requests">
          <Requests></Requests>
        </Route>
        <Route path="/reports">
          <Reports></Reports>
        </Route>
      </Switch>
    )
  }