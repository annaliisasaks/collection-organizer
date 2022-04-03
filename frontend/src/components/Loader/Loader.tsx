import React from 'react';
import './loader.scss';

interface ILoaderProps {
  theme?: 'dark' | 'light'
}

const Loader = (props: ILoaderProps): JSX.Element => {
  const { theme } = props;
  const BEM = (): string => {
    const classArray: string[] = ['loader'];

    if (theme) {
      classArray.push(`loader--${theme}`);
    }

    return classArray.join(' ');
  };
  return (
    <div className={BEM()} />

  );
};
export default Loader;
