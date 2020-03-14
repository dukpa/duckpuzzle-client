import React from 'react';
import { Nav } from 'office-ui-fabric-react/lib/Nav';
import { DefaultPalette } from 'office-ui-fabric-react';
import useNav from './nav.hooks';

export default function MainNav() {
  const {
    requestsExpanded,
    navigate
  } = useNav();
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
      onLinkClick={navigate}
      groups={[
        {
          links: [
            {
              name: 'Home',
              key: '/home'
            },
            {
              name: 'New Request',
              key: '/requests/new'
            },
            {
              name: 'Requests',
              isExpanded: requestsExpanded,
              key: '/requests',
              links: [
                {
                  name: 'All',
                  key: '/requests/all'
                },
                {
                  name: 'Draft',
                  key: '/requests/draft'
                },
                {
                  name: 'In Progress',
                  key: '/requests/progress'
                },
                {
                  name: 'Fulfilled',
                  key: '/requests/fulfilled'
                }
              ]
            },
            {
              name: 'Reports',
              key: '/reports'
            }
          ]
        }
      ]}
    />
  );
}