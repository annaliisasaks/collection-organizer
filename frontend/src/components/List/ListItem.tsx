import React from 'react';

interface Props {
  children: React.ReactNode
  className?: string
}

const ListItem = (props: Props):JSX.Element => {
  const { children, className } = props;

  const BEM = (): string => {
    const classArray:string[] = ['list__item'];

    if (className) {
      classArray.push(className);
    }

    return classArray.join(' ');
  };
  return (
    <li className={BEM()}>
      {children}
    </li>
  );
};
export default ListItem;
