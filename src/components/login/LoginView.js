import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox'
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Link from '@material-ui/core/Link';

import LoginViewStyles from './LoginViewStyles'

export default function Login() {
  const cls = LoginViewStyles();
  return (
    <Grid
      className={cls.container}
      container 
      direction="row" 
      justify="center" 
      alignItems="center"
    >
      <Paper className={cls.paper}>
        <form className={cls.form}>
          <TextField
            className={cls.input}
            label="Username"
            multiline
          />
          <TextField
            className={cls.input}
            label="Password"
          />
          <FormControlLabel
            className={cls.input}
            label="Remember me"
            control = {
              <Checkbox
              />
            }
          />
          <Button 
            className={cls.input}
            variant="contained" 
            color="primary"
          >
            Login
          </Button>
        </form>
        <Grid
          className={cls.linkBar}
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Link href="javascript:;">Register</Link>
          <Link href="javascript:;">Can't login?</Link>
        </Grid>
      </Paper>
    </Grid>
  );
}