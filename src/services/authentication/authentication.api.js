import utils from '../../utils'

export const authenticationErrors = {
  BAD_USER_PASS: 'BAD_USER_PASS'
}

export async function login(userName, password) {
  try {
    let loginResp = await utils.fetchJson('login', {
      method: 'POST',
      body: JSON.stringify({
        email: userName,
        password
      })
    });
    return loginResp;
  } catch(e) {
    console.error(e);
  }
}