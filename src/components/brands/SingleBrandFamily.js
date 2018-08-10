import React from 'react';
import Link from '../shared/Link';
import find from 'lodash/find';
import { getPartOfUrl } from '../helpers/navigationUrl';
import ReactMarkdown from 'react-markdown';
import Paragraph from '../shared/ReactMarkDown/Paragraph';
import Heading from '../shared/ReactMarkDown/Heading';
import _get from 'lodash/get';

const SingleBrandFamily = ({ currentBrand, location, singleBrandPageData, allFamilies }) => {
  const currentFamily = _get(currentBrand.node, 'family.fields.title');
  const familyDescription = find(
    allFamilies.edges,
    edge => edge.node.familyDescription && edge.node.title === currentFamily
  );
  const bearsInFamily =
    currentBrand.node.beersInFamily &&
    currentBrand.node.beersInFamily.map((item, index) => (
      <div className="brand-card l-col l-col--12 l-md-col--6 l-lg-col--4" key={index}>
        <div className="brand-card__inner">
          <Link
            to={`${getPartOfUrl(location, 3)}/${item.slug}`}
            className="brand-card__wrap u-full"
          >
            <div className="brand-card__image u-full">
              <div className="brand-card__holder u-text--center">
                <div className="brand-card__thumb">
                  <img
                    className="lazy"
                    src={_get(item.fields.packshot.fields, 'file.url')}
                    data-src={_get(item.fields.packshot.fields, 'file.url')}
                    alt={item.title}
                  />
                </div>
              </div>
              <div className="brand-card__label u-display--flex u-align--center u-justify--center">
                <div className="label-inner">
                  {_get(currentBrand.node, 'family.fields.title') &&
                    _get(currentBrand.node, 'category.fields.title') &&
                    currentBrand.node.category.index !== 3 && (
                      <span className="label-family">{_get(item.fields, 'family.title')}</span>
                    )}
                  <span className="label-brand">{item.fields.title}</span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    ));
  return (
    <div className="single-brand-family">
      {currentBrand.node.beersInFamily && (
        <div className="l-container">
          <div className="l-row">
            <div className="l-col l-col--12">
              <div className="block-heading">
                <div className="u-label u-label--gold u-letter-spacing">
                  {singleBrandPageData.familySubTitle}
                </div>
                <h2 className="block-heading__title">{singleBrandPageData.familyTitle}</h2>
                <ReactMarkdown
                  className="common-text"
                  source={_get(familyDescription, 'node.familyDescription.familyDescription')}
                  renderers={{
                    Paragraph: Paragraph,
                    Heading: Heading,
                  }}
                />
              </div>
            </div>
          </div>
          <div className="l-row single-brand-family__grid">{bearsInFamily}</div>
        </div>
      )}
    </div>
  );
};

export default SingleBrandFamily;
