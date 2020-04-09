import {useState} from 'react';

import {useCurrentUser} from 'services/user';
import {useAuthentication} from 'services/authentication';

export function useUserMenu() {
  let user = useCurrentUser();
  let auth = useAuthentication();

  let [hidden, setHidden] = useState(true);
  const toggleShow = () => setHidden(!hidden);
  const hide = () => setHidden(true);

  const logout = () => auth.logout();

  return {
    hidden, setHidden,
    hide,
    toggleShow,
    user: user.data,
    logout
  };
}