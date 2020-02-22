import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'; 
import {Redirect} from 'react-router-dom';

import Dashboard from './main.view';
import {loadUserInfo} from '../../services/user/user.reducer';

const mapState = (state) => {
  let {user} = state;
  return {
    user
  };
}

const mapDispatch = {
  loadUserInfo
};

export default connect(mapState, mapDispatch)(
  function(props) {
    let {user} = props;
    useEffect(() => {
      props.loadUserInfo();
    }, []);
    return (
      <React.Fragment>
        {user.name || (<Redirect to="/login" />)}
        <Dashboard user={props.user}></Dashboard>
      </React.Fragment>
    );
  }
)