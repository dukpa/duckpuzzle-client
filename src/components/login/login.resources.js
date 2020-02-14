import { BAD_USER_PASS, UNKNOWN_ERROR } from "../../services/authentication/authentication.reducer";

export default function getResource(key) {
  switch (key) {
    case BAD_USER_PASS:
      return 'Incorrect username and password';
    case UNKNOWN_ERROR:
      return 'Could not log in due to an unknown error'
    default:
      return key;
  }
}