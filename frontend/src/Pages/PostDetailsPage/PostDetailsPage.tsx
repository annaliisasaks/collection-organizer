import React, { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import PostContext, { UnitContext } from '../../Context/PostContext';
import Button from '../../components/Button/Button';
import './postDetailsPage.scss';
import Content from '../../components/Content/Content';

const PostDetailsPage = ():JSX.Element => {
  const { id } = useParams();
  const { units, deleteUnit } = useContext(UnitContext);
  const navigate = useNavigate();
  const handleUnitDelete = (deletedId: string): void => {
    deleteUnit(deletedId);
    navigate('/');
  };
  const selectedUnit = units.find((unit) => unit.id.toString() === id);

  return (
    <Content>
      {selectedUnit && (
      <div className="post">
        <div className="post__header">
          <div className="post__button-wrapper">
            <Button className="post__button" purpose="delete" onClick={() => handleUnitDelete(selectedUnit.id)}>Delete</Button>
            <Button className="post__button" purpose="secondary" onClick={() => navigate(`/kirje/muuda/${selectedUnit.id}`)}>Edit</Button>
          </div>
        </div>

        <p className="post__content">{selectedUnit.story}</p>
      </div>
      )}

    </Content>
  );
};

export default PostDetailsPage;
