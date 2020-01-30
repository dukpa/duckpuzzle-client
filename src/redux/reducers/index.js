import {combineReducers} from 'redux'
import authentication from './authentication'
import loginForm from './loginform'

const reducer = combineReducers({
  authentication,
  loginForm
});

export default reducer;