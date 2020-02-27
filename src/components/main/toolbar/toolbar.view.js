import React from 'react';
import {Stack} from 'office-ui-fabric-react/lib/Stack';
import {Image, ImageFit} from 'office-ui-fabric-react/lib/Image';
import { Persona, PersonaSize } from 'office-ui-fabric-react/lib/Persona';
import {DefaultPalette} from 'office-ui-fabric-react/';

export default function MainToolbar(props) {
  let {user} = props;

  return (
    <Stack
      style={{
        backgroundColor: DefaultPalette.neutralLighter,
        padding: 4,
        paddingLeft: 50,
        paddingRight: 50,
        marginBottom: 2
      }}
      horizontal={true}
    >
      <Image src="duck-logo-text-48.svg" imageFit={ImageFit.none} height={48}></Image>
      <div style={{flex: 1}}></div>
      <Persona text={user ? user.name : ''} hidePersonaDetails={true} size={PersonaSize.size48}></Persona>
    </Stack>
  );
}