import React from 'react';
import './content.scss';

interface Props {
  children: React.ReactNode,
  direction?: 'column',
  className?: string,
  align?: 'center'
}

const Content = (props: Props):JSX.Element => {
  const {
    children, direction, className, align,
  } = props;
  const BEM = (): string => {
    const classArray: string[] = ['content'];

    if (className) {
      classArray.push(className);
    }
    if (direction) {
      classArray.push(`content--${direction}`);
    }
    if (align) {
      classArray.push(`content--${align}`);
    }
    return classArray.join(' ');
  };
  return (
    <div className={BEM()}>
      {children}
    </div>
  );
};
export default Content;
