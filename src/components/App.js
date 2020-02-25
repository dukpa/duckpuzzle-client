import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import { Spinner, SpinnerSize } from 'office-ui-fabric-react/lib/Spinner';

import Login from './login/login.container';
import Main from './main/main.container'

import {loadUserInfo} from '../services/user/user.reducer';

const mainSpinner = (<Spinner style={{width:'100%'}} size={SpinnerSize.large} />);

const mapState = (state) => {
  let {authentication, user} = state;
  return {
    authenticated: authentication.authenticated,
    loading: user.loading,
    loaded: user.received
  };
}

const mapDispatch = {
  loadUserInfo
};

function App(props) {
  let {authenticated, loadUserInfo, loading, loaded} = props;

  useEffect(() => {
    loadUserInfo();
  }, [loadUserInfo]);

  let componentToRender;
  if (authenticated) {
    componentToRender = (<Main></Main>);
  } else if (loading) {
    componentToRender = mainSpinner;
  } else if (loaded) {
    componentToRender = (<Login></Login>);
  }

  return (
    <React.Fragment>
      {componentToRender}
    </React.Fragment>
  );
}

export default connect(mapState, mapDispatch)(App);
