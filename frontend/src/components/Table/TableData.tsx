import React from 'react';
import './table.scss';

interface ITableDataProps {
  className?: string,
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent) => void,
}

const TableData = (props: ITableDataProps): JSX.Element => {
  const { className, children, onClick } = props;
  const BEM = (): string => {
    const classArray: string[] = ['table-data'];

    if (className) {
      classArray.push(className);
    }

    return classArray.join(' ');
  };

  return (
    <td {...props} className={BEM()}>
      {children}
    </td>

  );
};
export default TableData;
