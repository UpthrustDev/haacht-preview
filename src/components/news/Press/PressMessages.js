import React from 'react';
import { convertDate } from '../../../helpers/convertDate';
import LoadMore from '../../shared/LoadMore';
import Link from '../../shared/Link';
import { getPartOfUrl } from '../../../helpers/navigationUrl';
import _get from 'lodash/get';
import _filter from 'lodash/filter';

class PressMessages extends React.Component {
  render() {
    const { press, pressLink, content, location, news_available } = this.props;
    var newsavailable;
    if (_filter(press, 'node.title').length == 0) {
      newsavailable = news_available;
    }
    return (
      <div className="press-messages" id="persberichten">
        <div className="l-container">
          <h4 className={_filter(press, 'node.title').length == 0 ? 'post__cat card-cat' : ''}>
            {newsavailable}
          </h4>
          <LoadMore
            inside
            buttonLoadMoreText={content.buttonLoadMore}
            count={1}
            items={_filter(press, 'node.title')}
            callback={(item, index) => (
              <article key={index} className="l-row u-justify--center post">
                <div className="l-col l-col--12 l-md-col--4">
                  <div className="post__image u-block-ratio u-block-ratio--16-9">
                    <Link
                      to={`${getPartOfUrl(location, 1)}/${pressLink.slug}/${item.node.slug}`}
                      className="u-full"
                    >
                      <img
                        className="lazy u-object-fit u-full"
                        src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw"
                        data-src={_get(item, 'node.pressImage.file.url')}
                        data-src-small="{{ site.url }}/assets/img/news/more-news-1.jpg?w=600h=412crop=true"
                        alt="Image description"
                      />
                    </Link>
                  </div>
                </div>
                <div className="l-col l-col--12 l-md-col--6">
                  <div className="post__cat card-cat">{_get(item, 'node.pressCategory.title')}</div>
                  <h4 className="post__title card-title">
                    <Link to={`${getPartOfUrl(location, 1)}/${pressLink.slug}/${item.node.slug}`}>
                      {item.node.title}
                    </Link>
                  </h4>
                  <div className="post__date card-date">{`${content.publishedOn} ${convertDate(
                    item.node.published
                  )}`}</div>
                </div>
              </article>
            )}
          />
        </div>
      </div>
    );
  }
}
export default PressMessages;
