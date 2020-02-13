import React, {useState} from 'react'
import {connect} from 'react-redux';

import Login from './login.view';
import {login, clearError} from '../../services/authentication/authentication.reducer';
import LoginAlerts from './login.alerts';
import getResource from './login.resources'

export default connect(
  function(state) {
    const error = state.authentication.error
    return {
      snack: {
        open: !!error,
        message: getResource(error)
      }
    }
  },
  {login, clearError}
)(function(props) {
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

  const canSubmit = () => {
    return userName.touched && !userName.error && password.touched && !password.error;
  };

  const formData = {
    canSubmit: canSubmit(),
    userName,
    password
  }

  const handleSubmit = (e) => {
    props.login(userName.value, password.value);
    e.preventDefault();
  };

  return (
    <React.Fragment>
      <LoginAlerts
        open={props.snack.open}
        message={props.snack.message}
        handleClose={props.clearError}
      ></LoginAlerts>
      <Login
        formData={formData}
        onUserNameChange={updateUserName}
        onPasswordChange={updatePassword}
        onSubmit={handleSubmit}
      ></Login>
    </React.Fragment>
  )
});