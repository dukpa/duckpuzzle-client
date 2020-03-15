/**
 * A page is essentially a main screen of a module.
 * It gets hosted in the main container of the app.
 */

import React from 'react';
import {Stack} from 'office-ui-fabric-react';

import {H1} from 'components/controls/headings';

export default function Home({
  title,
  children
}) {
    return (
      <Stack
        horizontalAlign="stretch"
      >
        <H1 text={title}></H1>
        {children}
      </Stack>
    )
  }