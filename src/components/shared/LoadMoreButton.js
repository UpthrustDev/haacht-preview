import React from 'react';

const LoadMoreButton = ({ text, handleLoadMore }) => (
  <div className="l-row load-more">
    <div className="l-col l-col--12 u-text--center">
      <button
        onClick={handleLoadMore}
        className="c-button c-button--primary c-button--green u-radius--pill load-more-button"
      >
        {text}
        <span className="c-spinner" />
      </button>
    </div>
  </div>
);

export default LoadMoreButton;
