import React from 'react';
import { DefaultPalette } from 'office-ui-fabric-react/lib/Styling';

import MainToolbar from './toolbar';

export default function Dashboard(props) {
  let {onLogoutClick} = props;

  return (
    <div style={{
      backgroundColor: DefaultPalette.neutralLight,
      flex: 1
    }}>
      <MainToolbar></MainToolbar>
    </div>
  )
}