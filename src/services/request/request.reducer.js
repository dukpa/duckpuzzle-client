import {createReducer} from '@reduxjs/toolkit';

import { beginNewRequest, successNewRequest, failNewRequest } from './request.actions';

const requests = createReducer({
  loading: false,
  creating: false,
  saving: false,
  error: null,
  items: [],
  current: null
}, {
  [beginNewRequest]: function(state, action) {
    state.creating = true;
  },
  [successNewRequest]: function(state, action) {
    state.creating = false;
    let newRequest = action.payload.data.items[0];
    state.items.push(newRequest);
    state.current = newRequest;
  },
  [failNewRequest] : function(state, action) {
    state.creating = false;
    state.error = action.error;
  }
});

export default requests;