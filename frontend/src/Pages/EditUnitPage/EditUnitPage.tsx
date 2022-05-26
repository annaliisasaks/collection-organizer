import { AxiosResponse } from 'axios';
import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router';
import API from '../../api';
import Card from '../../components/Card/Card';
import Content from '../../components/Content/Content';
import UnitForm, { IUnitFormFields } from '../../components/Templates/UnitForm/UnitForm';
import UnitContext, { IUnit } from '../../Context/AppContext';

const EditUnitPage = ():JSX.Element => {
  const { units, editUnit } = useContext(UnitContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const currentUnit = units.find((unit) => unit._id === id);
  const onSave = (unit: IUnitFormFields): void => {
    if (currentUnit && unit.name) {
      const formData = new FormData();
      Array.from(unit.images).forEach((i) => formData.append('files', i));
      formData.append('name', unit.name);
      formData.append('condition', unit.condition);
      formData.append('location', unit.location);
      formData.append('size', unit.size);
      formData.append('material', unit.material);
      formData.append('story', unit.story);
      formData.append('shape', unit.shape);
      formData.append('coverImageIndex', unit.coverImageIndex);

      API.put(`/unit/${id}`, formData, { headers: { 'Content-Type': 'multipart/form-data' } })
        .then((response: AxiosResponse<IUnit>) => {
          if (response.data) {
            editUnit(response.data);
            navigate('/');
          }
        })
        .catch(console.error);
    }
  };
  return (
    <Content direction="column">
      <Card fullWidth>
        <UnitForm currentFormFields={currentUnit} onSave={onSave} />
      </Card>
    </Content>
  );
};

export default EditUnitPage;
