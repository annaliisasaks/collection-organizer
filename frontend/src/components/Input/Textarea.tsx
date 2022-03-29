import React from 'react';
import './textarea.scss';

interface Props {
  className?:string,
  name:string,
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void,
  defaultvalue?: string,
  placeholder?:string,
  rows: number,
  cols: number,
  required?: boolean,
}

const Textarea = (props: Props):JSX.Element => {
  const {
    className, defaultvalue,
  } = props;
  const BEM = (): string => {
    const classArray: string[] = ['textarea'];

    if (className) {
      classArray.push(className);
    }
    return classArray.join(' ');
  };
  return (
    <textarea className={BEM()} defaultValue={defaultvalue || ''} {...props} />
  );
};
export default Textarea;
