export const authenticationErrors = {
  BAD_USER_PASS: 'BAD_USER_PASS'
}

export async function login(userName, password) {
  return await _fakeLogin(userName, password);
}

function _fakeLogin(userName, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userName === "jimmy" && password === "test") {
        resolve();
      } else {
        reject({
          name: authenticationErrors.BAD_USER_PASS
        });
      }
    }, 1000);
  });
}