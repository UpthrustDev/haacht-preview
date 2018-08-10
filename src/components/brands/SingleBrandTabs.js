import React from 'react';
import _camelCase from 'lodash/camelCase';
import _map from 'lodash/map';
import _filter from 'lodash/filter';

class SingleBrandTabs extends React.Component {
  render() {
    const { singleBrandPageData, onTabSelect, selectedTab } = this.props;
    //console.log(singleBrandPageData);
    return (
      <div className="single-brand-tabs">
        <div className="l-container">
          <div className="l-row">
            <div className="l-col l-col--12">
              <div className="c-tabs">
                <ul>
                  {_map(singleBrandPageData, (item, index) => (
                    <li
                      className={selectedTab === index ? 'is-active' : ''}
                      rel={`tab${index}`}
                      key={item.id}
                      onClick={onTabSelect(index, item)}
                    >
                      {item.title}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleBrandTabs;
