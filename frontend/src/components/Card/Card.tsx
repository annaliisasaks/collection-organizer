import React from 'react';
import './card.scss';

interface ICardBorderRadiusProps {
  top?: 'none';
  bottom?: 'none';
}

interface ICardProps {
  children: React.ReactNode;
  className?: string;
  backgroundColor?: 'white';
  borderRadius?: ICardBorderRadiusProps;
}

const Card = (props: ICardProps): JSX.Element => {
  const {
    children, className, backgroundColor, borderRadius,
  } = props;

  const BEM = (): string => {
    const classArray: string[] = ['card'];

    if (className) {
      classArray.push(className);
    }

    if (backgroundColor) {
      classArray.push('card--white');
    }

    if (borderRadius?.bottom) {
      classArray.push('card--border-radius-bottom-none');
    }

    if (borderRadius?.top) {
      classArray.push('card--border-radius-top-none');
    }

    return classArray.join(' ');
  };

  return (
    <div className={BEM()}>{children}</div>
  );
};

export default Card;
