export const types = {
  UPDATE_USERNAME: 'LOGIN_FORM_UPDATE_USERNAME',
  UPDATE_PASSWORD: 'LOGIN_FORM_UPDATE_PASSWORD',
  VALIDATE_USERNAME: 'LOGIN_FORM_VALIDATE_USERNAME',
  VALIDATE_PASSWORD: 'LOGIN_FORM_VALIDATE_PASSWORD'
};

export function updateUserName(value) {
  return {
    type: types.UPDATE_USERNAME,
    value
  };
}

export function updatePassword(value) {
  return {
    type: types.UPDATE_PASSWORD,
    value
  };
}

export function validateUserName(value) {
  return {
    type: types.VALIDATE_USERNAME,
    value
  };
}

export function validatePassword(value) {
  return {
    type: types.VALIDATE_PASSWORD,
    value
  };
}