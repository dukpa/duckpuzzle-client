import React from 'react';

import {TextField} from 'office-ui-fabric-react/lib/TextField';
import { Checkbox } from 'office-ui-fabric-react/lib/Checkbox';
import { PrimaryButton } from 'office-ui-fabric-react';
import { Link } from 'office-ui-fabric-react/lib/Link';
import { Stack } from 'office-ui-fabric-react/lib/Stack';
import { DefaultPalette } from 'office-ui-fabric-react/lib/Styling';
import {MessageBar, MessageBarType} from 'office-ui-fabric-react';

import getResource from './login.resources';
import {useLoginForm} from './login.hooks';

export default function Login(props) {
  let {
    userName,
    password,
    rememberMe,
    canSubmit,
    handleSubmit,
    loginError
  } = useLoginForm();

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
        {!!loginError.message &&(
          <MessageBar
            messageBarType={MessageBarType.error}
            onDismiss={loginError.clear}
          >
            {getResource(loginError.message)}
          </MessageBar>)}
        <form 
          spellCheck="false"
          onSubmit={handleSubmit}
        >
          <Stack tokens={{childrenGap: 10}}>
            <TextField
              name="userName"
              label="Username"
              value={userName.value}
              required
              onChange={userName.update}
              errorMessage={userName.error}
            />
            <TextField
              name="password"
              type="password"
              label="Password"
              value={password.value}
              required
              onChange={password.update}
              errorMessage={password.error}
            />
            <Checkbox
              label="Remember me"
              value={rememberMe.value}
              onChange={rememberMe.update}
            />
            <PrimaryButton 
              type="submit"
              variant="contained" 
              color="primary"
              onClick={handleSubmit}
              disabled={!canSubmit}
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