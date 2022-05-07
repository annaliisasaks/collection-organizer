import React from 'react';
import './textarea.scss';

interface Props {
  className?:string,
  name:string,
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void,
  defaultValue?: string,
  placeholder?:string,
  rows: number,
  cols: number,
  required?: boolean,
}

const Textarea = (props: Props):JSX.Element => {
  const {
    className, defaultValue, ...rest
  } = props;
  const BEM = (): string => {
    const classArray: string[] = ['textarea'];

    if (className) {
      classArray.push(className);
    }
    return classArray.join(' ');
  };
  return (
    <textarea className={BEM()} defaultValue={defaultValue || ''} {...rest} />
  );
};
export default Textarea;
