import React from 'react';
import { Nav } from 'office-ui-fabric-react/lib/Nav';
import { DefaultPalette } from 'office-ui-fabric-react';

export default function MainNav(props) {
  return (
    <Nav
      styles={{
        root: {
          width: 208,
          background: DefaultPalette.neutralLighterAlt,
          height: '100%',
          paddingLeft: 16
        }
      }}
      groups={[
        {
          links: [
            {
              name: 'Home'
            },
            {
              name: 'Some Category',
              links: [
                {
                  name: 'Some App'
                },
                {
                  name: 'Some Other App'
                }
              ],
            },
            {
              name: 'Some Other Category',
              links: [
                {
                  name: 'Some App'
                },
                {
                  name: 'Some Other App'
                }
              ],
            }
          ]
        }
      ]}
    />
  );
}