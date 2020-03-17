import React from 'react';
import { Stack, Text, DefaultButton, PrimaryButton } from 'office-ui-fabric-react';
import { Page, Section } from 'components/controls/layout';
import ContactInfo from './contactinfo';
import InvoicingInfo from './invoicinginfo';
import Tests from './tests';

// import useNewRequest from './newrequest.hook';

const buttonStyle= {
  width: 100
};

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
        <Section title="Tests">
          <Tests />
        </Section>
        <Section title="Review">
          <Text>Review your order information before submitting</Text>
        </Section>

        <Stack
          horizontal
          tokens={{
            childrenGap: 20
          }}
          horizontalAlign="end"
        >
          <DefaultButton
            text="Discard"
            style={{buttonStyle}}
          />
          <DefaultButton
            text="Save"
            style={{buttonStyle}}
          />
          <PrimaryButton
            text="Submit"
            style={{buttonStyle}}
          />
        </Stack>
      </Stack>
    </Page>
  )
}