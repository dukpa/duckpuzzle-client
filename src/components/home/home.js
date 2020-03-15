import React from 'react';

import useHome from './home.hook';

export default function Home(props) {
    const {} = useHome();
    return (
      <div>I am the Home</div>
    )
  }