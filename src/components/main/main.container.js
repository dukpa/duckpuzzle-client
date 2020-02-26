import React from 'react'
import {connect} from 'react-redux'; 

import Dashboard from './main.view';
import {logout} from '../../services/authentication';

const mapState = (state) => {
  let {user} = state;
  return {
    user
  };
}

const mapDispatch = {
  onLogoutClick: logout
};

const DashboardContainer = (props) => {
  let {user, onLogoutClick} = props;
  return <Dashboard
    user={user}
    onLogoutClick={onLogoutClick}
  ></Dashboard>;
};

export default connect(mapState, mapDispatch)(Dashboard)