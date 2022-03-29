import React from 'react';
import './table.scss';

interface ITableProps {
  children: React.ReactNode;
  className?: 'string';
}

const Table = (props: ITableProps): JSX.Element => {
  const { children, className } = props;
  const BEM = (): string => {
    const classArray: string[] = ['table'];

    if (className) {
      classArray.push(className);
    }

    return classArray.join(' ');
  };
  return (
    <table className={BEM()} cellSpacing="0">
      {children}
    </table>

  );
};
export default Table;
