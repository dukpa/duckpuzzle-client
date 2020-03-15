import React from 'react';
import {Text, FontSizes} from 'office-ui-fabric-react';

export default function H2({
  text
}) {
  return (
    <Text block style={{
      fontSize: FontSizes.xLarge,
      paddingBottom: 20
    }}>{text}</Text>
  );
}