import utils from '../../utils'

export async function getUserInfo() {
  try {
    let resp = await utils.fetchJson('users/current');
    return resp;
  } catch (e) {
    console.error(e);
  }
}