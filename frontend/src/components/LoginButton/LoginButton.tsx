import React, { useContext } from 'react';
import GoogleLogin, { GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';
import { AxiosResponse } from 'axios';
import UnitContext from '../../Context/PostContext';
import api, { setAuthroizationHeader, removeAuthorizationHeader } from '../../api';

const LoginButton = (): JSX.Element => {
  const { setIsLoggedIn } = useContext(UnitContext);

  const handleLoginSuccess = (response: GoogleLoginResponse | GoogleLoginResponseOffline): void => {
    if (!('tokenId' in response)) {
      return;
    }
    api.post(`${process.env.REACT_APP_API_BASE_URL}/auth/google`, { token: response.tokenId })
      .then((tokenResponse: AxiosResponse<{ newJwt: string }>) => {
        if (tokenResponse.data?.newJwt) {
          setAuthroizationHeader(tokenResponse.data.newJwt);
          setIsLoggedIn(true);
        }
      })
      .catch((e) => {
        removeAuthorizationHeader();
        setIsLoggedIn(false);
        console.error('Login failed: ', e);
      });
  };

  const handleLoginFailure = (e: unknown): void => {
    console.error('Failure: ', e);
    removeAuthorizationHeader();
    setIsLoggedIn(false);
  };

  return (
    <GoogleLogin
      clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID || ''}
      buttonText="Logi sisse"
      onSuccess={handleLoginSuccess}
      onFailure={handleLoginFailure}
    />

  );
};

export default LoginButton;
