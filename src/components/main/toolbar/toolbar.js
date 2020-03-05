import React from 'react';
import {Stack} from 'office-ui-fabric-react/lib/Stack';
import {Image, ImageFit} from 'office-ui-fabric-react/lib/Image';
import {IconButton} from 'office-ui-fabric-react/lib/Button';
import {DefaultPalette} from 'office-ui-fabric-react/';
import { Persona, PersonaSize } from 'office-ui-fabric-react/lib/Persona';
import {ContextualMenu} from 'office-ui-fabric-react/lib/ContextualMenu';

import { useUserMenu } from './toolbar.hooks';

const buttonStyle = {height: 48, width: 48};

export default function MainToolbar(props) {
  let userMenu = useUserMenu();

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
        onClick={userMenu.toggleShow}
      >
        <Persona
          text={userMenu.user.name}
          hidePersonaDetails={true}
          size={PersonaSize.size32}
        ></Persona>
      </IconButton>
      <ContextualMenu 
        target=".user-menu-target"
        hidden={userMenu.hidden}
        items={[
          {
            key: 'userProfile',
            text: 'Profile',
            onClick: () => console.log('User Profile')
          },
          {
            key: 'logout',
            text: 'Logout',
            onClick: userMenu.logout
          }
        ]}
        onItemClick={userMenu.hide}
        onDismiss={userMenu.hide}
      />
    </Stack>
  );
}