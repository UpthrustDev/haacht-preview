import React from 'react';
import _get from 'lodash/get';
import Link from '../shared/Link';
import { getPartOfUrl } from '../../helpers/navigationUrl';

const BrandsStoreLocator = ({ sellingpointContent, location }) => {
  return (
    <div>
      <div
        className={
          sellingpointContent.title
            ? 'brands-store-locator u-display--flex u-justify--center u-lg-justify--end'
            : 'hide'
        }
      >
        <div className="brands-store-locator__box u-radius">
          <div className="u-label u-label--gold u-letter-spacing">
            {sellingpointContent.subTitle}
          </div>
          <h4 className="brands-store-locator__title">
            <Link to={`${getPartOfUrl(location, 2)}/${sellingpointContent.slug}`}>
              {sellingpointContent.title}
            </Link>
          </h4>
          <Link
            to={`${getPartOfUrl(location, 2)}/${sellingpointContent.slug}`}
            className="c-button c-button--round"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="11" viewBox="0 0 8 11">
              <path
                fill="#C2A572"
                fillRule="evenodd"
                d="M6.90685425,33.6568542 L8.65685425,33.6568542 L8.65685425,26.6568542 L1.65685425,26.6568542 L1.65685425,28.4068542 L6.90685425,28.4068542 L6.90685425,33.6568542 Z"
                transform="rotate(45 33.835 14.036)"
              />
            </svg>
          </Link>
        </div>
        <div
          className="brands-store-locator__image u-full u-cover lazy"
          data-src={_get(sellingpointContent, 'backgroundImage.file.url')}
        />
      </div>
    </div>
  );
};

export default BrandsStoreLocator;
