import {createReducer} from '@reduxjs/toolkit';
import {loginRequest, loginSuccess, loginError, clearError, invalidateAuthentication} from './authentication.actions';

export const BAD_USER_PASS = 'BAD_USER_PASS';
export const UNKNOWN_ERROR = 'UNKNOWN_ERROR';

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