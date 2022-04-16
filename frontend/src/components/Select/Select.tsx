import React from 'react';
import './select.scss';

interface ISelectProps {
  options: string[];
  name: string;
  label: string;
  hideLabel?: boolean;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void,
}

const Select = (props: ISelectProps): JSX.Element => {
  const {
    options, label, name, hideLabel, className, onChange,
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
      <select name={name} className={BEM()} onChange={onChange}>
        {options.map((option, index) => <option key={index} value={option}>{option}</option>)}
      </select>
    </>
  );
};
export default Select;
