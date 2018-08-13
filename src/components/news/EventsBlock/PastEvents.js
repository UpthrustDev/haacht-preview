import React from 'react';
import { convertDate } from '../../helpers/convertDate';
import LoadMore from '../../shared/LoadMore';
import Link from '../../shared/Link';
import { getLanguage } from '../../helpers/navigationUrl';
import _filter from 'lodash/filter';

class PastEvents extends React.Component {
  render() {
    const {
      events,
      buttonLoad,
      buttonViewWebsite,
      pastEvents,
      location,
      moreInfo,
      loadMoreFlag,
      allEventsSlug,
      eventsLink,
      news_available,
    } = this.props;
    var filteredevents = _filter(events, 'node.slug');
    var newsAvailable;
    //console.log(events);
    if (filteredevents.length == 0) {
      newsAvailable = news_available;
    }
    return (
      <div className="past-events" id="afgelopen">
        <div className="l-container past-events__header">
          <div className="l-row u-text--center">
            <div className="l-col l-col--12">
              <h3>{pastEvents}</h3>
            </div>
          </div>
        </div>

        <div className="l-container past-events__grid">
          <h4 className={filteredevents.length == 0 ? 'post__cat card-cat' : ''}>
            {newsAvailable}
          </h4>
          <LoadMore
            items={events}
            buttonLoadMoreText={buttonLoad}
            count={3}
            loadMoreFlag={loadMoreFlag}
            allEventsSlug={allEventsSlug}
            callback={(event, index) => (
              <div key={index} className="event l-col l-col--12 l-md-col--6 l-lg-col--4">
                <div className="event__thumb u-block-ratio u-block-ratio--60">
                  <img
                    className="lazy u-object-fit u-full"
                    src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw"
                    alt="Image description"
                    sizes="100vw"
                    data-src={event.node.featuredImage ? event.node.featuredImage.fields.file.url : null}
                    data-object-fit
                  />
                </div>
                <div className="event__content">
                  <h5 className="event__title">{event.node.title}</h5>
                  <div className="event__meta u-display--flex u-flex-wrap--wrap">
                    <div className="event__when">
                      {convertDate(event.node.startDate, event.node.endDate)}
                    </div>
                  </div>
                  {event.node.internalContent ? (
                    <Link
                      className="c-button c-button--primary c-button--link"
                      to={`${getLanguage(location)}/${eventsLink.slug}/${event.node.slug}`}
                    >
                      {moreInfo}
                    </Link>
                  ) : (
                    <a
                      className="c-button c-button--primary c-button--link"
                      href={event.node.externalWebsiteUrl}
                    >
                      {buttonViewWebsite}
                    </a>
                  )}
                </div>
              </div>
            )}
          />
        </div>
      </div>
    );
  }
}

export default PastEvents;
