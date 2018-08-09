import React from 'react';
import NewsHighlight from './NewsHighlight';
import _sortBy from 'lodash/sortBy';
import _slice from 'lodash/slice';
import NewsAll from './NewsAll';
import EventHighlighted from './EventHighlighted';
import _split from 'lodash/split';
import _get from 'lodash/get';
import _filter from 'lodash/filter';

const getLatestNews = (news, count, start) => {
  const maxLength = news.length < count ? news.length : count;
  return _slice(_sortBy(news.edges, item => item.node.datePublished).reverse(), start, maxLength);
};

class NewsBlock extends React.Component {
  state = {
    newsCount: 8,
  };
  render() {
    var { news, highlightedEvent, content, location } = this.props;
    console.log(news);
    news.edges = _filter(news.edges, o => {
      return o.node.title && o.node.title != 'dummy';
    });
    return (
      <div>
        <NewsHighlight
          link={_get(content, 'singleNewsLink.slug')}
          location={location}
          news={getLatestNews(news, 2, 0)}
          newsTitle={content.newsHighlight}
          news_available={content.noNews}
        />

        <EventHighlighted
          highlightedEvent={highlightedEvent}
          sectionTitle={content.evenementInDeKijker}
          buttonTitle={content.buttonViewWebsite}
          link={_get(content, 'singleEventLink.slug')}
          language={_split(location.pathname, '/')[1]}
          news_available={content.noEvents}
        />
        <NewsAll
          location={location}
          link={_get(content, 'singleNewsLink.slug')}
          news={getLatestNews(news, this.state.newsCount, 2)}
          newsTitle={content.news}
          sectionTitle={content.meerNieuws}
          buttonLoad={content.buttonLoadMore}
          news_available={content.noNews}
        />
      </div>
    );
  }
}
export default NewsBlock;
