import React from 'react';
import './table.scss';

interface ITableRowProps {
  className?: string,
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent) => void,
}

const TableRow = (props: ITableRowProps): JSX.Element => {
  const { className, children, onClick } = props;
  const BEM = (): string => {
    const classArray: string[] = ['table-row'];

    if (className) {
      classArray.push(className);
    }

    if (onClick) {
      classArray.push('table-row--clickable');
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
