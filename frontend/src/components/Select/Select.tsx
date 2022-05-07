import React from 'react';
import './select.scss';

export interface IOption {
  value: string;
  display: string;
}

interface ISelectProps {
  options: IOption[];
  name: string;
  label: string;
  hideLabel?: boolean;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void,
  value?: string;
}

const Select = (props: ISelectProps): JSX.Element => {
  const {
    options, label, name, hideLabel, className, onChange, value,
  } = props;

  const BEM = (): string => {
    const classArray: string[] = ['select'];

    if (className) {
      classArray.push(className);
    }

    return classArray.join(' ');
  };

  return (
    <>
      {hideLabel ? <label htmlFor={name} hidden>{label}</label> : <label htmlFor={name}>{label}</label> }
      <select name={name} className={BEM()} onChange={onChange} value={value}>
        {options.map((option) => <option key={option.value} value={option.value}>{option.display}</option>)}
      </select>
    </>
  );
};
export default Select;
