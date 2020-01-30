import * as authentication from '../../api/authentication.api'

export const types = {
  LOGIN_REQUEST: 'REQUEST_LOGIN',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_ERROR: 'LOGIN_ERROR',
  LOGIN_VALIDATE: 'LOGIN_VALIDATE'
};

export function login(userName, password) {
  return async function(dispatch, getState) {
    dispatch(validateLogin(userName, password));
    dispatch(loginRequest());
    try {
      let loginResp = await authentication.login(userName, password);
      if (loginResp.success) {
        dispatch(loginSuccess(loginResp.data));
      } else {
        throw loginResp.error;
      }
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

function loginSuccess(data) {
  return {
    type: types.LOGIN_SUCCESS,
    email: data.email,
    token: data.token
  }
}

function loginError(err) {
  return {
    type: types.LOGIN_ERROR,
    error: err
  }
}

function validateLogin(userName, password) {
  return {
    type: types.LOGIN_VALIDATE,
    userName,
    password
  }
}