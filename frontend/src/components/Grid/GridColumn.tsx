import React from 'react';
import './grid.scss';

interface IGridColumnProps {
  children: React.ReactNode,
  className?: string,
  width?: TGridColumnWidth[],
}

type TGridColumnWidth = 'xs-6' | 'lg-3' | 'lg-2' | 'lg-4'

const GridColumn = (props: IGridColumnProps): JSX.Element => {
  const {
    children, className, width,
  } = props;
  const BEM = (): string => {
    const classArray: string[] = ['grid-column'];

    if (className) {
      classArray.push(className);
    }

    if (width) {
      width.map((unit) => classArray.push(`grid-column--${unit}`));
    }

    return classArray.join(' ');
  };

  return (
    <div className={BEM()}>
      {children}
    </div>
  );
};
export default GridColumn;
