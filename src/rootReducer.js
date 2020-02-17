import {combineReducers} from 'redux'
import authentication from './services/authentication/authentication.reducer';
import user from './services/user/user.reducer';

const reducer = combineReducers({
  authentication,
  user
});

export default reducer;