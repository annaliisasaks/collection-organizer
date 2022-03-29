import React from 'react';
import './tag.scss';

interface Props {
  children: React.ReactNode,
  className?:string,
  purpose?:'going' | 'default',
}

const Tag = (props: Props):JSX.Element => {
  const { children, className, purpose } = props;
  const BEM = (): string => {
    const classArray:string[] = ['tag'];

    if (className) {
      classArray.push(className);
    }
    if (purpose) {
      classArray.push(`tag--${purpose}`);
    }
    return classArray.join(' ');
  };
  return (
    <div className={BEM()}>
      {children}
    </div>
  );
};
export default Tag;
