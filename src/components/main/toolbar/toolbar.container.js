import React from 'react';
import {connect} from 'react-redux';

import Toolbar from './toolbar.view';

const mapState = (state) => {
  let {user} = state;
  return {
    user: {
      name: user.name
    }
  }
};

function ToolbarContainer(props) {
  let {user} = props;
  return (
    <Toolbar user={user}></Toolbar>
  );
}

export default connect(mapState)(ToolbarContainer);