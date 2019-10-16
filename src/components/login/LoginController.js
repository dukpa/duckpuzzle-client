import React from 'react'

import Login from './LoginView';

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

  render() {
    return <Login
      onUserNameChange={(e) => this.handleChange(e)}
      onPasswordChange={(e) => this.handleChange(e)}
      onRememberMeChange={(e) => this.handleChange(e)}
      userName={this.state.userName}
      password={this.state.password}
      rememberMe={this.state.rememberMe}
    />
  }
}

export default LoginController;