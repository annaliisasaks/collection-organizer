import React from 'react';
import './list.scss';

interface Props {
  children: React.ReactNode
  className?: string;
  direction?:'horizontal';
  fullWidth?: boolean;
}

const List = (props: Props):JSX.Element => {
  const {
    children, className, direction, fullWidth,
  } = props;

  const BEM = (): string => {
    const classArray:string[] = ['list'];

    if (direction) {
      classArray.push(`list--${direction}`);
    }

    if (fullWidth) {
      classArray.push('list--full-width');
    }

    if (className) {
      classArray.push(className);
    }

    return classArray.join(' ');
  };
  return (
    <ul className={BEM()}>
      {children}
    </ul>
  );
};
export default List;
