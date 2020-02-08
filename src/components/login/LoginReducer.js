import * as loginFormActions from './LoginActions'

function loginForm(state={
  isValid: false,
  userName: {
    value: '',
    isValid: null,
    isEmpty: null
  },
  password: {
    value: '',
    isValid: null,
    isEmpty: null
  }
}, action) {
  switch (action.type) {
    case loginFormActions.types.UPDATE_USERNAME:
      const emptyUserName = !action.value;
      return {
        ...state,
        userName: {
          value: action.value,
          isEmpty: emptyUserName,
          isValid: !emptyUserName
        },
        isValid: !emptyUserName && state.password.isValid
      }
    case loginFormActions.types.UPDATE_PASSWORD:
      const emptyPassword = !action.value;
      return {
        ...state,
        password: {
          value: action.value,
          isEmpty: emptyPassword,
          isValid: !emptyPassword
        },
        isValid: !emptyPassword && state.userName.isValid
      }
    default:
      return state;
  }
}

export default loginForm;