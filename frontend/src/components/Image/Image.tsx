import React from 'react';
import './image.scss';

interface IImageProps {
  src: string,
  alt: string,
  size?: 'tiny' | 'small' | 'large',
  className?: string
}

const Image = (props: IImageProps): JSX.Element => {
  const {
    src, alt, size, className,
  } = props;
  const BEM = (): string => {
    const classArray: string[] = ['image'];

    if (className) {
      classArray.push(className);
    }

    if (size) {
      classArray.push(`image--${size}`);
    }

    return classArray.join(' ');
  };

  return (
    <div className={BEM()}>
      <img src={src} alt={alt} className="image-inner" />
    </div>
  );
};
export default Image;
