import React from 'react';
import {Text} from 'office-ui-fabric-react';

import {Page, Section} from 'components/controls/layout';

// import useHome from './home.hook';

export default function Home(props) {
  // const {} = useHome();
  return (
    <Page
      title="Home"
    >
      <Section
        title="Some Content"
      >
        <Text>Some content goes in here. Probably going to be dashboards and whatnot.</Text>
      </Section>
    </Page>
  )
}