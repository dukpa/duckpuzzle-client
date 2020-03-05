import React, {useState} from 'react';
import {connect} from 'react-redux';

import {TextField} from 'office-ui-fabric-react/lib/TextField';
import { Checkbox } from 'office-ui-fabric-react/lib/Checkbox';
import { PrimaryButton } from 'office-ui-fabric-react';
import { Link } from 'office-ui-fabric-react/lib/Link';
import { Stack } from 'office-ui-fabric-react/lib/Stack';
import { DefaultPalette } from 'office-ui-fabric-react/lib/Styling';
import {MessageBar, MessageBarType} from 'office-ui-fabric-react';

import * as authentication from '../../services/authentication';
import getResource from './login.resources';

const mapState = (state) => {
  const error = state.authentication.error
  return {
    snack: {
      open: !!error,
      message: getResource(error)
    }
  }
};

const mapDispatch = {
  login: authentication.login,
  clearError: authentication.clearError
};

function Login({
  snack,
  clearError,
  login
}) {

  let [userName, setUserName] = useState({
    value: '',
    touched: false,
    error: ''
  });
  const validateUserName = (value) => {
    if (value.length === 0) {
      return 'Username is required';
    }
  };
  const updateUserName = (e) => {
    setUserName({
      value: e.target.value,
      touched: true,
      error: validateUserName(e.target.value)
    });
  };

  let [password, setPassword] = useState({
    value: '',
    touched: false,
    error: ''
  });
  const validatePassword = (value) => {
    if (value.length === 0) {
      return 'Password is required';
    }
  };
  const updatePassword = (e) => {
    setPassword({
      value: e.target.value,
      touched: true,
      error: validatePassword(e.target.value)
    });
  };

  let [rememberMe, setRememberMe] = useState({
    value: false
  });
  const onRememberMeChange = (e) => {
    setRememberMe({value: e.target.checked});
  };

  const canSubmit = () => {
    return userName.touched && !userName.error && password.touched && !password.error;
  };

  const handleSubmit = (e) => {
    login(userName.value, password.value, rememberMe.value);
    e.preventDefault();
  };

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
        {snack.message &&(
          <MessageBar messageBarType={MessageBarType.error} onDismiss={clearError}>
            {snack.message}
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
              onChange={updateUserName}
              errorMessage={userName.error}
            />
            <TextField
              name="password"
              type="password"
              label="Password"
              value={password.value}
              required
              onChange={updatePassword}
              errorMessage={password.error}
            />
            <Checkbox
              label="Remember me"
              value={rememberMe.value}
              onChange={onRememberMeChange}
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

export default connect(mapState, mapDispatch)(Login);