import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import {login, clearError, logout} from './authentication.actions';

export default function useAuthentication() {
  let state = useSelector(state => state.authentication);
  let dispatch = useDispatch();
  
  return {
    ...state,
    login: bindActionCreators(login, dispatch),
    clearError: bindActionCreators(clearError, dispatch),
    logout: bindActionCreators(logout, dispatch)
  };
}