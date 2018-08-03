import React from 'react';
import _map from 'lodash/map';
import FAQBlockItem from './FAQBlockItem';

const mapFAQ = FAQ => {
  return _map(FAQ.FAQ, (item, index) => <FAQBlockItem key={index} FAQ={item} />);
};

const FAQBlock = FAQ => {
  return <div className="toggle-block-group">{mapFAQ(FAQ)}</div>;
};
export default FAQBlock;
