import React, { useContext } from 'react';
import Card from '../../components/Card/Card';
import Content from '../../components/Content/Content';
import Grid from '../../components/Grid/Grid';
import GridColumn from '../../components/Grid/GridColumn';
import Image from '../../components/Image/Image';
import Separator from '../../components/Separator/Separator';
import UnitContext from '../../Context/PostContext';

const ComparePage = ():JSX.Element => {
  const { compare } = useContext(UnitContext);
  return (
    <Content direction="column" align="center">
      <h1 className="sr-only">Võrdlus</h1>
      {compare && compare.map((unit) => (
        <>
          <Card fullWidth>
            <Grid gap="medium">

              {unit.images.map((i) => (
                <GridColumn width={['lg-2']}>
                  <Image key={i._id} src={i.imageUrl} alt={unit.name} size="large" />
                </GridColumn>
              ))}

              <GridColumn width={['lg-2']}>
                <h2>{unit.name}</h2>
                <p>
                  Seisukord:
                  {' '}
                  {unit.condition}
                  <br />

                  Asukoht:
                  {' '}
                  {unit.location}
                  <br />

                  Suurus:
                  {' '}
                  {unit.size}
                  <br />

                  Kuju:
                  {' '}
                  {unit.shape}
                  <br />

                  Materjal:
                  {' '}
                  {unit.material}
                </p>

              </GridColumn>
              <GridColumn>
                <p>
                  Lugu:
                  {' '}
                  {unit.story}
                </p>
              </GridColumn>

            </Grid>

          </Card>
          <Separator color="transparent" type="div" size="small" />
        </>
      ))}

    </Content>
  );
};

export default ComparePage;
