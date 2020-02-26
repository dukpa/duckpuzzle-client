import React from 'react'
import {connect} from 'react-redux'; 

import Dashboard from './main.view';
import {loadUserInfo} from '../../services/user';

const mapState = (state) => {
  let {user} = state;
  return {
    user
  };
}

const mapDispatch = {
};

const DashboardContainer = (props) => {
  let {user} = props;

  return (
    <React.Fragment>
      <Dashboard user={user}></Dashboard>
    </React.Fragment>
  );
};

export default connect(mapState, mapDispatch)(DashboardContainer)