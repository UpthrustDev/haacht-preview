import React from 'react';
import { convertDate } from '../../helpers/convertDate';
import _get from 'lodash/get';
import _filter from 'lodash/filter';
import Link from '../../shared/Link';
import { getLanguage } from '../../helpers/navigationUrl';

const NewsHighlight = ({ news, newsTitle, link, location, news_available }) => {
  var filterednews = _filter(news, 'node.slug');
  var newsAvailable;
  if (filterednews.length == 0) {
    newsAvailable = news_available;
  }
  return (
    <div className="news-featured">
      <div className="l-container">
        <div className="l-row">
          <h4 className={filterednews.length == 0 ? 'post__cat card-cat' : ''}>{newsAvailable}</h4>
          {filterednews.map(item => (
            <div key={_get(item, 'node.id')} className="l-col l-col--12 l-md-col--6">
              <article className="post">
                <div className="post__image u-block-ratio u-block-ratio--68">
                  <Link
                    to={`${getLanguage(location)}/${link}/${item.node.slug}`}
                    className="u-full"
                  >
                    <img
                      className="lazy u-object-fit u-full"
                      src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw"
                      data-src={_get(item, 'node.titleImage.file.url')}
                      alt="Image description"
                    />
                  </Link>
                </div>
                <div className="post__cat card-cat">{newsTitle}</div>
                <h4 className="post__title card-title">
                  <Link to={`${getLanguage(location)}/${link}/${item.node.slug}`}>
                    {_get(item, 'node.title')}
                  </Link>
                </h4>
                <p className="common-text">
                  {_get(item, 'node.shortDescription.shortDescription')}
                </p>
                <div className="post__date card-date">
                  {convertDate(_get(item, 'node.datePublished'))}
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default NewsHighlight;
