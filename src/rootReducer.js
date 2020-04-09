import {combineReducers} from 'redux'
import {reducer as authentication} from './services/authentication';
import {reducer as user} from './services/user';

const reducer = combineReducers({
  authentication,
  user
});

export default reducer;