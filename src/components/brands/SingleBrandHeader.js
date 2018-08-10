import React from 'react';
import Link from '../shared/Link';
import _get from 'lodash/get';
import _filter from 'lodash/filter';
import ReactMarkdown from 'react-markdown';
import Paragraph from '../shared/ReactMarkDown/Paragraph';
import Heading from '../shared/ReactMarkDown/Heading';
import { getPartOfUrl } from '../helpers/navigationUrl';

const SingleBrandHeader = ({ currentBrandItem, singleBrandPageData, location, awards }) => {
  const filteredAwards = _filter(awards, item => {
    if (_get(item, 'awardImage.field.file.url') && _get(item, 'awardImage.field.file.url') != '') {
      return true;
    }
    return false;
  });
  const awardsDiv = filteredAwards.map((item, index) => (
    <div className="award_header">
      <a target="_blank" href={_get(item, 'link')}>
        <img src={item.awardImage.fields.file.url} />
      </a>
    </div>
  ));
  return (
    <div className="single-brand-intro" itemScope itemType="http://schema.org/Product">
      <div className="l-container">
        <div className="l-row single-brand-intro__inner u-align--center">
          <div className="l-col l-col--12 l-md-col--6 l-lg-col--4 single-brand-intro__image u-text--center">
            <img
              src={_get(currentBrandItem, 'node.packshotHeader.fields.file.url')}
              className="img-resp"
              alt={_get(currentBrandItem, 'node.title')}
              itemProp="image"
            />
          </div>
          <div className="l-col l-col--12 l-md-col--6 l-lg-col--8 single-brand-intro__content">
            <meta itemProp="name" content={currentBrandItem.node.title} />
            <h1>
              {currentBrandItem.node.family &&
                currentBrandItem.node.family.title && (
                  <span className="label-family">{currentBrandItem.node.family.title}</span>
                )}
              {currentBrandItem.node.title}
            </h1>
            <div itemProp="description">
              <ReactMarkdown
                className="content-styles"
                source={
                  _get(currentBrandItem, 'node.shortDescription') ||
                  _get(currentBrandItem, 'node.description')
                }
                renderers={{
                  Paragraph: Paragraph,
                  Heading: Heading,
                }}
              />
            </div>
            {_get(currentBrandItem, 'node.alcoholpercentage') && (
              <div id="alcoholPercentage" className="">
                <div className="percentage">
                  {_get(currentBrandItem, 'node.alcoholpercentage') + ' %'}
                </div>
                <div className="alcoholTitle">
                  {_get(singleBrandPageData, 'alcoholVolumeTitle')}
                </div>
              </div>
            )}
            <div className="single-brand-intro__triggers">
              <div className="awardsHeader__container">{awardsDiv}</div>
              <ul className="u-display--flex u-align--center u-flex-wrap--wrap">
                {_get(currentBrandItem.node.logo, 'slug') && (
                  <li>
                    <Link
                      to={`${getPartOfUrl(location, 1)}/${_get(
                        singleBrandPageData,
                        'packshotsLink.linkSlug'
                      )}/${currentBrandItem.node.logo.slug}`}
                    >
                      {_get(singleBrandPageData, 'packshotsLink.title')}
                    </Link>
                  </li>
                )}
                <li>
                  <a href={currentBrandItem.node.externalUrl} target="_blank">
                    {currentBrandItem.node.externalUrl &&
                      currentBrandItem.node.externalUrl.match(/\www[^$]+/g)}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBrandHeader;
