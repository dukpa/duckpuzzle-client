import React from 'react';
import { Page, Section } from 'components/controls/layout';
import ContactInfo from './contactinfo';
import InvoicingInfo from './invoicinginfo';
import { Stack } from 'office-ui-fabric-react';

// import useNewRequest from './newrequest.hook';

export default function NewRequest(props) {
  // const {} = useNewRequest();
  return (
    <Page title="New Request">
      <Stack tokens={{childrenGap: 40}}>
        <Section title="Contact">
          <ContactInfo />
        </Section>
        <Section title="Invoicing">
          <InvoicingInfo />
        </Section>
      </Stack>
    </Page>
  )
}