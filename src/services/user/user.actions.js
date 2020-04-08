import {createAction} from '@reduxjs/toolkit';
import {getUserInfo} from './user.api';

import { UNAUTHORIZED } from '../../utils/fetch';
import * as authentication from '../authentication';

export const requestUserInfo = createAction('REQUEST_USER_INFO');
export const receiveUserInfo = createAction('RECEIVE_USER_INFO', (data) => {
  return {payload: data};
});
export const errorUserInfo = createAction('ERROR_USER_INFO', (e) => {
  return {payload: {error: e}};
});

export const loadUserInfo = () => async (dispatch, getState) => {
  dispatch(requestUserInfo());
  let resp = await getUserInfo();
  if (resp.success) {
    dispatch(receiveUserInfo(resp.data));
    if (!getState().authentication.authenticated)
      dispatch(authentication.loginSuccess(resp.data));
  } else {
    dispatch(errorUserInfo(resp.error));
    if (resp.error.name === UNAUTHORIZED) {
      dispatch(authentication.invalidateAuthentication());
    }
  }
}