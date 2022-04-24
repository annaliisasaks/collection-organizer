import { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import API from '../../api';
import Image from '../../components/Image/Image';
import Card from '../../components/Card/Card';
import Content from '../../components/Content/Content';
import { IUnit } from '../../Context/PostContext';
import Grid from '../../components/Grid/Grid';
import GridColumn from '../../components/Grid/GridColumn';
import './galleryPage.scss';

const GalleryPage = ():JSX.Element => {
  const [units, setUnits] = useState<IUnit[]>([]);
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const getUnits = (): void => {
    setIsLoading(true);
    API.get('/unit')
      .then((response: AxiosResponse<IUnit[]>) => setUnits(response.data))
      .catch((error) => {
        console.error('We have a server error', error);
        setUnits([]);
      })
      .finally(() => setIsLoading(false));
  };
  useEffect(() => {
    getUnits();
  }, []);

  const getImageSrc = (unit: IUnit): string => {
    const covImage = unit.images.find((img) => img.isCoverImage);
    return covImage?.imageUrl || unit.images[0].imageUrl;
  };

  return (
    <Content>
      <h1 className="sr-only">Galerii</h1>
      <Grid gap="small">
        {units.map((unit, index) => (
          <GridColumn width={['lg-3', 'xs-6']} key={index}>
            <Card className="gallery__card" onClick={() => navigate(`/kirje/${unit._id}`)}>
              <Grid direction="column" gap="small" align="center">
                <Image
                  src={getImageSrc(unit)}
                  alt={unit.name}
                  className="gallery__image"
                />
                <h2>{unit.name}</h2>

              </Grid>

            </Card>
          </GridColumn>

        ))}
      </Grid>

    </Content>
  );
};

export default GalleryPage;
