import React, { useContext } from 'react';
import { useNavigate } from 'react-router';
import Content from '../../components/Content/Content';
import PostForm from '../../components/Templates/PostForm';
import PostContext from '../../Context/PostContext';
import { IUnit } from '../../data/post/postData';
import './addUnitPage.scss';
import coverImg from '../../data/post/coverImg.png';

const AddUnitPage = ():JSX.Element => {
  const { addUnit, units } = useContext(PostContext);
  const navigate = useNavigate();
  const onSave = (unit: IUnit):void => {
    addUnit({
      ...unit,
      id: `${units.length + 1}`,
      name: 'Moto Sport',
      condition: 'Väga hea',
      location: 'Sahtel 2',
      size: 'Tavaline',
      material: 'Papp',
      story: 'Lorem Ipsum lorem ipsum',
      image: coverImg,
    });
    navigate('/');
  };

  return (
    <Content direction="column" align="center">
      <h1>Add a new post</h1>
      <PostForm />

    </Content>
  );
};

export default AddUnitPage;
