import axios from 'axios';

const API = axios.create({
  baseURL: `${process.env.REACT_APP_API_BASE_URL}`,
});

API.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401 || error.response.status === 403) {
      sessionStorage.clear();
      window.location.reload();
    }
    return Promise.reject(error);
  },
);

const setAuthorizationHeaderAfterRefresh = (jwt: string): void => {
  API.defaults.headers.common.authorization = `Bearer ${jwt}`;
};

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

export { setAuthroizationHeader, removeAuthorizationHeader, setAuthorizationHeaderAfterRefresh };
export default API;
