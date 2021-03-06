import React from 'react';
import './content.scss';

interface IContentProps {
  children: React.ReactNode,
  direction?: 'column',
  className?: string,
  align?: 'center'
}

const Content = (props: IContentProps):JSX.Element => {
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
