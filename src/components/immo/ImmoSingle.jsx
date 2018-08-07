import React from 'react';
import Link from '../shared/Link';
import PageWrapper from '../shared/PageWrapper';
import FlickityComponent from '../shared/Flickity';
import { convertUrl, getPartOfUrl } from '../helpers/navigationUrl';
import _find from 'lodash/find';
import _get from 'lodash/get';
import _filter from 'lodash/filter';
import _split from 'lodash/split';
import GoogleMap from './GoogleMap';
import ImmoSingleDetails from './ImmoSingleDetails';

const flickityOptions = {
  prevNextButtons: true,
  pageDots: true,
  bgLazyLoad: 3,
  draggable: true,
  wrapAround: true,
  setGallerySize: false
};
const getPand = (pand, content, immoContent, location) => {
  return (
    <div className="immo-container">
      <div className="c-header__back">
        <Link
          to={`${getPartOfUrl(location, 1)}/${_get(immoContent, 'allPropertiesSlug.slug')}`}
          className="c-button c-button--primary c-button--back u-radius"
        >
          <div className="c-button--back__inner">
            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="11" viewBox="0 0 8 11">
              <path
                fill="#C2A572"
                fillRule="evenodd"
                d="M6.90685425,33.6568542 L8.65685425,33.6568542 L8.65685425,26.6568542 L1.65685425,26.6568542 L1.65685425,28.4068542 L6.90685425,28.4068542 L6.90685425,33.6568542 Z"
                transform="rotate(45 33.835 14.036)"
              />
            </svg>
            <span>{immoContent.allProperties}</span>
          </div>
        </Link>
      </div>
      <div className="immo-content immo-content-single">
        <div className="immo-content-single__images">
          <FlickityComponent
            className="immo-content-single__slider property-images-slider js-property-images-slider u-full"
            itemClassName="property-images-slider__slide"
            items={_get(pand, 'node.media')}
            options={flickityOptions}
            callback={(item, index) => (
              <div key={index} className="property-images-slider__slide">
                <div
                  className="u-full u-cover u-cover--center"
                  data-flickity-bg-lazyload={_get(item, 'fields.file.url')}
                />
              </div>
            )}
          />
        </div>
        <ImmoSingleDetails content={content} pand={pand} />
      </div>
      <div className="immo-map">
        <GoogleMap
          isMarkerShown
          panden={pand}
          single
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBembFOoC09TZ4hEAq8K38Tu5V6ni974P0&v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100%`, marginTop: '80px' }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    </div>
  );
};

const ImmoSingle = ({
  navigation,
  cfNavigation,
  locale,
  agePopup,
  cookiesPopup,
  panden,
  immoContent,
  allProperties,
  allPropertiesSlug,
  location,
  content,
  footerMenu,
  slug_nl,
  slug_en,
  slug_fr,
  slug_fr_be,
  changeLanguage
}) => {
  return (
    <PageWrapper
      white
      navigation={navigation}
      cfNavigation={cfNavigation}
      locale={locale}
      agePopup={agePopup}
      noFooter
      footerMenu={footerMenu}
      location={location}
      cookiesPopup={cookiesPopup}
      slug_nl={slug_nl}
      slug_en={slug_en}
      slug_fr={slug_fr}
      slug_fr_be={slug_fr_be}
      title={`${panden.edges[0].node.title} | Brouwerij Haacht`}
      changeLanguage={changeLanguage}
    >
      {getPand(panden.edges[0], content, immoContent, location)}
    </PageWrapper>
  );
};

export default ImmoSingle;
