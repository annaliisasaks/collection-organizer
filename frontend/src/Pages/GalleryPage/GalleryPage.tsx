import React from 'react';
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';
import Content from '../../components/Content/Content';
import Loader from '../../components/Loader/Loader';

const GalleryPage = ():JSX.Element => (
  <Content direction="column" align="center">
    <h1>Button gallery</h1>
    <Button purpose="primary">Primary</Button>
    <Button purpose="secondary">Secondary</Button>
    <Button purpose="delete">Delete</Button>
    <Card>
      <Loader />
    </Card>
    <Loader theme="dark" />

  </Content>
);

export default GalleryPage;
