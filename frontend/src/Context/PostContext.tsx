import React, { useState } from 'react';
import { unitsData, IUnit } from '../data/post/postData';

interface Props {
    children:React.ReactNode;
}
interface IUnitContext {
  units: IUnit[];
  compare: IUnit[];
  isLoggedIn: boolean;
  addUnit: (unit: IUnit) => void;
  deleteUnit: (id: string) => void;
  editUnit: (unit: IUnit) => void;
  addCompare: (id: string) => void;
  deleteCompare: (id: string) => void;
  setIsLoggedIn: (state: boolean) => void;

}

const unitContextInitial = {
  units: unitsData,
  compare: unitsData,
  isLoggedIn: false,
  addUnit: () => undefined,
  deleteUnit: () => undefined,
  editUnit: () => undefined,
  addCompare: () => undefined,
  deleteCompare: () => undefined,
  setIsLoggedIn: () => undefined,
};

export const UnitContext = React.createContext<IUnitContext>(unitContextInitial);

export const UnitContextProvider = (props:Props): JSX.Element => {
  const { children } = props;
  const [units, setUnits] = useState(unitsData);
  const [compare, setCompare] = useState<IUnit[]>([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const addUnit = (addedUnit: IUnit):void => {
    setUnits([addedUnit, ...units]);
  };

  const deleteUnit = (id: string):void => {
    setUnits(units.filter((unit) => unit.id !== id));
  };

  const editUnit = (editedUnit: IUnit):void => {
    setUnits(units.map((unit) => (unit.id === editedUnit.id ? { ...unit, ...editedUnit } : unit)));
  };

  const addCompare = (id: string): void => {
    const addCompareUnit = units.find((unit) => unit.id === id);
    if (addCompareUnit) {
      setCompare([...compare, addCompareUnit]);
    }
  };

  const deleteCompare = (id: string): void => {
    setCompare(compare.filter((unit) => unit.id !== id));
  };

  const value = {
    units, addUnit, deleteUnit, editUnit, addCompare, compare, deleteCompare, isLoggedIn, setIsLoggedIn,
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
