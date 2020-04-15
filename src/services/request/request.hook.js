import {useSelector, useDispatch} from 'react-redux';
import { bindActionCreators } from 'redux';

import {newRequest} from './request.actions';

export default function useRequests() {
  let state = useSelector(state => state.requests);
  let dispatch = useDispatch();

  return {
    ...state,
    new: bindActionCreators(newRequest, dispatch)
  }
}