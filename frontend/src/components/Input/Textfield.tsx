import React from 'react';
import './textfield.scss';

interface Props {
  className?:string,
  type: 'text' | 'number',
  name: string,
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
  defaultvalue?: string,
  placeholder?: string,
  required?: boolean,
}

const Textfield = (props: Props):JSX.Element => {
  const {
    className, onChange, defaultvalue,
  } = props;
  const BEM = (): string => {
    const classArray:string[] = ['textfield'];

    if (className) {
      classArray.push(className);
    }
    return classArray.join(' ');
  };
  return (
    <input className={BEM()} onChange={onChange} defaultValue={defaultvalue || ''} {...props} />
  );
};
export default Textfield;
