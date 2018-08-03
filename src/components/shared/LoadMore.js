import React from 'react';
import { blazy } from '../helpers/blazy';
import _slice from 'lodash/slice';
import _map from 'lodash/map';
import LoadMoreButton from './LoadMoreButton';
import Link from './Link';
import _filter from 'lodash/filter';

class LoadMore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.count,
    };
  }

  handleLoadMore = () => {
    this.setState(prevState => {
      return { count: prevState.count + 3 };
    });
  };

  componentDidUpdate() {
    if (blazy) {
      blazy.revalidate();
    }
  }

  render() {
    const {
      items,
      callback,
      buttonLoadMoreText,
      inside,
      className,
      loadMoreFlag,
      allEventsSlug,
    } = this.props;
    const { count } = this.state;
    const availableItems =
      count < items.length ? _slice(items, 0, count) : _slice(items, 0, items.length);
    const renderedItems = _map(availableItems, (item, index) => callback(item, index));
    return (
      <div>
        {inside ? (
          renderedItems
        ) : (
          <div className={className ? className : 'l-row'}>{renderedItems}</div>
        )}
        {count < items.length &&
          loadMoreFlag === undefined && (
            <LoadMoreButton handleLoadMore={this.handleLoadMore} text={buttonLoadMoreText} />
          )}
        {loadMoreFlag === false && (
          <div className="l-row load-more">
            <div className="l-col l-col--12 u-text--center">
              <Link
                to={allEventsSlug}
                className="c-button c-button--primary c-button--green u-radius--pill"
              >
                {buttonLoadMoreText}
              </Link>
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default LoadMore;
