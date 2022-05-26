import React, { useState } from 'react';

export interface IImage {
  imageUrl: string,
  imageName: string,
  isCoverImage: boolean,
  _id: string
}

export interface IUnit {
  _id: string;
  name: string;
  condition: string;
  location: string;
  size: string;
  shape: string;
  material: string;
  story: string;
  images: IImage[]
}

export interface IGalleryItem {
  _id: string;
  name: string;
  images: IImage[];
}

export interface IPaginationWrapper<T = unknown> extends IInitialPaginationData {
  docs: T,
  pagingCounter: number;
  totalDocs: number;
}

export interface IPagaintionParams {
  page: null | number
}

export interface IFilterQueryParams {
  [k: string]: string
}

export interface IInitialPaginationData {
  hasNextPage: boolean;
  hasPrevPage: boolean;
  page: number;
  totalPages: number;
  nextPage: number | null;
  prevPage: number | null;
  limit: number;
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

export const initialPaginationData: IInitialPaginationData = {
  hasNextPage: false,
  hasPrevPage: false,
  page: 0,
  totalPages: 0,
  nextPage: null,
  prevPage: null,
  limit: 0,
};

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
