import React from 'react';
import './grid.scss';

interface IGridProps {
  children: React.ReactNode,
  direction?: 'column',
  className?: string,
  gap?: 'small' | 'medium'
}

const Grid = (props: IGridProps): JSX.Element => {
  const {
    children, direction, className, gap,
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

    return classArray.join(' ');
  };

  return (
    <div className={BEM()}>
      {children}
    </div>
  );
};
export default Grid;
