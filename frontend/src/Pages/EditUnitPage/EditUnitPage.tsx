import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router';
import Content from '../../components/Content/Content';
import UnitContext, { IUnit } from '../../Context/PostContext';

const EditUnitPage = ():JSX.Element => {
  const { units, editUnit } = useContext(UnitContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const currentUnit = units.find((unit) => unit._id === id);

  const onSave = (unit: IUnit): void => {
    if (currentUnit && unit.name && unit.story) {
      editUnit({
        ...currentUnit,
        name: unit.name,
        story: unit.story,
      });
    }
    navigate('/');
  };
  return (
    <Content direction="column">
      <h1>Edit post</h1>
      <p>Post not found</p>
    </Content>
  );
};

export default EditUnitPage;
