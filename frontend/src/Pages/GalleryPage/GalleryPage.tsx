import { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import API from '../../api';
import Image from '../../components/Image/Image';
import Card from '../../components/Card/Card';
import Content from '../../components/Content/Content';
import {
  IGalleryItem, IInitialPaginationData, initialPaginationData, IPagaintionParams, IPaginationWrapper,
} from '../../Context/PostContext';
import Grid from '../../components/Grid/Grid';
import GridColumn from '../../components/Grid/GridColumn';
import './galleryPage.scss';
import Pagination from '../../components/Pagination/Pagination';
import Loader from '../../components/Loader/Loader';

const GalleryPage = ():JSX.Element => {
  const [units, setUnits] = useState<IGalleryItem[]>([]);
  const [paginationData, setPaginationData] = useState<IInitialPaginationData>(initialPaginationData);
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const getImages = (paginationParams?: IPagaintionParams): void => {
    setIsLoading(true);
    API.get('/unit/images', { params: paginationParams })
      .then((response: AxiosResponse<IPaginationWrapper<IGalleryItem[]>>) => {
        setUnits(response.data.docs);
        setPaginationData(response.data);
      })
      .catch((error) => {
        console.error('We have a server error', error);
        setUnits([]);
        setPaginationData(initialPaginationData);
      })
      .finally(() => setIsLoading(false));
  };
  useEffect(() => {
    getImages();
  }, []);

  const getImageSrc = (unit: IGalleryItem): string => {
    const covImage = unit.images.find((img) => img.isCoverImage);
    return covImage?.imageUrl || unit.images[0].imageUrl;
  };

  const handleNextClick = (): void => {
    getImages({ page: paginationData.nextPage });
  };

  const handlePrevClick = (): void => {
    getImages({ page: paginationData.prevPage });
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Content direction="column">
      <h1 className="sr-only">Galerii</h1>
      <Grid gap="small">
        {units.map((unit) => (
          <GridColumn width={['lg-3', 'xs-6']} key={unit._id}>
            <Card
              className="gallery__card"
              onClick={() => navigate(`/kirje/${unit._id}`)}
            >
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
        {!!units.length && (
          <Grid justify="center">
            <Pagination
              onNextClick={handleNextClick}
              onPrevClick={handlePrevClick}
              paginationData={paginationData}
            />
          </Grid>
        )}
      </Grid>
    </Content>

  );
};

export default GalleryPage;
