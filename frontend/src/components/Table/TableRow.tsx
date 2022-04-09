import React from 'react';
import './table.scss';

interface ITableRowProps {
  className?: string,
  children: React.ReactNode;
}

const TableRow = (props: ITableRowProps): JSX.Element => {
  const { className, children } = props;
  const BEM = (): string => {
    const classArray: string[] = ['table-row'];

    if (className) {
      classArray.push(className);
    }

    return classArray.join(' ');
  };

  return (
    <tr {...props} className={BEM()}>
      {children}
    </tr>

  );
};
export default TableRow;
