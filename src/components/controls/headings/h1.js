import React from 'react';
import {Text, FontSizes} from 'office-ui-fabric-react';

export default function H1({
  text
}) {
  return (
    <div style={{
      paddingTop: 20,
      paddingBottom: 20
    }}>
      <Text style={{
        fontSize: FontSizes.xxLarge
      }}>{text}</Text>
    </div>
  );
}