import React from 'react';
import _filter from 'lodash/filter';
import _sortBy from 'lodash/sortBy';
import _get from 'lodash/get';
import PressMessages from './PressMessages';
import PressNavigation from './PressNavigation';
import PressArticles from './PressArticles';

const getPress = (press, category) => {
  return _sortBy(
    _filter(press.edges, item => _get(item, 'node.pressCategory.title') === category),
    item => item.node.published
  ).reverse();
};

const Press = ({ press, pressLink, content, location }) => {
  return (
    <div>
      <PressNavigation navigation={content.pressCategorySorting} />
      <PressMessages
        press={getPress(press, _get(content, 'pressCategorySorting[0].title'))}
        content={content}
        pressLink={content.singlePressLink}
        location={location}
        news_available={content.noNewsMessages}
      />
      <PressArticles
        press={getPress(press, _get(content, 'pressCategorySorting[1].title'))}
        title={content.inThePress}
        news_available={content.noNewsArticles}
      />
    </div>
  );
};
export default Press;
