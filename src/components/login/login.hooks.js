import {useState} from 'react';

import {useAuthentication} from 'services/authentication';

function useTextField(config={}) {
  let {defaultValue, validate} = config;
  defaultValue = defaultValue || '';
  validate = validate || (() => '');

  let [value, setValue] = useState(defaultValue);
  let [touched, setTouched] = useState(false);
  let [error, setError] = useState('');
  const update = (e) => {
    setValue(e.target.value);
    setTouched(true);
    setError(validate(e.target.value));
  };

  return {
    value, setValue,
    touched, setTouched,
    error, setError,
    validate,
    update
  };
}

function useUserName() {
  return useTextField({
    defaultValue: '',
    validate: (value) => {
      if (value.length === 0) {
        return 'Username is required';
      }
    }
  });
}

function usePassword() {
  return useTextField({
    validate: (value) => {
      if (value.length === 0) {
        return 'Password is required';
      }
    }
  });
}

function useRememberMe() {
  let [value, setValue] = useState(false);
  const update = (e) => setValue(e.target.checked);
  return {value, setValue, update};
}

function useLoginError() {
  let auth = useAuthentication();
  let message = auth.error;
  const clear = () => auth.clearError();
  return {
    message,
    clear
  }
}

export function useLoginForm() {
  let auth = useAuthentication();
  let userName = useUserName();
  let password = usePassword();
  let rememberMe = useRememberMe();
  let loginError = useLoginError();

  const canSubmit = () => {
    return userName.touched && !userName.error
      && password.touched && !password.error;
  };

  const handleSubmit = (e) => {
    auth.login(userName.value, password.value, rememberMe.value);
    e.preventDefault();
  };

  return {
    userName,
    password,
    rememberMe,
    canSubmit,
    handleSubmit,
    loginError
  };
}