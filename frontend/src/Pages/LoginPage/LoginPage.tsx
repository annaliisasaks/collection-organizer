import React from 'react';
import Content from '../../components/Content/Content';
import LoginButton from '../../components/LoginButton/LoginButton';

const LoginPage = (): JSX.Element => (
  <Content align="center" direction="column">
    <h1>Logi sisse</h1>
    <LoginButton />

  </Content>

);

export default LoginPage;
