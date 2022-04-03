import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router';
import { AxiosResponse } from 'axios';
import Content from '../../components/Content/Content';
import PostContext, { IUnit } from '../../Context/PostContext';
import './addUnitPage.scss';
import Card from '../../components/Card/Card';
import UnitForm, { IUnitFormFields } from '../../components/Templates/UnitForm/UnitForm';
import API from '../../api';

const AddUnitPage = ():JSX.Element => {
  const [isLoading, setIsLoading] = useState(false);
  const { addUnit } = useContext(PostContext);
  const navigate = useNavigate();
  const onSave = (unit: IUnitFormFields): void => {
    const formData = new FormData();
    formData.append('file', unit.image);
    formData.append('name', unit.name);
    formData.append('condition', unit.condition);
    formData.append('location', unit.location);
    formData.append('size', unit.size);
    formData.append('material', unit.material);
    formData.append('story', unit.story);
    formData.append('shape', unit.shape);

    setIsLoading(true);
    API.post('/unit', formData, { headers: { 'Content-Type': 'multipart/form-data' } })
      .then((response: AxiosResponse<IUnit>) => {
        addUnit(response.data);
        setIsLoading(false);
        navigate('/');
      })
      .catch((e) => {
        console.log(e);
        setIsLoading(false);
      });
  };

  return (
    <Content direction="column">
      <h1>Lisa uus</h1>
      <Card padding="medium">
        <UnitForm onSave={onSave} isLoading={isLoading} />
      </Card>
    </Content>
  );
};

export default AddUnitPage;