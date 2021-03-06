import {createAction} from '@reduxjs/toolkit';

import * as api from './authentication.api';

export const BAD_USER_PASS = api.BAD_USER_PASS;
export const UNKNOWN_ERROR = 'UNKNOWN_ERROR';

export const loginRequest = createAction('REQUEST_LOGIN');

export const loginSuccess = createAction('LOGIN_SUCCESS', (data) => ({
  payload: {
    token: data.token
  }
}));

export const loginError = createAction('LOGIN_ERROR', (err) => ({
  payload: {
    error: err
  }
}));

export const clearError = createAction('CLEAR_ERROR');

export const invalidateAuthentication = createAction('INVALIDATE_AUTHENTICATION');

export const login = (userName, password, rememberMe) => async (dispatch) => {
  dispatch(loginRequest());
  let loginResp = await api.login(userName, password, rememberMe);
  if (loginResp.success) {
    dispatch(loginSuccess(loginResp.data));
  } else {
    dispatch(loginError(loginResp.error));
  }
}

export const logout = () => (dispatch) => {
  api.clearToken();
  dispatch(invalidateAuthentication());
}