export const loginActions = {
  LOGIN_REQUEST: 'REQUEST_LOGIN',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILURE: 'LOGIN_FAILURE',
  LOGIN_ERROR: 'LOGIN_ERROR',
  login
};

function login(userName, password) {
  return async function(dispatch) {
    dispatch(loginRequest());
    try {
      await Promise.resolve();
    } catch(e) {
      dispatch(loginError(e))
    }
    dispatch(loginSuccess)
  }
}

function loginRequest() {
  return {
    type: loginActions.LOGIN_REQUEST
  }
}

function loginSuccess() {
  return {
    type: loginActions.LOGIN_SUCCESS
  }
}

function loginFailure() {
  return {
    type: loginActions.LOGIN_FAILURE
  }
}

function loginError(err) {
  return {
    type: loginActions.LOGIN_FAILURE,
    payload: {
      error: err
    }
  }
}