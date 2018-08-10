import React from 'react';
import filter from 'lodash/filter';
import PropTypes from 'prop-types';
import _get from 'lodash/get';

const BrandsHeader = ({ currentBrand }) => {
  return (
    <div className="c-header">
      <div className="c-header__video u-full">
        <video
          className="brand-beer-video lazy u-object-fit u-full"
          data-object-fit
          autoPlay
          loop
          muted
          playsInline
          poster={_get(currentBrand, 'node.file.url')}
        >
          <source data-src={_get(currentBrand, 'node.video.file.url')} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

BrandsHeader.propTypes = {
  brandCategories: PropTypes.object,
};

export default BrandsHeader;
