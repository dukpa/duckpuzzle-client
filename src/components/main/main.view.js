import React from 'react';

export default function Dashboard(props) {
  let {onLogoutClick} = props;

  return (
    <div>
      <div>Hello {props.user.name}</div>
      <button onClick={onLogoutClick}>Logout</button>
    </div>
  )
}