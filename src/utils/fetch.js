import {getToken, loginUrl} from '../services/authentication/authentication.api';

export const UNAUTHORIZED = 'UNAUTHORIZED';

const BASE_URL = process.env.REACT_APP_SERVER_URL;

export default async function(url, args) {
  let token;
  if (url !== loginUrl) {
    token = getToken();
    if (!token) {
      ret.success = false;
      ret.error = {
        name: UNAUTHORIZED
      };
      return ret;
    }
  }
  
  url = `${BASE_URL}/${url}`;
  let ret = {
    success: false,
    data: null,
    error: null
  };

  try {
    let resp = await fetch(url, {
      ...args,
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': token
      }
    });
    let json = await resp.json();
    if (resp.ok) {
      ret.success = true;
      ret.data = json;
    } else {
      ret.success = false;
      ret.error = json;
    }
  } catch(e) {
    ret.success = false;
    ret.error = {
      name: 'UNKNOWN_ERROR'
    };
    console.error(e);
  }
  return ret;
}