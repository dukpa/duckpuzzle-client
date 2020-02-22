import utils from '../../utils'

export const BAD_USER_PASS = 'BAD_USER_PASS';
export const loginUrl = 'login';
const JWT_TOKEN_KEY = 'c9155b84-b3ba-4698-8d8c-b94524ae8a9f';

export async function login(userName, password) {
  try {
    let resp = await utils.fetchJson(loginUrl, {
      method: 'POST',
      body: JSON.stringify({
        email: userName,
        password
      })
    });

    if (resp.success) {
      saveToken(resp.data.token);
    }

    return resp;
  } catch(e) {
    console.error(e);
  }
}

export async function getUserInfo() {
  try {
    let resp = await utils.fetchJson('users');
    return resp;
  } catch (e) {
    console.error(e);
  }
}

function saveToken(token) {
  localStorage.setItem(JWT_TOKEN_KEY, token);
}

export function getToken() {
  return localStorage.getItem(JWT_TOKEN_KEY);
}