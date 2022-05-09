import { AxiosResponse } from 'axios';
import React, { useState, useContext, useEffect } from 'react';
import API from '../../api';
import UnitContext, {
  IFilterQueryParams,
  IInitialPaginationData, initialPaginationData, IPagaintionParams, IPaginationWrapper, IUnit,
} from '../../Context/PostContext';
import Card from '../Card/Card';
import Grid from '../Grid/Grid';
import Loader from '../Loader/Loader';
import Pagination from '../Pagination/Pagination';
import Search from '../Search/Search';
import Separator from '../Separator/Separator';
import UnitTable from '../Templates/UnitTable/UnitTable';

const INITIAL_QUERY = { input: '', category: 'name' };

const Main = (): JSX.Element => {
  const [query, setQuery] = useState(INITIAL_QUERY);
  const [isLoading, setIsLoading] = useState(false);
  const { units, setUnits } = useContext(UnitContext);
  const [paginationData, setPaginationData] = useState<IInitialPaginationData>(initialPaginationData);
  const filterUnits = (): IUnit[] => units.filter((unit: IUnit) => {
    if (query.category === 'Nimi') {
      return (unit.name.toLowerCase().includes(query.input.toLowerCase()));
    }
    if (query.category === 'Seisukord') {
      return (unit.condition.toLowerCase().includes(query.input.toLowerCase()));
    }
    if (query.category === 'Asukoht') {
      return (unit.location.toLowerCase().includes(query.input.toLowerCase()));
    }
    if (query.category === 'Suurus') {
      return (unit.size.toLowerCase().includes(query.input.toLowerCase()));
    }
    if (query.category === 'Kuju') {
      return (unit.shape.toLowerCase().includes(query.input.toLowerCase()));
    }
    if (query.category === 'Materjal') {
      return (unit.material.toLowerCase().includes(query.input.toLowerCase()));
    }
    return units;
  });

  const getUnits = (paginationParams?: IPagaintionParams, filterParams?: IFilterQueryParams): void => {
    setIsLoading(true);
    API.get('/unit', { params: { ...paginationParams, ...filterParams } })
      .then((response: AxiosResponse<IPaginationWrapper<IUnit[]>>) => {
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
    getUnits();
  }, []);

  const handleNextClick = (): void => {
    getUnits({ page: paginationData.nextPage });
  };

  const handlePrevClick = (): void => {
    getUnits({ page: paginationData.prevPage });
  };

  const resetQuery = (): void => {
    setQuery(INITIAL_QUERY);
    getUnits();
  };

  const handleSearch = (_query: { input: string, category: string }): void => {
    const filterQueryParams: IFilterQueryParams = { property: _query.category, value: _query.input };
    getUnits(undefined, filterQueryParams);
  };

  const filteredUnits = filterUnits();

  return (
    <>
      <Card>
        <Search onButtonClick={handleSearch} onClearClick={resetQuery} />
      </Card>
      <Separator type="div" size="medium" color="transparent" />
      {isLoading ? <Loader theme="dark" />
        : (
          <>
            <UnitTable data={filteredUnits} pageLimit={paginationData.limit} currentPage={paginationData.page} />
            <Grid justify="center">
              <Pagination onNextClick={handleNextClick} onPrevClick={handlePrevClick} paginationData={paginationData} />
            </Grid>
          </>
        )}

    </>
  );
};

export default Main;
