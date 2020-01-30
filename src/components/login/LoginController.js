import React from 'react'
import {connect} from 'react-redux';

import Login from './LoginView';
import * as loginActions from '../../redux/actions/login'
import * as loginFormActions from '../../redux/actions/loginform'

function mapState(state) {
  let {authentication, loginForm} = state;
  let props = {
    formData: {
      userName: {
        value: loginForm.userName.value,
        hasError: !loginForm.userName.isValid,
        message: ''
      },
      password: {
        value: loginForm.password.value,
        hasError: !loginForm.password.isValid,
        message: ''
      }
    },
    canSubmit: loginForm.isValid
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

class LoginController extends React.Component {
  render() {
    return <Login
      onUserNameChange={(e) => this.props.updateUserName(e.target.value)}
      onPasswordChange={(e) => this.props.updatePassword(e.target.value)}
      onRememberMeChange={(e) => this.handleChange(e)}
      userName={this.props.formData.userName.value}
      password={this.props.formData.password.value}
      rememberMe={this.props.rememberMe}
      onSubmit={(e) => {
        this.props.login(this.props.formData.userName.value, this.props.formData.password.value);
        e.preventDefault();
      }}
      formData={this.props.formData}
    />
  }
}

export default connect(mapState, actionCreators)(LoginController);