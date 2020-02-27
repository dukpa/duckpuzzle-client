import React from 'react';
import {Stack} from 'office-ui-fabric-react/lib/Stack';
import {Image, ImageFit} from 'office-ui-fabric-react/lib/Image';
import { Persona, PersonaSize } from 'office-ui-fabric-react/lib/Persona';
import {IconButton} from 'office-ui-fabric-react/lib/Button';
import {DefaultPalette} from 'office-ui-fabric-react/';

const buttonStyle = {height: 48, width: 48};

export default function MainToolbar(props) {
  let {user} = props;

  return (
    <Stack
      style={{
        backgroundColor: DefaultPalette.neutralLighter,
        height: 48,
        paddingLeft: 16,
        paddingRight: 16
      }}
      horizontal={true}
      verticalAlign="center"
    >
      <Image src="duck-logo-text-32.svg" imageFit={ImageFit.none} height={40}></Image>
      <div style={{flex: 1}}></div>
      <IconButton style={buttonStyle} iconProps={{iconName: 'Settings'}} title="Settings"></IconButton>
      <IconButton style={buttonStyle} iconProps={{iconName: 'Help'}} title="Help"></IconButton>
      <IconButton style={buttonStyle} title="Me">
        <Persona text={user ? user.name : ''} hidePersonaDetails={true} size={PersonaSize.size32}></Persona>
      </IconButton>
    </Stack>
  );
}