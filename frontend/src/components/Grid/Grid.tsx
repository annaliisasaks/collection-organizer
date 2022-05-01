import React from 'react';
import './grid.scss';

interface IGridProps {
  children: React.ReactNode;
  direction?: 'column';
  className?: string;
  gap?: 'small' | 'medium';
  align?: 'start' | 'center' | 'end';
  width?: 'max' | 'medium' | 'small';
  justify?: 'center' | 'between';
}

const Grid = (props: IGridProps): JSX.Element => {
  const {
    children, direction, className, gap, align, width, justify,
  } = props;
  const BEM = (): string => {
    const classArray: string[] = ['grid'];

    if (className) {
      classArray.push(className);
    }

    if (direction) {
      classArray.push(`grid--${direction}`);
    }

    if (gap) {
      classArray.push(`grid--gap-${gap}`);
    }

    if (align) {
      classArray.push(`grid--align-${align}`);
    }

    if (width) {
      classArray.push(`grid--${width}`);
    }

    if (justify) {
      classArray.push(`grid--justify-${justify}`);
    }

    return classArray.join(' ');
  };

  return (
    <div className={BEM()}>
      {children}
    </div>
  );
};
export default Grid;
