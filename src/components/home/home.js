import React from 'react';
import {Text, Stack, DefaultPalette, FontSizes} from 'office-ui-fabric-react';

import {H1, H2} from 'components/controls/headings';
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