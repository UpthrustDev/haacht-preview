import React from 'react';

const Image = ({ src, alt }) => {
  return (
    <figure>
      <img src={src} data-src={src} className="lazy" alt={alt} />
      {alt && <figcaption>{alt}</figcaption>}
    </figure>
  );
};

export default Image;
