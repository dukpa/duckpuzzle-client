import * as loginActions from '../actions/login.actions';

const initialState = {
  user: null,
  authenticated: false,
  errors: [],
  token: null
}

export default function authentication(state=initialState, action) {
  switch(action.type) {
    case loginActions.types.LOGIN_REQUEST:
      return {
        ...state, 
        authenticated: false
      };
    case loginActions.types.LOGIN_SUCCESS:
      return {
        ...state, 
        user: action.email,
        token: action.token,
        authenticated: true,
        errors: []
      };
    case loginActions.types.LOGIN_ERROR:
      return {
        ...state,
        authenticated: false,
        errors: [{
          name: action.error.name
        }]
      };
    default:
      return state;
  }
}