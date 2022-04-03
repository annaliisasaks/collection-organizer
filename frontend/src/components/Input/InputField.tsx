import React from 'react';
import './inputField.scss';

interface Props {
  className?:string,
  type: 'text' | 'number' | 'file',
  name: string,
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
  defaultValue?: string,
  placeholder?: string,
  required?: boolean,
  multiple?: boolean,
}

const InputField = (props: Props): JSX.Element => {
  const {
    className, onChange, defaultValue, multiple,
  } = props;
  const BEM = (): string => {
    const classArray: string[] = ['input-field'];

    if (className) {
      classArray.push(className);
    }

    return classArray.join(' ');
  };

  return (
    <input className={BEM()} multiple={multiple} onChange={onChange} defaultValue={defaultValue || ''} {...props} />
  );
};

export default InputField;
