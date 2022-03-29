import React, { useState } from 'react';
import { unitsData, IUnit } from '../data/post/postData';

interface Props {
    children:React.ReactNode;
}
interface IUnitContext {
  units: IUnit[];
  addUnit: (unit: IUnit) => void;
  deleteUnit: (id: number) => void;
  editUnit: (unit: IUnit) => void;
}

const unitContextInitial = {
  units: unitsData,
  addUnit: () => undefined,
  deleteUnit: () => undefined,
  editUnit: () => undefined,
};

export const UnitContext = React.createContext<IUnitContext>(unitContextInitial);

export const UnitContextProvider = (props:Props): JSX.Element => {
  const { children } = props;
  const [units, setUnits] = useState(unitsData);

  const addUnit = (addedUnit: IUnit):void => {
    setUnits([addedUnit, ...units]);
  };

  const deleteUnit = (id: number):void => {
    setUnits(units.filter((unit) => unit.id !== id));
  };

  const editUnit = (editedUnit: IUnit):void => {
    setUnits(units.map((unit) => (unit.id === editedUnit.id ? { ...unit, ...editedUnit } : unit)));
  };

  const value = {
    units, addUnit, deleteUnit, editUnit,
  };
  return (
    <UnitContext.Provider
      value={value}
    >
      {children}
    </UnitContext.Provider>
  );
};

export default UnitContext;
