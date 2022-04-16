import React from 'react';
import './image.scss';

interface IImageProps {
  src: string,
  alt: string,
  size?: 'tiny' | 'small' | 'large' | 'xlarge',
  className?: string,
  onClick?: () => void,
  isHighlighted?: boolean
}

const Image = (props: IImageProps): JSX.Element => {
  const {
    src, alt, size, className, onClick, isHighlighted,
  } = props;
  const BEM = (): string => {
    const classArray: string[] = ['image'];

    if (className) {
      classArray.push(className);
    }

    if (size) {
      classArray.push(`image--${size}`);
    }

    if (isHighlighted) {
      classArray.push('image--highlighted');
    }

    if (onClick) {
      classArray.push('image--clickable');
    }

    return classArray.join(' ');
  };

  if (onClick) {
    return (
      <div className={BEM()} onClick={onClick} onKeyDown={onClick} role="button" tabIndex={0}>
        <img src={src} alt={alt} className="image-inner" />
      </div>
    );
  }

  return (
    <div className={BEM()}>
      <img src={src} alt={alt} className="image-inner" />
    </div>
  );
};
export default Image;
