import Dashboard from './main.view';

import {connect} from 'react-redux'; 

const mapState = (state) => {
  let {authentication} = state;
  return {
    userName: authentication.user
  };
}

const mapDispatch = {
  //
};

export default connect(mapState, mapDispatch)(
  Dashboard
)