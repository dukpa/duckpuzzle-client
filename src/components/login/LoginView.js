import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox'
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Link from '@material-ui/core/Link';

import LoginViewStyles from './LoginViewStyles'

export default function Login(props) {
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
        <form 
          className={cls.form}
          spellCheck="false"
          onSubmit={props.onSubmit}
        >
          <TextField
            name="userName"
            className={cls.input}
            label="Username"
            value={props.userName}
            required
            onChange={props.onUserNameChange}
          />
          <TextField
            name="password"
            className={cls.input}
            type="password"
            label="Password"
            value={props.password}
            required
            onChange={props.onPasswordChange}
          />
          <FormControlLabel
            name="rememberMe"
            className={cls.input}
            label="Remember me"
            checked={props.rememberMe}
            onChange={props.onRememberMeChange}
            control = {
              <Checkbox/>
            }
          />
          <Button 
            className={cls.input}
            type="submit"
            variant="contained" 
            color="primary"
            onClick={props.onSubmit}
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