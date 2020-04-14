import {useSelector, useDispatch} from 'react-redux';
import { bindActionCreators } from 'redux';

import {newRequest} from './request.actions';

export default function useRequests() {
  let state = useSelector(state => state.requests);
  let items = useSelector(state => state.requests.items);
  let dispatch = useDispatch();

  return {
    ...state,
    items,
    new: bindActionCreators(newRequest, dispatch)
  }
}