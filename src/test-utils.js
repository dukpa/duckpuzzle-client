import {login} from 'services/authentication/authentication.api';

export async function loginAdmin() {
  await login('jimmy@example.com', 'test');
}