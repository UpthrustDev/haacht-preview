import React from 'react';
import _find from 'lodash/find';
import _split from 'lodash/split';
import PageWrapper from '../shared/PageWrapper';
import NewsItem from './NewsItem';

const getNews = (news, location) => {
  const navigationArray = _split(location.pathname, '/');
  const navigationItem = navigationArray[navigationArray.length - 1];
  return _find(news.edges, item => item.node.slug === navigationItem);
};

const News = ({
  navigation,
  cfNavigation,
  locale,
  news,
  location,
  content,
  footerMenu,
  slug_nl,
  slug_nl_be,
  slug_en,
  slug_fr,
  slug_fr_be,
}) => {
  return (
    <PageWrapper
      footerMenu={footerMenu}
      location={location}
      navigation={navigation}
      cfNavigation={cfNavigation}
      locale={locale}
      slug_nl={slug_nl}
      slug_nl={slug_nl_be}
      slug_en={slug_en}
      slug_fr={slug_fr}
      slug_fr_be={slug_fr_be}
    >
      <NewsItem location={location} news={news.edges[0]} content={content} />
    </PageWrapper>
  );
};
export default News;
