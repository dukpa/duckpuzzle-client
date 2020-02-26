import React from 'react';
import {TextField} from 'office-ui-fabric-react/lib/TextField';
import { Checkbox } from 'office-ui-fabric-react/lib/Checkbox';
import { PrimaryButton } from 'office-ui-fabric-react';
import { Link } from 'office-ui-fabric-react/lib/Link';
import { Stack } from 'office-ui-fabric-react/lib/Stack';
import { DefaultPalette } from 'office-ui-fabric-react/lib/Styling';
import {MessageBar, MessageBarType} from 'office-ui-fabric-react';

export default function Login(props) {
  return (
    <Stack
      styles={{
        root: {
          flex: 1,
          backgroundColor: DefaultPalette.themeDark
        }
      }}
      horizontalAlign="center"
      verticalAlign="center"
    >
      <Stack
        styles={{
          root: {
            width: 350,
            backgroundColor: DefaultPalette.white,
            padding: 40
          }
        }}
        tokens={{childrenGap: 10}}
      >
        {props.errorMessage &&(
          <MessageBar messageBarType={MessageBarType.error} onDismiss={props.dismissError}>
            {props.errorMessage}
          </MessageBar>)}
        <form 
          spellCheck="false"
          onSubmit={props.onSubmit}
        >
          <Stack tokens={{childrenGap: 10}}>
            <TextField
              name="userName"
              label="Username"
              value={props.formData.userName.value}
              required
              onChange={props.onUserNameChange}
              errorMessage={props.formData.userName.error}
            />
            <TextField
              name="password"
              type="password"
              label="Password"
              value={props.formData.password.value}
              required
              onChange={props.onPasswordChange}
              errorMessage={props.formData.password.error}
            />
            <Checkbox
              label="Remember me"
              onChange={props.onRememberMeChange}
            />
            <PrimaryButton 
              type="submit"
              variant="contained" 
              color="primary"
              onClick={props.onSubmit}
              disabled={!props.formData.canSubmit}
            >
              Login
            </PrimaryButton>
          </Stack>
        </form>
        <Stack horizontal horizontalAlign="space-between">
          <Link href="">Register</Link>
          <Link href="">Can't login?</Link>
        </Stack>
      </Stack>
    </Stack>
  );
}