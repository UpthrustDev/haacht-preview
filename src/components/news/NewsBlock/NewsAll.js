import React from 'react';
import { navigateTo } from 'gatsby-link';
import { convertDate } from '../../../helpers/convertDate';
import LoadMore from '../../shared/LoadMore';
import _get from 'lodash/get';
import Link from '../../shared/Link';
import _split from 'lodash/split';
import _filter from 'lodash/filter';
import { getLanguage } from '../../../helpers/navigationUrl';

const NewsAll = ({ news, sectionTitle, buttonLoad, newsTitle, location, link, news_available }) => {
  var filterednews = _filter(news, 'node.slug');
  var newsAvailable;
  if (filterednews.length == 0) {
    newsAvailable = news_available;
  }
  return (
    <div className="news-all">
      <div className="l-container">
        <div className="news-all__header l-row u-justify--center">
          <div className="l-col l-col--12 l-md-col--10">
            <h4>{sectionTitle}</h4>
          </div>
        </div>
        <h4 className={filterednews.length == 0 ? 'post__cat card-cat' : ''}>{newsAvailable}</h4>
        <LoadMore
          buttonLoadMoreText={buttonLoad}
          items={filterednews}
          count={6}
          className="single-row"
          callback={(item, index) => (
            <article x key={index} className="l-row u-justify--center post">
              <div className="l-col l-col--12 l-md-col--4">
                <div className="post__image u-block-ratio u-block-ratio--68">
                  <Link
                    to={`/${getLanguage(location)}/${link}/${item.node.slug}`}
                    className="u-full"
                  >
                    <img
                      className="lazy u-object-fit u-full"
                      src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw"
                      data-src={_get(item, 'node.titleImage.file.url')}
                      data-src-small="{{ site.url }}/assets/img/news/more-news-2.jpg?w=600h=412crop=true"
                      alt="Image description"
                    />
                  </Link>
                </div>
              </div>
              <div className="l-col l-col--12 l-md-col--6">
                <div className="post__cat card-cat">{newsTitle}</div>
                <h4 className="post__title card-title">
                  <Link to={`/${getLanguage(location)}/${link}/${item.node.slug}`}>
                    {_get(item, 'node.title')}
                  </Link>
                </h4>
                <div className="post__date card-date">
                  {convertDate(_get(item, 'node.datePublished'))}
                </div>
              </div>
            </article>
          )}
        />
      </div>
    </div>
  );
};
export default NewsAll;
