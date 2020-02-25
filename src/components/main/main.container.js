import React from 'react'
import {connect} from 'react-redux'; 

import Dashboard from './main.view';

const mapState = (state) => {
  let {user} = state;
  return {
    user
  };
}

const mapDispatch = {
};

export default connect(mapState, mapDispatch)(
  function(props) {
    let {user} = props;

    return (
      <React.Fragment>
        <Dashboard user={user}></Dashboard>
      </React.Fragment>
    );
  }
)