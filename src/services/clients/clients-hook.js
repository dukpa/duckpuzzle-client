import {bindActionCreators} from 'redux';
import {useSelector, useDispatch} from 'react-redux';
import {getClients} from './clients-reducer';

export default function useClients() {
  let state = useSelector(state => state.clients);
  let dispatch = useDispatch();
  return {
    ...state,
    load: bindActionCreators(getClients, dispatch)
  };
}