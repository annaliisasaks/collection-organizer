import React, { useContext, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { IImage, UnitContext } from '../../Context/PostContext';
import Button from '../../components/Button/Button';
import Content from '../../components/Content/Content';
import Card from '../../components/Card/Card';
import Grid from '../../components/Grid/Grid';
import Image from '../../components/Image/Image';
import Separator from '../../components/Separator/Separator';
import API from '../../api';
import './unitDetailsPage.scss';

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
  const [bigPicture, setBigPicture] = useState(selectedUnit?.images[0]);

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
          <Grid gap="medium">

            <Grid direction="column" gap="medium">
              {bigPicture && <Image src={bigPicture.imageUrl} alt={selectedUnit.name} size="xlarge" className="unit-page__main-image" />}
              <Grid>
                {selectedUnit.images.map((i) => (
                  <Grid width="small" gap="small">
                    <Image
                      key={i._id}
                      src={i.imageUrl}
                      alt={selectedUnit.name}
                      size="small"
                      onClick={() => setBigPicture(i)}
                    />
                  </Grid>
                ))}
              </Grid>
            </Grid>

            <Grid direction="column" width="medium">
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
            <Grid between direction="column" gap="small" width="medium">

              <Grid align="end" gap="small" direction="column">
                <Button purpose="delete" onClick={() => handleUnitDelete(selectedUnit._id)}>Kustuta</Button>
                <Button purpose="secondary" onClick={() => navigate(`/kirje/muuda/${selectedUnit._id}`)}>Muuda</Button>
              </Grid>
              <Grid align="end" direction="column">
                <Button purpose="primary" onClick={() => handleAddCompare()}>Lisa võrdlusesse</Button>
              </Grid>

            </Grid>
          </Grid>

        </Card>

      )}

    </Content>
  );
};

export default UnitDetailsPage;
