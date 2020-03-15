import React from 'react';
import { DefaultPalette } from 'office-ui-fabric-react/lib/Styling';
import {Stack} from 'office-ui-fabric-react/lib/Stack';

import MainToolbar from './toolbar';
import MainNav from './nav';
import MainContainer from './maincontainer';

export default function Dashboard(props) {
  return (
    <Stack 
      style={{
        backgroundColor: DefaultPalette.neutralLight,
        flex: 1
      }}
    >
      <MainToolbar></MainToolbar>
      <Stack
        horizontal={true}
        verticalAlign="stretch"
        grow={1}
      >
        <MainNav></MainNav>
        <MainContainer></MainContainer>
      </Stack>
    </Stack>
  )
}