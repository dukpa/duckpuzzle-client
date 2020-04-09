import React, { useEffect, useState } from 'react';
import { Spinner, SpinnerSize } from 'office-ui-fabric-react/lib/Spinner';

import Login from './login';
import Main from './main'

import {useCurrentUser} from 'services/user';
import {useAuthentication} from 'services/authentication';

export default function App () {
  let user = useCurrentUser();
  let auth = useAuthentication();

  let [first, setFirst] = useState(true);
  useEffect(() => {
    setTimeout(() => setFirst(false), 50)
  }, []);

  useEffect(() => {
    if (!user.received) {
      user.load()
    }
  }, [auth.authenticated, user.received]);
  
  let componentToRender;
  if (auth.authenticated) {
    componentToRender = (<Main></Main>);
  } else if (user.loading || first) {
    componentToRender = (<Spinner style={{width:'100%'}} size={SpinnerSize.large} />);
  } else {
    componentToRender = (<Login></Login>);
  }

  return componentToRender;
}
