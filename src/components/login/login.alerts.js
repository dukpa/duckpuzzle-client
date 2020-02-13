import React, {useState} from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

export default function LoginAlerts(props) {
  return (
    <React.Fragment>
      <Snackbar open={props.open} autoHideDuration={6000} onClose={props.handleClose}>
        <Alert onClose={props.handleClose} severity="error">
          {props.message}
        </Alert>
      </Snackbar>
    </React.Fragment>
  )
}