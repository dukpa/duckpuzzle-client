import utils from '../../utils'

export const BAD_USER_PASS = 'BAD_USER_PASS';

export async function login(userName, password) {
  try {
    let resp = await utils.fetchJson('login', {
      method: 'POST',
      body: JSON.stringify({
        email: userName,
        password
      })
    });
    return resp;
  } catch(e) {
    console.error(e);
  }
}