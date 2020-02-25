import {createReducer} from '@reduxjs/toolkit';
import {createAction} from '@reduxjs/toolkit';

import {getUserInfo} from './user.api';
import { UNAUTHORIZED } from '../../utils/fetch';
import { invalidateAuthentication, loginSuccess } from '../authentication/authentication.reducer';

const requestUserInfo = createAction('REQUEST_USER_INFO');
const receiveUserInfo = createAction('RECEIVE_USER_INFO', (data) => {
  return {payload: data};
});
const errorUserInfo = createAction('ERROR_USER_INFO', (e) => {
  return {payload: {error: e}};
});

export const loadUserInfo = () => async (dispatch) => {
  dispatch(requestUserInfo());
  try {
    let resp = await getUserInfo();
    if (resp.success) {
      dispatch(receiveUserInfo(resp.data));
      dispatch(loginSuccess(resp.data));
    } else {
      throw resp.error;
    }
  } catch(e) {
    dispatch(errorUserInfo(e));
    if (e.name === UNAUTHORIZED) {
      dispatch(invalidateAuthentication());
    }
  }
}

export default createReducer({
  loading: false,
  received: false,
  error: null,
  name: null,
  email: null
}, {
  [requestUserInfo]: function(state, action) {
    state.loading = true;
  },
  [receiveUserInfo]: function(state, action) {
    let {name, email} = action.payload;
    state.name = name;
    state.email = email;
    state.loading = false;
    state.received = false;
  },
  [errorUserInfo]: function(state, action) {
    let {error} = action.payload;
    state.error = error;
    state.loading = false;
    state.received = true;
  }
});