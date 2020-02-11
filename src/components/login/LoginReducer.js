import {createAction, createReducer} from '@reduxjs/toolkit';

export const updateUserName = createAction('LOGIN_FORM_UPDATE_USERNAME', (value) => ({
  payload: {value}
}));

export const updatePassword = createAction('LOGIN_FORM_UPDATE_PASSWORD', (value) => ({
  payload: {value}
}));

const validateUserName = (value = '') => {
  if (value.length === 0) {
    return 'Username is required';
  }
  return '';
}

const validatePassword = (value = '') => {
  if (value.length === 0) {
    return 'Password is required';
  }
  return '';
}

const canSubmit = (state) => {
  for (let key in state) {
    let field = state[key];
    if (typeof field !== 'object') {
      continue;
    }
    if (field.error || !field.touched) {
      return false;
    }
  }
  return true;
}

export default createReducer({
  canSubmit: false,
  userName: {
    value: '',
    error: '',
    touched: false
  },
  password: {
    value: '',
    error: '',
    touched: false
  }
}, {
  [updateUserName]: function(state, action) {
    const {value} = action.payload;
    state.userName.value = value;
    state.userName.error = validateUserName(value);
    state.userName.touched = true;
    state.canSubmit = canSubmit(state);
  },
  [updatePassword]: function(state, action) {
    const {value} = action.payload;
    state.password.value = value;
    state.password.error = validatePassword(value);
    state.password.touched = true;
    state.canSubmit = canSubmit(state);
  }
});