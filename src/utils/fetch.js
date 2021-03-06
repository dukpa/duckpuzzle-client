import {getToken, loginUrl} from '../services/authentication/authentication.api';

export const UNAUTHORIZED = 'UNAUTHORIZED';

const BASE_URL = process.env.REACT_APP_SERVER_URL;

function addDevWait() {
  return new Promise(resolve => {
    if (process.env.NODE_ENV === 'development') {
      let delay = parseInt(Math.random()*700 + 300);
      setTimeout(resolve, delay);
    } else {
      resolve();
    }
  });
}

export default async function(url, args) {
  let ret = {
    success: false,
    data: null,
    error: null
  };
  
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

  try {
    await addDevWait();
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
      ret.data = json.data;
    } else {
      ret.success = false;
      ret.error = json.error;
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