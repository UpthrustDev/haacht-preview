import React from 'react';
import ReactFlickity from 'react-flickity-component';
import 'flickity-bg-lazyload';
import isEmpty from 'lodash/isEmpty';
import _map from 'lodash/map';
import _get from 'lodash/get';

const Flickity = isEmpty(ReactFlickity) ? 'div' : ReactFlickity;

const FlickityComponent = ({ className, items, itemClassName, options, callback, innerRef }) => {
  console.log(items)
  return (
    <Flickity className={className} options={options} ref={innerRef}>
      {_map(items, (item, index) => callback(item, index, itemClassName))}
    </Flickity>
  );
};

FlickityComponent.defaultProps = {
  options: {
    bgLazyLoad: true,
    pageDots: false,
    prevNextButtons: true,
    wrapAround: true,
  },
  callback: (item, index, itemClassName) => {
    console.log(item)
    return (
      <div
        key={index}
        className={itemClassName}
        data-flickity-bg-lazyload={_get(item, 'fields.file.url').slice(2)}
        style={{backgroundImage: _get(item, 'fields.file.url').slice(2) }}
      />
    );
  },
};

export default FlickityComponent;
