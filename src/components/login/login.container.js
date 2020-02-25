import React, {useState} from 'react'
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import Login from './login.view';
import {login, clearError} from '../../services/authentication/authentication.reducer';
import getResource from './login.resources'

const mapState = (state) => {
  const error = state.authentication.error
  return {
    loggedIn: state.authentication.authenticated,
    snack: {
      open: !!error,
      message: getResource(error)
    }
  }
};

const mapDispatch = {
  login,
  clearError
};

export default connect(mapState, mapDispatch)(function(props) {
  let {snack, clearError, login, loggedIn} = props;

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
    login(userName.value, password.value);
    e.preventDefault();
  };

  return (
    <React.Fragment>
      {loggedIn && (<Redirect to="/"></Redirect>)}
      <Login
        formData={formData}
        onUserNameChange={updateUserName}
        onPasswordChange={updatePassword}
        onSubmit={handleSubmit}
        errorMessage={snack.message}
        dismissError={clearError}
      ></Login>
    </React.Fragment>
  )
});