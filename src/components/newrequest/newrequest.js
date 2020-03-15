import React from 'react';

import useNewRequest from './newrequest.hook';

export default function NewRequest(props) {
    const {} = useNewRequest();
    return (
      <div>I am the NewRequest</div>
    )
  }