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
  const [query, setQuery] = useState({ input: '', category: 'Nimi' });
  const [isLoading, setIsLoading] = useState(false);
  const { units, setUnits } = useContext(UnitContext);
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

  const filteredUnits = filterUnits();

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
