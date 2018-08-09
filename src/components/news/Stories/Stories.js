import React from 'react';
import _map from 'lodash/map';
import Story from './Story';

const Stories = ({ stories, location, storyLink, btnText, storyText }) => {
  return (
    <div className="stories-container">
      <div className="stories">
        <div className="l-container">
          {_map(stories.edges, (story, index) => (
            <Story
              btnText={btnText}
              storyText={storyText}
              storyLink={storyLink}
              location={location}
              key={index}
              story={story}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Stories;
