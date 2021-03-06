import React from 'react';
import { Stack, TextField, ComboBox, DefaultButton, PrimaryButton, Checkbox } from 'office-ui-fabric-react';

// import useInvoicingInfo from './invoicinginfo.hook';

const fieldStyle = {
  flex: 1
};

const buttonStyle= {
  width: 100
};

export default function InvoicingInfo(props) {
  // const {} = useInvoicingInfo();
  return (
    <Stack
      tokens={{
        childrenGap: 20
      }}
    >
      <Checkbox label="Same as Reporting"></Checkbox>
      <Stack
        horizontal
        tokens={{
          childrenGap: 20
        }}
      >
        <ComboBox
          label="Client"
          style={fieldStyle}
        />
        <ComboBox
          label="Contact"
          style={fieldStyle}
        />
      </Stack>
      <TextField
        label="Address"
        style={fieldStyle}
      />
      <TextField
        label="Address Line 2"
        style={fieldStyle}
      />
      <Stack
        horizontal
        tokens={{
          childrenGap: 20
        }}
      >
        <Stack.Item
          grow={1}
        >
          <TextField
            label="City"
            style={fieldStyle}
          />
        </Stack.Item>
        <Stack.Item
          grow={1}
        >
          <TextField
            label="State"
            style={fieldStyle}
          />
        </Stack.Item>
        <Stack.Item
          grow={1}
        >
          <TextField
            label="Zip"
            style={fieldStyle}
          />
        </Stack.Item>
      </Stack>
      <Stack
        horizontal
        tokens={{
          childrenGap: 20
        }}
      >
        <Stack.Item
          grow={1}
        >
          <TextField
            label="Phone"
            style={fieldStyle}
          />
        </Stack.Item>
        <Stack.Item
          grow={1}
        >
          <TextField
            label="Email"
            style={fieldStyle}
          />
        </Stack.Item>
      </Stack>
      <Stack
        horizontal
        style={{paddingTop: 20}}
        tokens={{
          childrenGap: 20
        }}
        horizontalAlign="end"
      >
        <DefaultButton
          text="Cancel"
          style={buttonStyle}
        />
        <PrimaryButton
          text="Continue"
          style={buttonStyle}
        />
      </Stack>
    </Stack>
  )
}