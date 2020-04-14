import React from 'react';
import { 
  Stack, Text,
  DefaultButton, PrimaryButton,
  Spinner, SpinnerSize 
} from 'office-ui-fabric-react';
import { Page, Section } from 'components/controls/layout';
import ContactInfo from './contactinfo';
import InvoicingInfo from './invoicinginfo';
import Tests from './tests';

import useNewRequest from './newrequest.hook';

const buttonStyle= {
  width: 100
};

function renderView({
  request
}) {
  return (
    <Page title={`New Request # ${request.requestNo}`}>
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

function renderSpinner() {
  return (
    <Page>
      <Spinner
        style={{width:'100%'}}
        size={SpinnerSize.large}
        label="Creating new request"
      />
    </Page>
  )
}

export default function NewRequest(props) {
  const {
    request,
    loading
  } = useNewRequest();

  return (
    loading ?
      renderSpinner() :
      renderView({request})
  )
}