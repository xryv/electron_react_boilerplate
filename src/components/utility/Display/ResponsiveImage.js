import React from 'react';

/**
 * ResponsiveImage - A component for displaying responsive images.
 * Loads the appropriate image size based on the viewport width, improving performance.
 *
 * Props:
 * - src (string): The base path for the image without size identifiers.
 * - alt (string): Alternative text for the image.
 * - sizes (object): An object mapping viewport widths to image sizes (e.g., {320: 'small', 768: 'medium', 1024: 'large'}).
 *
 * Example Usage:
 * <ResponsiveImage
 *   src="path/to/image"
 *   alt="A descriptive alternative text"
 *   sizes={{320: '320w', 768: '768w', 1024: '1024w'}}
 * />
 */
const ResponsiveImage = ({ src, alt, sizes }) => {
  // Construct the srcSet attribute from sizes
  const srcSet = Object.entries(sizes)
    .map(([width, size]) => `${src}-${size}.jpg ${width}w`)
    .join(', ');

  // Use the largest size as the default src
  const defaultSrc = `${src}-${Object.values(sizes).pop()}.jpg`;

  return (
    <img
      src={defaultSrc}
      srcSet={srcSet}
      sizes={Object.keys(sizes)
        .map((width) => `(max-width: ${width}px) ${sizes[width]}`)
        .join(', ')}
      alt={alt}
    />
  );
};

export default ResponsiveImage;
