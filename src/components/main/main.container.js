import React, {useEffect} from 'react'
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
    let {user, loadUserInfo} = props;

    useEffect(() => {
      loadUserInfo();
    }, [loadUserInfo]);

    return (
      <React.Fragment>
        <Dashboard user={props.user}></Dashboard>
      </React.Fragment>
    );
  }
)