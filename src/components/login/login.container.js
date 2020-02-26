import React, {useState} from 'react'
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import Login from './login.view';
import {login, clearError} from '../../services/authentication/authentication.reducer';
import getResource from './login.resources'

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
  login,
  clearError
};

const LoginContainer = (props) => {
  let {snack, clearError, login} = props;

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

  const formData = {
    canSubmit: canSubmit(),
    userName,
    password,
    rememberMe
  }

  const handleSubmit = (e) => {
    login(userName.value, password.value, rememberMe.value);
    e.preventDefault();
  };

  return (
    <React.Fragment>
      <Login
        formData={formData}
        onUserNameChange={updateUserName}
        onPasswordChange={updatePassword}
        onSubmit={handleSubmit}
        errorMessage={snack.message}
        dismissError={clearError}
        onRememberMeChange={onRememberMeChange}
      ></Login>
    </React.Fragment>
  )
};

export default connect(mapState, mapDispatch)(LoginContainer);