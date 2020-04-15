import utils from 'utils';
import {createReducer, createAction} from '@reduxjs/toolkit';

const beginGetClients = createAction('clients/get/begin');
const fulfillGetClients = createAction('clients/get/fulfill', 
  (data) => ({
    payload: {
      data
    }
  })
);
const rejectGetClients = createAction('clients/get/reject', 
  (error) => ({
    payload: {
      error
    }
  })
);

export const getClients = () => async (dispatch, getState) => {
  let {loading, received} = getState().clients;
  if (loading || received)
    return;
  dispatch(beginGetClients());
  let resp = await utils.fetchJson('clients');
  if (resp.success) {
    dispatch(fulfillGetClients(resp.data));
  } else {
    dispatch(rejectGetClients(resp.error));
  }
}

export default createReducer({
  loading: false,
  received: false,
  error: null,
  items: []
}, {
  [beginGetClients]: function(state, action) {
    state.loading = true;
    state.received = false;
  },

  [fulfillGetClients]: function(state, action) {
    state.loading = false;
    state.received = true;
    state.error = null;
    state.items = action.payload.data.items;
  },

  [rejectGetClients]: function(state, action) {
    state.loading = false;
    state.received = false;
    state.error = action.payload;
  }
});