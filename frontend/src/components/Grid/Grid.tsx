import React from 'react';
import './grid.scss';

interface IGridProps {
  children: React.ReactNode,
  direction?: 'column',
  className?: string,
  gap?: 'small' | 'medium',
  align?: 'start' | 'center' | 'end',
  between?: boolean,
}

const Grid = (props: IGridProps): JSX.Element => {
  const {
    children, direction, className, gap, align, between,
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

    if (between) {
      classArray.push('grid--between');
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
