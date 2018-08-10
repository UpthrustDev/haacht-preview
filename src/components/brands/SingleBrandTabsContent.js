import React from 'react';
import SingleBrandAwards from './SingleBrandAwards';
import SingleBrandSellingPoint from './SingleBrandSellingPoint';
import camelCase from 'lodash/camelCase';
import ReactMarkdown from 'react-markdown';
import Paragraph from '../shared/ReactMarkDown/Paragraph';
import Heading from '../shared/ReactMarkDown/Heading';
import Link from '../shared/ReactMarkDown/Link';
import _get from 'lodash/get';

class SingleBrandTabsContent extends React.Component {
  render() {
    const { currentBrandItem, selectedTabName, location, singleBrandPageData } = this.props;
    const selectedTab = selectedTabName && camelCase(selectedTabName.key.toLowerCase());
    return (
      <div className="single-brand-content">
        <div className="l-container">
          <div className="l-row">
            <ReactMarkdown
              className="l-col l-col--12 l-lg-col--8 single-brand__content content-styles"
              source={_get(currentBrandItem.node, [`${selectedTab}`])}
              renderers={{
                Paragraph: Paragraph,
                Heading: Heading,
                Link,
              }}
            />
            <div className="l-col l-col--12 l-lg-col--4 single-brand__widgets">
              <SingleBrandAwards awards={currentBrandItem.node.awards} />
              <SingleBrandSellingPoint
                singleBrandPageData={singleBrandPageData}
                location={location}
                currentBrandItem={currentBrandItem}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleBrandTabsContent;
