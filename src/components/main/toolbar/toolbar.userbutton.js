import React, {useState} from 'react';
import {connect} from 'react-redux';

import { Persona, PersonaSize } from 'office-ui-fabric-react/lib/Persona';
import {IconButton} from 'office-ui-fabric-react/lib/Button';
import {ContextualMenu} from 'office-ui-fabric-react/lib/ContextualMenu';

import {logout} from '../../../services/authentication';

const buttonStyle = {height: 48, width: 48};

const mapState = (state) => {
  let {user} = state;
  return {
    user: {
      name: user.name
    }
  }
};

const mapDispatch = {
  logout
};

function UserButton({
  user,
  logout
}) {
  let [userMenuHidden, setUserMenuHidden] = useState(true);
  const showUserMenu = () => setUserMenuHidden(!userMenuHidden);
  const hideUserMenu = () => setUserMenuHidden(true);

  return (
    <React.Fragment>
      <IconButton
        className="user-menu-target"
        style={buttonStyle}
        title="Me"
        onClick={showUserMenu}
      >
        <Persona
          text={user ? user.name : ''}
          hidePersonaDetails={true}
          size={PersonaSize.size32}
        ></Persona>
      </IconButton>
      <ContextualMenu 
        target=".user-menu-target"
        hidden={userMenuHidden}
        items={[
          {
            key: 'userProfile',
            text: 'Profile',
            onClick: () => console.log('User Profile')
          },
          {
            key: 'logout',
            text: 'Logout',
            onClick: logout
          }
        ]}
        onItemClick={hideUserMenu}
        onDismiss={hideUserMenu}
      />
    </React.Fragment>
  );
}

export default connect(mapState, mapDispatch)(UserButton);