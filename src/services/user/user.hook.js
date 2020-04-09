import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import {loadUserInfo} from './user.actions';

export default function useCurrentUser() {
  let state = useSelector(state => state.user);
  let dispatch = useDispatch();
  return {
    ...state,
    load: bindActionCreators(loadUserInfo, dispatch)
  }
}