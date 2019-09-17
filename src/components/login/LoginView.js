import React from 'react';
import {makeStyles, useTheme} from '@material-ui/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  container: {
    flexGrow: 1
  },
  paper: {
    display: 'flex',
    flexDirection: 'column'
  },
  textField: {
    margin: theme.spacing(2)
  },
  button: {
    margin: theme.spacing(2)
  }
}));

export default function Login() {
  const cls = useStyles();
  return (
    <Grid
      className={cls.container}
      container 
      direction="row" 
      justify="center" 
      alignItems="center"
    >
      <Grid item xs={3}>
        <Paper className={cls.paper}>
          <TextField
            className={cls.textField}
            label="Username"
            multiline
          />
          <TextField
            className={cls.textField}
            label="Password"
          />
          <Button 
            className={cls.button}
            variant="contained" 
            color="primary"
          >
            Login
          </Button>
        </Paper>
      </Grid>
    </Grid>
  );
}