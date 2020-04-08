import utils from 'utils'

export async function getUserInfo() {
  return await utils.fetchJson('users/current');
}