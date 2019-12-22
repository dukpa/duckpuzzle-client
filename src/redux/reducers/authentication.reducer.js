import * as loginActions from '../actions/login.actions';

const initialState = {
  user: null,
  authenticated: false,
  errors: []
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
        user: action.payload.userName,
        authenticated: true,
        errors: []
      };
    case loginActions.types.LOGIN_ERROR:
      return {
        ...state,
        authenticated: false,
        errors: [action.payload.error]
      };
    default:
      return state;
  }
}