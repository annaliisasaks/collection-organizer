import React from 'react';
import './separator.scss';

interface ISeparatorProps {
  type: 'div' | 'hr',
  size?: 'small' | 'medium',
  color?: 'transparent'
}

const Separator = (props: ISeparatorProps): JSX.Element => {
  const { type, size, color } = props;
  const BEM = (): string => {
    const classArray: string[] = ['separator'];

    if (type) {
      classArray.push(`separator__${type}`);
    }

    if (size) {
      classArray.push(`separator--${size}`);
    }

    if (color) {
      classArray.push(`separator--${color}`);
    }

    return classArray.join(' ');
  };
  return (
    <>
      {type === 'div' ? <div className={BEM()} /> : <hr className={BEM()} />}
    </>

  );
};
export default Separator;
