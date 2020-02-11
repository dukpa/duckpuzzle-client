import {createReducer} from '@reduxjs/toolkit';
import {createAction} from '@reduxjs/toolkit';
import * as authentication from './authentication.api';

const loginRequest = createAction('REQUEST_LOGIN');

const loginSuccess = createAction('LOGIN_SUCCESS', (data) => ({
  payload: {
    email: data.email,
    token: data.token
  }
}));

const loginError = createAction('LOGIN_ERROR', (err) => ({
  payload: {
    error: err
  }
}));

export const login = (userName, password) => async (dispatch, getState) => {
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

export default createReducer({
  user: null,
  authenticated: false,
  errors: [],
  token: null
}, {
  [loginRequest]: function(state, action) {
    state.authenticated = false;
  },
  [loginSuccess]: function(state, action) {
    state.user = action.payload.email;
    state.token = action.payload.token;
    state.authenticated = true;
    state.errors = [];
  },
  [loginError]: function(state, action) {
    state.errors = [{
      name: action.payload.error.name
    }];
  }
});