import React, { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { UnitContext } from '../../Context/PostContext';
import Button from '../../components/Button/Button';
import Content from '../../components/Content/Content';
import Card from '../../components/Card/Card';
import Grid from '../../components/Grid/Grid';
import Image from '../../components/Image/Image';
import Separator from '../../components/Separator/Separator';
import API from '../../api';

const UnitDetailsPage = ():JSX.Element => {
  const { id } = useParams();
  const {
    units, deleteUnit, compare, addCompare,
  } = useContext(UnitContext);
  const navigate = useNavigate();
  const handleUnitDelete = (idToDelete: string): void => {
    API.delete(`/unit/${idToDelete}`)
      .then(() => {
        deleteUnit(idToDelete);
        navigate('/');
      })
      .catch(console.error);
    // deleteUnit(deletedId);
  };

  const selectedUnit = units.find((unit) => unit._id === id);

  const handleAddCompare = (): void => {
    const isInCompare = !!compare.find((unit) => unit._id === id);

    if (!isInCompare && selectedUnit) {
      addCompare(selectedUnit._id);
    }
  };

  return (
    <Content>
      {selectedUnit && (
        <Card fullWidth>
          <Grid>
            <Image src={selectedUnit.imageUrl} alt={selectedUnit.name} size="large" />
          </Grid>
          <Grid direction="column">
            <h2>{selectedUnit.name}</h2>
            <p>
              Seisukord:
              {' '}
              {selectedUnit.condition}
              <Separator color="transparent" type="hr" size="xsmall" />

              Asukoht:
              {' '}
              {selectedUnit.location}
              <Separator color="transparent" type="hr" size="xsmall" />

              Suurus:
              {' '}
              {selectedUnit.size}
              <Separator color="transparent" type="hr" size="xsmall" />

              Kuju:
              {' '}
              {selectedUnit.shape}
              <Separator color="transparent" type="hr" size="xsmall" />

              Materjal:
              {' '}
              {selectedUnit.material}
              <Separator color="transparent" type="hr" />
              Lugu:
              {' '}
              {selectedUnit.story}
            </p>
          </Grid>
          <Grid between direction="column" gap="small">

            <Grid align="end" gap="small" direction="column">
              <Button purpose="delete" onClick={() => handleUnitDelete(selectedUnit._id)}>Kustuta</Button>
              <Button purpose="secondary" onClick={() => navigate(`/kirje/muuda/${selectedUnit._id}`)}>Muuda</Button>
            </Grid>
            <Grid align="end" direction="column">
              <Button purpose="primary" onClick={() => handleAddCompare()}>Lisa võrdlusesse</Button>
            </Grid>

          </Grid>
        </Card>

      )}

    </Content>
  );
};

export default UnitDetailsPage;
