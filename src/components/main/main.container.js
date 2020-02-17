import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'; 

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
    useEffect(() => {
      props.loadUserInfo();
    }, []);
    return (<Dashboard user={props.user}></Dashboard>);
  }
)