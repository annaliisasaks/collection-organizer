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
  padding?: 'medium'
  fullWidth?: boolean
  onClick?: (event: React.MouseEvent) => void,
}

const Card = (props: ICardProps): JSX.Element => {
  const {
    children, className, backgroundColor, borderRadius, padding, fullWidth, onClick,
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

    if (padding) {
      classArray.push(`card--padding-${padding}`);
    }

    if (fullWidth) {
      classArray.push('card--wide');
    }

    if (onClick) {
      classArray.push('card--clickable');
    }

    return classArray.join(' ');
  };

  return (
    <div {...props} className={BEM()}>{children}</div>
  );
};

export default Card;
