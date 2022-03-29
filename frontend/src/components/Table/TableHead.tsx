import React from 'react';
import './table.scss';

interface ITableHeadProps {
  className?: string,
  children: React.ReactNode;
}

const TableHead = (props: ITableHeadProps): JSX.Element => {
  const { className, children } = props;
  const BEM = (): string => {
    const classArray: string[] = ['table-head'];

    if (className) {
      classArray.push(className);
    }

    return classArray.join(' ');
  };

  return (
    <th className={BEM()}>
      {children}
    </th>

  );
};
export default TableHead;
