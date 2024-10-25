import * as React from "react";
import { useState } from "react";

import placeholderImage from "/placeholder.jpg";

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
}

const Image = ({
  src,
  alt,
  className,
  width = "auto",
  height = "auto",
  ...restProps
}: ImageProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const showPlaceholderImage = error || isLoading;

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const handleImageError = (e) => {
    setError(true);
    e.target.alt = "Image failed to load";
  };

  return (
    <img
      src={showPlaceholderImage ? placeholderImage : src}
      alt={alt}
      className={className}
      width={width}
      height={height}
      onLoad={handleImageLoad}
      onError={handleImageError}
      {...restProps}
    />
  );
};

export default Image;
