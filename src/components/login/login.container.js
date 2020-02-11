import React from 'react'
import {connect} from 'react-redux';

import Login from './login.view';
import {updateUserName, updatePassword} from './login.reducer';
import {login} from '../../services/authentication/authentication.reducer';

function mapState(state) {
  let {authentication, loginForm} = state;
  let props = {
    formData: loginForm
  };

  return props;
}

const mapDispatch = {
  login: login,
  onUserNameChange: updateUserName,
  onPasswordChange: updatePassword
};

export default connect(mapState, mapDispatch)(Login);