import React from 'react';
import { Stack, TextField, ComboBox, DefaultButton, PrimaryButton, ChoiceGroup, Label, Icon, DefaultPalette } from 'office-ui-fabric-react';

// import useTests from './tests.hook';

const buttonStyle= {
  width: 200
};

export default function Tests(props) {
  // const {} = useTests();
  return (
    <Stack
      tokens={{
        childrenGap: 20
      }}
    >
      <TextField label="Sample ID" />
      <ComboBox label="Matrix" />

      <Stack>
        <Label>Containers</Label>
        <Stack
          horizontal
          tokens={{
            childrenGap: 20
          }}
        >
          <Stack.Item grow={1}>
            <TextField label="#" />
          </Stack.Item>
          <Stack.Item grow={1}>
            <TextField label="Amount" />
          </Stack.Item>
          <Stack.Item grow={1}>
            <ComboBox label="Unit" />
          </Stack.Item>
        </Stack>
      </Stack>

      <Stack>
        <Label>
          <Stack
            horizontal
            verticalAlign="center"
          >
            <span>Turnaround Time</span>
            <Icon style={{paddingLeft: 4, color: DefaultPalette.themePrimary}} iconName="Info" />
          </Stack>
        </Label>
        <ChoiceGroup
          options={[
            { key: "normal", text: "Normal" },
            { key: "rush", text: "Rush" }
          ]}
        />
      </Stack>

      <Stack>
        <Label>Tests</Label>
        <TextField placeholder="Enter a test name or package"></TextField>
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
          text="Discard"
          style={buttonStyle}
        />
        <DefaultButton
          text="Add Another Sample"
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