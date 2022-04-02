import axios from 'axios';

const API = axios.create({
  baseURL: `${process.env.REACT_APP_API_BASE_URL}`,
});

const setAuthroizationHeader = (jwt: string): void => {
  sessionStorage.setItem('token', jwt);
  const tokenExpirationTime = new Date();
  tokenExpirationTime.setHours(tokenExpirationTime.getHours() + 1);
  sessionStorage.setItem('tokenExpirationTime', `${tokenExpirationTime.getTime()}`);
  API.defaults.headers.common.authorization = `Bearer ${jwt}`;
};

const removeAuthorizationHeader = (): void => {
  sessionStorage.removeItem('token');
  sessionStorage.removeItem('tokenExpirationTime');
  API.defaults.headers.common.authorization = '';
};

export { setAuthroizationHeader, removeAuthorizationHeader };
export default API;
