const BASE_URL = process.env.REACT_APP_SERVER_URL;

export default async function(url, args) {
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
        'Content-Type': 'application/json'
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
  }
  return ret;
}