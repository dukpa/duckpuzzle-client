import {combineReducers} from 'redux'
import {reducer as authentication} from './services/authentication';
import {reducer as user} from './services/user';
import {reducer as requests} from './services/request';

const reducer = combineReducers({
  authentication,
  user,
  requests
});

export default reducer;