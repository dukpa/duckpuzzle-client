import React from 'react'
import {connect} from 'react-redux';

import Login from './LoginView';
import * as loginActions from '../../redux/actions/login.actions'

class LoginController extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: '',
      rememberMe: false
    }
  }

  handleChange(e) {
    const {name, value, checked} = e.target;
    let newValue;
    if (name === 'rememberMe') {
      newValue = checked;
    } else {
      newValue = value;
    }
    this.setState({
      [name]: newValue
    });
  }

  handleSubmit(e) {
    const {userName, password, rememberMe} = this.state;
    this.props.login(userName, password);
    e.preventDefault();
  }

  render() {
    return <Login
      onUserNameChange={(e) => this.handleChange(e)}
      onPasswordChange={(e) => this.handleChange(e)}
      onRememberMeChange={(e) => this.handleChange(e)}
      userName={this.state.userName}
      password={this.state.password}
      rememberMe={this.state.rememberMe}
      onSubmit={(e) => this.handleSubmit(e)}
      formData={this.props.formData}
    />
  }
}

function mapState(state) {
  let {authentication} = state;
  let props = {
    formData: {
      userName: {
        value: authentication.user,
        hasError: false,
        message: ''
      },
      password: {
        value: authentication.password,
        hasError: false,
        message: ''
      }
    }
  };
  for (let error of authentication.errors) {
    switch (error.name) {
      case 'BAD_USER_PASS':
        props.formData.userName.hasError = true;
        props.formData.userName.error = 'The username or password you entered was not valid.'
        props.formData.password.hasError = true
        break;
    }
  }
  return props;
}

const actionCreators = {
  login: loginActions.login
}

export default connect(mapState, actionCreators)(LoginController);