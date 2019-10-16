import React from 'react'
import {connect} from 'react-redux';

import Login from './LoginView';
import {loginActions} from '../../redux/actions'

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
    />
  }
}

function mapState(state) {
  return state;
}

const actionCreators = {
  login: loginActions.login
}

export default connect(mapState, actionCreators)(LoginController);