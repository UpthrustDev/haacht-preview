import React from 'react';
import Link from '../shared/Link';
import { convertDate } from '../helpers/convertDate';
import _get from 'lodash/get';
import ReactMarkDown from 'react-markdown';
import Image from './Image';
import { getPartOfUrl } from '../helpers/navigationUrl';

const NewsItem = ({ news, content, location }) => {
  return (
    <article className="single-post">
      <div className="single-post__header c-header c-header--large">
        <div className="c-header__back">
          <Link
            to={`${getPartOfUrl(location, 1)}/${content.newsLink.slug}`}
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
              <span>{content.alleNieuws}</span>
            </div>
          </Link>
        </div>
        <div
          className="block-header__image u-full u-cover u-cover--center lazy"
          data-src={_get(news, 'node.titleImage.fields.file.url')}
        />
      </div>
      <div className="single-post__wrap">
        <div className="l-container">
          <div className="l-row u-justify--center">
            <div className="l-col l-col--12 l-sm-col--10 l-lg-col--8 l-xl-col--7">
              <div className="single-post__title">
                <div className="single-post__meta u-display--flex u-flex-wrap--wrap u-justify--center u-align--center">
                  <div className="card-cat">{content.news}</div>
                </div>
                <h1>{_get(news, 'node.title')}</h1>
                <div className="card-date">{convertDate(_get(news, 'node.datePublished'))}</div>
              </div>
              <ReactMarkDown
                source={_get(news, 'node.fullDescription')}
                className="single-post__content content-styles"
                renderers={{
                  Image: Image,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
export default NewsItem;
