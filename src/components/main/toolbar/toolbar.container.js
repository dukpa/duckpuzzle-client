import React, {useState} from 'react';
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
  let [userMenuHidden, setUserMenuHidden] = useState(true);
  const showUserMenu = () => setUserMenuHidden(!userMenuHidden);
  const hideUserMenu = () => setUserMenuHidden(true);

  return (
    <Toolbar
      {...props}
      userMenuHidden={userMenuHidden}
      onUserButtonClick={showUserMenu}
      onUserMenuDismiss={hideUserMenu}
      onUserMenuItemClick={hideUserMenu}
    />
  );
}

export default connect(mapState)(ToolbarContainer);