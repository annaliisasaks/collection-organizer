import React from 'react';
import Button from '../../components/Button/Button';
import Content from '../../components/Content/Content';

const GalleryPage = ():JSX.Element => (
  <Content direction="column" align="center">
    <h1>Button gallery</h1>
    <Button purpose="primary">Primary</Button>
    <Button purpose="secondary">Secondary</Button>
    <Button purpose="delete">Delete</Button>
  </Content>
);

export default GalleryPage;
