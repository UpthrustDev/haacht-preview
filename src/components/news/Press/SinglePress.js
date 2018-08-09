import React from 'react';
import ReactMarkdown from 'react-markdown';
import Paragraph from '../../shared/ReactMarkDown/Paragraph';
import PageWrapper from '../../shared/PageWrapper';
import _get from 'lodash/get';
import { convertDate } from '../../../helpers/convertDate';
import Link from '../../shared/Link';
import { getPartOfUrl } from '../../../helpers/navigationUrl';

const SinglePress = ({
  press,
  agePopup,
  cookiesPopup,
  location,
  cfNavigation,
  footerMenu,
  content,
  locale,
  slug_nl,
  slug_nl_be,
  slug_en,
  slug_fr,
  slug_fr_be,
}) => {
  return (
    <PageWrapper
      location={location}
      cfNavigation={cfNavigation}
      footerMenu={footerMenu}
      cookiesPopup={cookiesPopup}
      agePopup={agePopup}
      locale={locale}
      slug_nl={slug_nl}
      slug_nl_be={slug_nl_be}
      slug_en={slug_en}
      slug_fr={slug_fr}
      slug_fr_be={slug_fr_be}
    >
      <div className="c-header">
        <div className="c-header__content u-full u-display--flex u-align--center u-justify--center u-text--center">
          <div className="c-header__back">
            <Link
              to={`${getPartOfUrl(location, 1)}/${_get(content, 'pressLink.slug.slug')}`}
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
                <span>{_get(content, 'pressLink.title')}</span>
              </div>
            </Link>
          </div>
          <div className="c-header__meta">
            <h1 className="c-header__title">{content.title}</h1>
          </div>
        </div>
        <div className="c-header__button">
          <Link
            to={`${getPartOfUrl(location, 1)}/${_get(content, 'contactLink.slug.slug')}`}
            href="/contact/"
            className="c-button c-button--primary c-button--green"
          >
            {_get(content, 'contactLink.title')}
          </Link>
        </div>
        <div
          className="c-header__image u-full u-cover u-cover--center lazy"
          data-src={_get(press, 'pressImage.file.url') || _get(content, 'defaultImage.file.url')}
        />
      </div>

      <div className="content-container">
        <div className="single-press-content content-styles">
          <div className="l-container">
            <div className="l-row u-justify--center">
              <div className="l-col l-col--12 l-md-col--8">
                <div className="press-date">{`${content.publishedOn} ${convertDate(
                  press.published
                )}`}</div>
                <h1>{press.title}</h1>
              </div>
            </div>
            <div className="l-row u-justify--center">
              <div className="l-col l-col--12 l-md-col--8">
                <ReactMarkdown
                  source={_get(press, 'content.childMarkdownRemark.internal.content')}
                  renderers={{ Paragraph }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};
export default SinglePress;
