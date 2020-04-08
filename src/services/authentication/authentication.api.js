import utils from '../../utils'

export const BAD_USER_PASS = 'BAD_USER_PASS';
export const loginUrl = 'login';
const JWT_TOKEN_KEY = 'c9155b84-b3ba-4698-8d8c-b94524ae8a9f';

export async function login(userName, password, rememberMe) {
  let resp = await utils.fetchJson(loginUrl, {
    method: 'POST',
    body: JSON.stringify({
      email: userName,
      password
    })
  });

  if (resp.success) {
    saveToken(resp.data.token, rememberMe);
  }

  return resp;
}

function saveToken(token, persist) {
  sessionStorage.setItem(JWT_TOKEN_KEY, token);
  if (persist) {
    localStorage.setItem(JWT_TOKEN_KEY, token);
  }
}

export function getToken() {
  let token = sessionStorage.getItem(JWT_TOKEN_KEY) || localStorage.getItem(JWT_TOKEN_KEY);
  return token;
}

export function clearToken() {
  localStorage.removeItem(JWT_TOKEN_KEY);
  sessionStorage.removeItem(JWT_TOKEN_KEY);
}