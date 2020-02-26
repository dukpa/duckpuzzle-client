import {createReducer} from '@reduxjs/toolkit';
import {createAction} from '@reduxjs/toolkit';
import * as authentication from './authentication.api';

export const BAD_USER_PASS = authentication.BAD_USER_PASS;
export const UNKNOWN_ERROR = 'UNKNOWN_ERROR';

const loginRequest = createAction('REQUEST_LOGIN');

export const loginSuccess = createAction('LOGIN_SUCCESS', (data) => ({
  payload: {
    token: data.token
  }
}));

const loginError = createAction('LOGIN_ERROR', (err) => ({
  payload: {
    error: err
  }
}));

export const clearError = createAction('CLEAR_ERROR');

export const invalidateAuthentication = createAction('INVALIDATE_AUTHENTICATION');

export const login = (userName, password, rememberMe) => async (dispatch) => {
  dispatch(loginRequest());
  try {
    let loginResp = await authentication.login(userName, password, rememberMe);
    if (loginResp.success) {
      dispatch(loginSuccess(loginResp.data));
    } else {
      throw loginResp.error;
    }
  } catch(e) {
    dispatch(loginError(e));
  }
}

export const logout = () => (dispatch) => {
  authentication.clearToken();
  dispatch(invalidateAuthentication());
}

export default createReducer({
  authenticated: false,
  error: null,
  token: null
}, {
  [loginRequest]: function(state, action) {
    state.authenticated = false;
  },
  [loginSuccess]: function(state, action) {
    state.token = action.payload.token;
    state.authenticated = true;
    state.error = null;
  },
  [loginError]: function(state, action) {
    const {error} = action.payload;
    if (error.name === BAD_USER_PASS) {
      state.error = BAD_USER_PASS;
    } else {
      state.error = UNKNOWN_ERROR
    }
  },
  [clearError]: function(state) {
    state.error = null;
  },
  [invalidateAuthentication]: function(state, action) {
    state.authenticated = false;
    state.token = null;
  }
});