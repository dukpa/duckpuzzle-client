import React from 'react';

import useRequests from './requests.hook';

export default function Requests(props) {
    const {} = useRequests();
    return (
      <div>I am the Requests</div>
    )
  }