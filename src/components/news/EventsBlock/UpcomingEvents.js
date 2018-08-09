import React from 'react';
import Link from '../../shared/Link';
import { getDay, getMonthYear, convertDate } from '../../../helpers/convertDate';
import LoadMore from '../../shared/LoadMore';
import { getLanguage } from '../../../helpers/navigationUrl';
import _get from 'lodash/get';
import _filter from 'lodash/filter';

class UpcomingEvents extends React.Component {
  render() {
    const {
      events,
      buttonLoad,
      buttonViewWebsite,
      location,
      moreInfo,
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
      <div className="upcoming-events" id="aankomende">
        <div className="l-container">
          <h4 className={filteredevents.length == 0 ? 'post__cat card-cat' : ''}>
            {newsAvailable}
          </h4>
          <LoadMore
            items={filteredevents}
            count={6}
            buttonLoadMoreText={buttonLoad}
            callback={(event, index) => (
              <div key={index} className="event event--large l-col--12 l-md-col--6 l-xl-col--12">
                <div className="event__inner u-display--flex u-flex-wrap--wrap u-align--center">
                  <div className="event__date u-radius">
                    <div className="event__day">{getDay(_get(event, 'node.startDate'))}</div>
                    <div className="event__monthyear">
                      {getMonthYear(_get(event, 'node.startDate'))}
                    </div>
                  </div>
                  <div className="event__thumb event__thumb u-block-ratio u-block-ratio--60">
                    <img
                      className="lazy u-object-fit u-full"
                      src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw"
                      alt="Image description"
                      sizes="100vw"
                      data-src={_get(event, 'node.featuredImage.file.url')}
                      data-object-fit
                    />
                  </div>
                  <div className="event__content">
                    <h3 className="event__title">{event.node.title}</h3>
                    <div className="event__meta u-display--flex u-flex-wrap--wrap">
                      <div className="event__location">{event.node.location}</div>
                      <div className="event__when">
                        {convertDate(event.node.startDate, event.node.endDate)}
                      </div>
                    </div>
                    <p className="common-text">
                      {_get(
                        event,
                        'node.childContentfulEvenementContentTextNode.childMarkdownRemark.internal.content'
                      )}
                    </p>
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
                        target="_blank"
                      >
                        {buttonViewWebsite}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            )}
          />
        </div>
      </div>
    );
  }
}
export default UpcomingEvents;
