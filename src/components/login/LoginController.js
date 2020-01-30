import React from 'react'
import {connect} from 'react-redux';

import Login from './LoginView';
import * as loginActions from '../../redux/actions/login'
import * as loginFormActions from '../../redux/actions/loginform'
import loginForm from '../../redux/reducers/loginform';

function mapState(state) {
  let {authentication, loginForm} = state;
  let props = {
    formData: {
      userName: {
        value: loginForm.userName.value,
        hasError: loginForm.userName.isValid === false,
        message: ''
      },
      password: {
        value: loginForm.password.value,
        hasError: loginForm.password.isValid === false,
        message: ''
      },
      canSubmit: loginForm.isValid
    }
  };

  if (loginForm.userName.isEmpty) {
    props.formData.userName.message = 'Username is required';
  }
  if (loginForm.password.isEmpty){
    props.formData.password.message = 'Password is required';
  }

  return props;
}

const actionCreators = {
  login: loginActions.login,
  updateUserName: loginFormActions.updateUserName,
  updatePassword: loginFormActions.updatePassword
};

function LoginController(props) {
  return <Login
    formData={props.formData}
    onUserNameChange={(e) => props.updateUserName(e.target.value)}
    onPasswordChange={(e) => props.updatePassword(e.target.value)}
    onRememberMeChange={(e) => this.handleChange(e)}
    onSubmit={(e) => {
      props.login(props.formData.userName.value, props.formData.password.value);
      e.preventDefault();
    }}
  />
}

export default connect(mapState, actionCreators)(LoginController);