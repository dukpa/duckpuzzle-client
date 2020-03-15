/**
 * A section is a container of content
 */

import React from 'react';
import {DefaultPalette} from 'office-ui-fabric-react';

import {H2} from 'components/controls/headings';

export default function Section({
  title,
  children
}) {
  return (
    <div style={{
      backgroundColor: DefaultPalette.white,
      padding: 28
    }}>
      {title ? <H2 text={title}></H2> : null}
      {children}
    </div>
  );
}