import React from 'react';
import { Page, Section } from 'components/controls/layout';
import ContactInfo from './contactinfo';

// import useNewRequest from './newrequest.hook';

export default function NewRequest(props) {
  // const {} = useNewRequest();
  return (
    <Page title="New Request">
      <Section title="Contact Information">
        <ContactInfo></ContactInfo>
      </Section>
    </Page>
  )
}