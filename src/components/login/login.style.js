import {makeStyles} from '@material-ui/styles/';

export default makeStyles((theme) => ({
  container: {
    flexGrow: 1,
    backgroundColor: theme.palette.primary.main,
    '&:before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: theme.palette.common.black,
      opacity: 0.2,
      zIndex: -1
    }
  },
  paper: {
    width: 350,
    padding: theme.spacing(4)
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(1)
  },
  input: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },
  linkBar: {
    padding: theme.spacing(1)
  }
}));