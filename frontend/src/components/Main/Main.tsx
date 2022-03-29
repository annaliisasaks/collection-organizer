import React, { useState, useContext } from 'react';
import UnitContext from '../../Context/PostContext';
import { IUnit } from '../../data/post/postData';
import Card from '../Card/Card';
import Search from '../Search/Search';
import Separator from '../Separator/Separator';
import UnitTable from '../Templates/UnitTable/UnitTable';

const Main = (): JSX.Element => {
  const [query, setQuery] = useState('');
  const { units } = useContext(UnitContext);
  const filterUnits = (inputValue: string): IUnit[] => {
    if (!inputValue) {
      return units;
    }
    return units.filter((unit: IUnit) => unit.name.toLowerCase().includes(query.toLowerCase()));
  };

  const filteredUnits = filterUnits(query);

  return (
    <div className="main">
      <Card>
        <Search onButtonClick={setQuery} />
      </Card>
      <Separator type="div" size="medium" color="transparent" />
      <UnitTable data={filteredUnits} />
    </div>
  );
};

export default Main;
