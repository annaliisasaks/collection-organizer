import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AxiosResponse } from 'axios';
import { IImage, IUnit, UnitContext } from '../../Context/PostContext';
import Button from '../../components/Button/Button';
import Content from '../../components/Content/Content';
import Card from '../../components/Card/Card';
import Grid from '../../components/Grid/Grid';
import Image from '../../components/Image/Image';
import Separator from '../../components/Separator/Separator';
import API from '../../api';
import './unitDetailsPage.scss';
import GridColumn from '../../components/Grid/GridColumn';

const UnitDetailsPage = ():JSX.Element => {
  const { id } = useParams();
  const {
    units, deleteUnit, compare, addCompare, setUnits,
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

  const getUnitById = (unitId: string): void => {
    API.get(`/unit/${unitId}`)
      .then((res: AxiosResponse<IUnit>) => setUnits([res.data]));
  };

  useEffect(() => {
    if (id) {
      getUnitById(id);
    }
  }, [id]);

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

          <GridColumn className="unit-page__images">

            <Grid>
              <GridColumn>

                {bigPicture && <Image src={bigPicture.imageUrl} alt={selectedUnit.name} size="xlarge" className="unit-page__main-image" />}
                <Grid>
                  {selectedUnit.images.map((i) => (
                    <GridColumn key={i._id}>
                      <Image
                        src={i.imageUrl}
                        alt={selectedUnit.name}
                        size="small"
                        onClick={() => setBigPicture(i)}
                      />
                    </GridColumn>

                  ))}

                </Grid>
              </GridColumn>

            </Grid>
          </GridColumn>

          <GridColumn width={['xs-6']}>

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
            </p>
            <p className="unit-page__story">
              Lugu:
              {' '}
              {selectedUnit.story}
            </p>
          </GridColumn>
          <GridColumn className="unit-page__buttons">

            <Grid justify="between" direction="column" gap="small">

              <Grid align="end" gap="small" direction="column">
                <Button purpose="delete" onClick={() => handleUnitDelete(selectedUnit._id)}>Kustuta</Button>
                <Button purpose="secondary" onClick={() => navigate(`/kirje/muuda/${selectedUnit._id}`)}>Muuda</Button>
              </Grid>
              <Grid align="end" direction="column">
                <Button purpose="primary" onClick={() => handleAddCompare()}>Lisa võrdlusesse</Button>
              </Grid>

            </Grid>

          </GridColumn>

        </Card>

      )}

    </Content>
  );
};

export default UnitDetailsPage;
