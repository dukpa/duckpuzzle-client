import {combineReducers} from 'redux'
import authentication from './services/authentication/authentication.reducer'
import loginForm from './components/login/LoginReducer'

const reducer = combineReducers({
  authentication,
  loginForm
});

export default reducer;