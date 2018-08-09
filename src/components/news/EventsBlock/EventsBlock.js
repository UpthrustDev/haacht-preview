import React from 'react';
import moment from 'moment';
import _sortBy from 'lodash/sortBy';
import UpcomingEvents from './UpcomingEvents';
import PastEvents from './PastEvents';
import _filter from 'lodash/filter';

const divideEvents = (events, past) => {
  if (!past) {
    return _sortBy(
      _filter(events.edges, item => moment().diff(item.node.startDate, 'days') <= 0),
      item => item.node.startDate
    );
  }
  return _sortBy(
    _filter(events.edges, item => moment().diff(item.node.startDate, 'days') > 0),
    item => item.node.startDate
  ).reverse();
};

const EventsBlock = ({ events, content, location }) => {
  return (
    <div>
      <div className="c-page-anchors">
        <ul>
          <li className="active">
            <a href="#aankomende">{content.evementenCategory[0]}</a>
          </li>
          <li>
            <a href="#afgelopen">{content.evementenCategory[1]}</a>
          </li>
        </ul>
      </div>

      <UpcomingEvents
        location={location}
        buttonLoad={content.buttonLoadMore}
        moreInfo={content.moreInfo}
        buttonViewWebsite={content.buttonViewWebsite}
        events={divideEvents(events)}
        eventsLink={content.singleEventLink}
        news_available={content.noEvents}
      />
      <PastEvents
        location={location}
        moreInfo={content.moreInfo}
        buttonLoad={content.buttonLoadMore}
        buttonViewWebsite={content.buttonViewWebsite}
        pastEvents={content.evenementenAfgelopen}
        events={divideEvents(events, true)}
        eventsLink={content.singleEventLink}
        news_available={content.noEvents}
      />
    </div>
  );
};

export default EventsBlock;
