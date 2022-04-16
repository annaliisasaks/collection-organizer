import { AxiosResponse } from 'axios';
import React, { useState, useContext, useEffect } from 'react';
import API from '../../api';
import UnitContext, { IUnit } from '../../Context/PostContext';
import Card from '../Card/Card';
import Loader from '../Loader/Loader';
import Search from '../Search/Search';
import Separator from '../Separator/Separator';
import UnitTable from '../Templates/UnitTable/UnitTable';

const Main = (): JSX.Element => {
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { units, setUnits } = useContext(UnitContext);
  const filterUnits = (inputValue: string): IUnit[] => {
    if (!inputValue) {
      return units;
    }
    return units.filter((unit: IUnit) => unit.name.toLowerCase().includes(query.toLowerCase()));
  };
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

  const filteredUnits = filterUnits(query);

  return (
    <>
      <Card>
        <Search onButtonClick={setQuery} />
      </Card>
      <Separator type="div" size="medium" color="transparent" />
      {isLoading ? <Loader theme="dark" /> : <UnitTable data={filteredUnits} />}

    </>
  );
};

export default Main;
