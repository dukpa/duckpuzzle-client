import fetch from 'utils/fetch'

export async function newRequest() {
  return await fetch('request', {
    method: 'PUT'
  });
}