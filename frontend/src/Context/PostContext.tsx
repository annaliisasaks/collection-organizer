import React, { useState } from 'react';

export interface IUnit {
  _id: string;
  name: string;
  condition: string;
  location: string;
  size: string;
  material: string;
  story: string;
  imageUrl: string;
}

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
  setUnits: (units: IUnit[]) => void;

}

const unitContextInitial = {
  units: [],
  compare: [],
  isLoggedIn: false,
  addUnit: () => undefined,
  deleteUnit: () => undefined,
  editUnit: () => undefined,
  addCompare: () => undefined,
  deleteCompare: () => undefined,
  setIsLoggedIn: () => undefined,
  setUnits: () => undefined,
};

export const UnitContext = React.createContext<IUnitContext>(unitContextInitial);

export const UnitContextProvider = (props:Props): JSX.Element => {
  const { children } = props;
  const [units, setUnits] = useState<IUnit[]>([]);
  const [compare, setCompare] = useState<IUnit[]>([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const addUnit = (addedUnit: IUnit):void => {
    setUnits([addedUnit, ...units]);
  };

  const deleteUnit = (id: string):void => {
    setUnits(units.filter((unit) => unit._id !== id));
  };

  const editUnit = (editedUnit: IUnit):void => {
    setUnits(units.map((unit) => (unit._id === editedUnit._id ? { ...unit, ...editedUnit } : unit)));
  };

  const addCompare = (id: string): void => {
    const addCompareUnit = units.find((unit) => unit._id === id);
    if (addCompareUnit) {
      setCompare([...compare, addCompareUnit]);
    }
  };

  const deleteCompare = (id: string): void => {
    setCompare(compare.filter((unit) => unit._id !== id));
  };

  const value = {
    units, addUnit, deleteUnit, editUnit, addCompare, compare, deleteCompare, isLoggedIn, setIsLoggedIn, setUnits,
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
