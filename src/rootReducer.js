import {combineReducers} from 'redux'
import authentication from './services/authentication/authentication.reducer'

const reducer = combineReducers({
  authentication
});

export default reducer;