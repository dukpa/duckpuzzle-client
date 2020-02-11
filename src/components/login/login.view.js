import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox'
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Link from '@material-ui/core/Link';

import useStyle from './login.style'

export default function Login(props) {
  const cls = useStyle();

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
            value={props.formData.userName.value}
            required
            onChange={props.onUserNameChange}
            error={!!props.formData.userName.error}
            helperText={props.formData.userName.error}
          />
          <TextField
            name="password"
            className={cls.input}
            type="password"
            label="Password"
            value={props.formData.password.value}
            required
            onChange={props.onPasswordChange}
            error={!!props.formData.password.error}
            helperText={props.formData.password.error}
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
            disabled={!props.formData.canSubmit}
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
          <Link href="">Register</Link>
          <Link href="">Can't login?</Link>
        </Grid>
      </Paper>
    </Grid>
  );
}