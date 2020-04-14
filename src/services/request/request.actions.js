import {createAction} from '@reduxjs/toolkit';

import * as api from './request.api';

export const beginNewRequest = createAction('request/new/begin');

export const successNewRequest = createAction('request/new/success',
  (data) => ({
    payload: {
      data
    }
  })
);

export const failNewRequest = createAction('request/new/failure',
  (err) => ({
    payload: {
      error : err
    }
  })
);

export const newRequest = () => async (dispatch) => {
  dispatch(beginNewRequest());
  let resp = await api.newRequest();
  if (resp.success) {
    dispatch(successNewRequest(resp.data));
  } else {
    dispatch(failNewRequest(resp.error));
  }
};