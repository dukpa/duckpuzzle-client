import {createReducer} from '@reduxjs/toolkit';

import {requestUserInfo, receiveUserInfo, errorUserInfo} from './user.actions';

export default createReducer({
  loading: false,
  received: false,
  error: null,
  data: {
    name: null,
    email: null
  }
}, {
  [requestUserInfo]: function(state, action) {
    state.loading = true;
  },
  [receiveUserInfo]: function(state, action) {
    let {name, email} = action.payload.items[0];
    state.data.name = name;
    state.data.email = email;
    state.loading = false;
    state.received = true;
  },
  [errorUserInfo]: function(state, action) {
    let {error} = action.payload;
    state.error = error;
    state.loading = false;
    state.received = false;
  }
});