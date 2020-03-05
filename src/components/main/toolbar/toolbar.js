import React from 'react';
import {Stack} from 'office-ui-fabric-react/lib/Stack';
import {Image, ImageFit} from 'office-ui-fabric-react/lib/Image';
import {IconButton} from 'office-ui-fabric-react/lib/Button';
import {DefaultPalette} from 'office-ui-fabric-react/';

import UserButton from './toolbar.userbutton';

const buttonStyle = {height: 48, width: 48};

export default function MainToolbar(props) {
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
      <UserButton />
    </Stack>
  );
}