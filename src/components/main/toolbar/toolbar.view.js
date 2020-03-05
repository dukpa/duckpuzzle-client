import React from 'react';
import {Stack} from 'office-ui-fabric-react/lib/Stack';
import {Image, ImageFit} from 'office-ui-fabric-react/lib/Image';
import { Persona, PersonaSize } from 'office-ui-fabric-react/lib/Persona';
import {IconButton} from 'office-ui-fabric-react/lib/Button';
import {ContextualMenu} from 'office-ui-fabric-react/lib/ContextualMenu';
import {DefaultPalette} from 'office-ui-fabric-react/';

const buttonStyle = {height: 48, width: 48};

export default function MainToolbar(props) {
  let {
    user,
    userMenuHidden,
    onUserButtonClick,
    onUserMenuDismiss,
    onUserMenuItemClick,
    onLogoutClick
  } = props;

  return (
    <Stack
      style={{
        backgroundColor: DefaultPalette.neutralLighterAlt,
        height: 48,
        paddingLeft: 16,
        paddingRight: 16
      }}
      horizontal={true}
      verticalAlign="center"
    >
      <Image
        src="duck-logo-text-32.svg"
        imageFit={ImageFit.none}
        height={40}
      ></Image>
      <div style={{flex: 1}}></div>
      <IconButton
        style={buttonStyle}
        iconProps={{iconName: 'Settings'}}
        title="Settings"
      ></IconButton>
      <IconButton
        style={buttonStyle}
        iconProps={{iconName: 'Help'}}
        title="Help"
      ></IconButton>
      <IconButton
        className="user-menu-target"
        style={buttonStyle}
        title="Me"
        onClick={onUserButtonClick}
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
            onClick: onLogoutClick
          }
        ]}
        onItemClick={onUserMenuDismiss}
        onDismiss={onUserMenuItemClick}
      />
    </Stack>
  );
}