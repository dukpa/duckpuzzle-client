import React, { useEffect } from 'react';
import {Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux';

import Login from './login/login.container';
import Main from './main/main.container'

import {checkJwtStorage} from '../services/authentication/authentication.reducer';

const mapState = (state) => {
  let {authentication} = state;
  return {
    authenticated: authentication.authenticated
  };
}

const mapDispatch = {
  checkJwtStorage
};

function App(props) {
  let {authenticated, checkJwtStorage} = props;

  useEffect(() => {
    checkJwtStorage();
  }, []);

  return (
    <React.Fragment>
      { authenticated ? (<Main></Main>) : (<Login></Login>)}
    </React.Fragment>
  );
}

export default connect(mapState, mapDispatch)(App);
