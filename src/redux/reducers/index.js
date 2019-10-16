import {combineReducers} from 'redux'
import authentication from './authentication.reducer'

const reducer = combineReducers({
  authentication
});

export default reducer;