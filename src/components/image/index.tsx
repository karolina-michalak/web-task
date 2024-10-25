import * as React from "react";
import { SyntheticEvent, useState } from "react";

import placeholderImage from "/placeholder.jpg";

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
}

const Image = ({
  className,
  width = "auto",
  height = "auto",
  ...restProps
}: ImageProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const { src, onLoad, onError } = restProps;

  const showPlaceholderImage = error || isLoading;

  const handleImageLoad = (event: SyntheticEvent<HTMLImageElement, Event>) => {
    setIsLoading(false);
    onLoad && onLoad(event);
  };

  const handleImageError = (event: SyntheticEvent<HTMLImageElement, Event>) => {
    setError(true);
    (event.target as HTMLImageElement).alt = "Image failed to load";
    onError && onError(event);
  };

  return (
    <img
      {...restProps}
      src={showPlaceholderImage ? placeholderImage : src}
      className={className}
      width={width}
      height={height}
      onLoad={handleImageLoad}
      onError={handleImageError}
    />
  );
};

export default Image;
