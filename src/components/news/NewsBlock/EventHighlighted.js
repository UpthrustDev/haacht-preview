import React from 'react';
import { convertDate, getDay, getMonthYear } from '../../../helpers/convertDate';
import _get from 'lodash/get';
import Link from '../../shared/Link';

const EventHighlighted = ({
  sectionTitle,
  buttonTitle,
  language,
  link,
  news_available,
  highlightedEvent: { evenementHighlighted },
}) => {
  var title = _get(evenementHighlighted, 'title');
  var slug = _get(evenementHighlighted, 'slug');
  var startDate = _get(evenementHighlighted, 'startDate');
  var externalWebsiteUrl = _get(evenementHighlighted, 'externalWebsiteUrl');
  var endDate = _get(evenementHighlighted, 'endDate');
  var location = _get(evenementHighlighted, 'location');
  var content = _get(evenementHighlighted, 'content');
  var featuredImage = _get(evenementHighlighted, 'featuredImage');
  var childContentfulEvenementContentTextNode = _get(
    evenementHighlighted,
    'childContentfulEvenementContentTextNode'
  );
  //console.log(title);
  if (!title) {
    return (
      <div className="news-featured-event">
        <div className="l-container">
          <div className="l-row">
            <div className="l-col l-col--12 u-text--center">
              <h4>{sectionTitle}</h4>
            </div>
            <h4 className="post__cat card-cat">{news_available}</h4>
          </div>
          <div className="l-row" />
        </div>
      </div>
    );
  }
  return (
    <div className="news-featured-event">
      <div className="l-container">
        <div className="l-row">
          <div className="l-col l-col--12 u-text--center">
            <h4>{sectionTitle}</h4>
          </div>
        </div>
        <div className="l-row">
          <div className="event event--large l-col--12 l-lg-col--12">
            <div className="event__inner u-display--flex u-flex-wrap--wrap u-align--center">
              <div className="event__date u-radius">
                <div className="event__day">{getDay(startDate)}</div>
                <div className="event__monthyear">{getMonthYear(startDate)}</div>
              </div>
              <div className="event__thumb event__thumb u-block-ratio u-block-ratio--60">
                <img
                  className="lazy u-object-fit u-full"
                  src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw"
                  alt="Image description"
                  sizes="100vw"
                  data-src={_get(featuredImage, 'file.url')}
                  data-object-fit
                />
              </div>
              <div className="event__content">
                <h3 className="event__title">{title}</h3>
                <div className="event__meta u-display--flex u-flex-wrap--wrap">
                  <div className="event__location">{location}</div>
                  <div className="event__when">{convertDate(startDate, endDate)}</div>
                </div>
                <p className="common-text">
                  {_get(
                    childContentfulEvenementContentTextNode,
                    'childMarkdownRemark.internal.content'
                  )}
                </p>
                {content && (
                  <Link
                    to={`${language}/${link}/${slug}`}
                    className="c-button c-button--primary c-button--link"
                  >
                    {buttonTitle}
                  </Link>
                )}
                {!content && (
                  <a
                    href={externalWebsiteUrl}
                    className="c-button c-button--primary c-button--link"
                    target="_blank"
                  >
                    {buttonTitle}
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventHighlighted;
