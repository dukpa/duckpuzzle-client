import React, { useEffect, useState } from 'react';
import {connect} from 'react-redux';
import { Spinner, SpinnerSize } from 'office-ui-fabric-react/lib/Spinner';

import Login from './login';
import Main from './main'

import * as user from '../services/user';

const mapState = (state) => {
  let {authentication, user} = state;
  return {
    authenticated: authentication.authenticated,
    loading: user.loading,
    // failed: !user.received && !user.loading,
    userReceived: user.received
  };
}

const mapDispatch = {
  loadUserInfo: user.loadUserInfo
};

const App = (props) => {
  let {authenticated, loadUserInfo, loading, failed, userReceived} = props;

  let [first, setFirst] = useState(true);
  useEffect(() => {
    setTimeout(() => setFirst(false), 50)
  }, []);

  useEffect(() => {
    if (!userReceived) {
      loadUserInfo();
    }
  }, [authenticated]);

  useEffect(() => {
    window.addEventListener('unload', () => {
      // debugger;
    });
  }, []);
  
  let componentToRender;
  if (authenticated) {
    componentToRender = (<Main></Main>);
  } else if (loading || first) {
    componentToRender = (<Spinner style={{width:'100%'}} size={SpinnerSize.large} />);
  } else {
    componentToRender = (<Login></Login>);
  }

  return componentToRender;
}

export default connect(mapState, mapDispatch)(App);
