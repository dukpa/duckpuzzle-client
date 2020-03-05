import {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import * as auth from 'services/authentication';

export function useUserMenu() {
  let user = useSelector(state => state.user);
  let dispatch = useDispatch();

  let [hidden, setHidden] = useState(true);
  const toggleShow = () => setHidden(!hidden);
  const hide = () => setHidden(true);

  const logout = () => dispatch(auth.logout());

  return {
    hidden, setHidden,
    hide,
    toggleShow,
    user,
    logout
  };
}