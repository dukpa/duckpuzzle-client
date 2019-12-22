import * as authentication from '../../api/authentication.api'

export const types = {
  LOGIN_REQUEST: 'REQUEST_LOGIN',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_ERROR: 'LOGIN_ERROR'
};

export function login(userName, password) {
  return async function(dispatch) {
    dispatch(loginRequest());
    try {
      await authentication.login(userName, password);
      dispatch(loginSuccess(userName))
    } catch(e) {
      dispatch(loginError(e))
    }
  }
}

function loginRequest() {
  return {
    type: types.LOGIN_REQUEST
  }
}

function loginSuccess(userName) {
  return {
    type: types.LOGIN_SUCCESS,
    payload: {
      userName: userName
    }
  }
}

function loginError(err) {
  return {
    type: types.LOGIN_ERROR,
    payload: {
      error: err
    }
  }
}