import {combineReducers} from 'redux'
import authentication from './services/authentication';
import user from './services/user';

const reducer = combineReducers({
  authentication,
  user
});

export default reducer;