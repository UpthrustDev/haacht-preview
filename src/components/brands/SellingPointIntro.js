import React from 'react';
import Link from '../shared/Link';

const SellingPointIntro = ({ sellingPointIntro, currentPage, location }) => {
  return (
    <div
      className={
        sellingPointIntro.title
          ? 'block-storelocator block-storelocator--green u-text--center'
          : 'hide'
      }
    >
      <div className="block-storelocator__inner u-radius">
        <div className="l-container">
          <div className="l-row">
            <div className="l-col l-col--12">
              <div className="u-label u-label--gold u-letter-spacing">
                {sellingPointIntro.subTitle}
              </div>
              <h3 className="block-storelocator__title">
                {currentPage === 'merken' && sellingPointIntro.title + '?'}
              </h3>
              <Link
                to={`${location.pathname}/${sellingPointIntro.slug}`}
                className="c-button c-button--primary c-button--green u-radius--pill"
              >
                {sellingPointIntro.buttonText}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellingPointIntro;
