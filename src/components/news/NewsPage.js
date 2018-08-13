import React from 'react';
import _findIndex from 'lodash/findIndex';
import _get from 'lodash/get';
import PageWrapper from '../shared/PageWrapper';
import Header from './Header';
import Navigation from './Navigation';
import NewsBlock from './NewsBlock/NewsBlock';
import EventsBlock from './EventsBlock/EventsBlock';
import Publications from './Publications/Publications';
import Stories from './Stories/Stories';
import Press from './Press/Press';
import Awards from './Awards/Awards';
import SubscriptionForm from './Publications/SubscriptionForm';
import cx from 'classnames';
import { getPartOfUrl, convertUrl } from '../helpers/navigationUrl';

class NewsPage extends React.Component {
  constructor(props) {
    super(props);

    const navigationItem = convertUrl(props.location.pathname);

    this.state = {
      activeSection: _findIndex(
        props.content.headerNavigation,
        item => item.toLowerCase() === navigationItem.toLowerCase()
      ),
      subscriptionForm: false,
      selectedSubscriptionName: '',
      selectedSubscriptionDescription: '',
      subscriptionType: '',
    };
  }

  handleNavigationClick = (activeSection, link) => () => {
    this.setState({ activeSection });
    //navigateTo(`/${getPartOfUrl(this.props.location, 3)}/${link.toLowerCase()}`);
  };

  handleSubscription = () => {
    document.querySelector('html').classList.toggle('no-scroll');
    this.setState(prevState => ({
      subscriptionForm: !prevState.subscriptionForm,
    }));
  };

  handleSelectSubscription = (subscriptionName, subscriptionDescription, subscriptionType) => {
    this.setState({
      selectedSubscriptionName: subscriptionName,
      selectedSubscriptionDescription: subscriptionDescription,
      subscriptionType: subscriptionType,
    });
  };

  render() {
    const {
      navigation,
      cfNavigation,
      footerMenu,
      locale,
      location,
      content,
      news,
      highlightedEvent,
      events,
      publications,
      stories,
      press,
      awards,
      agePopup,
      cookiesPopup,
      subscriptionFormData,
      slug_nl,
      slug_nl_be,
      slug_en,
      slug_fr,
      slug_fr_be,
    } = this.props;
    const {
      activeSection,
      subscriptionForm,
      selectedSubscriptionName,
      selectedSubscriptionDescription,
      subscriptionType,
    } = this.state;

    const classNames = cx({
      'c-form-overlay-active': subscriptionForm,
    });
    return (
      <PageWrapper
        agePopup={agePopup}
        cookiesPopup={cookiesPopup}
        navigation={navigation}
        cfNavigation={cfNavigation}
        locale={locale}
        location={location}
        footerMenu={footerMenu}
        classNames={classNames}
        title={content.metaTitles[activeSection]}
        description={content.metaDescriptions[activeSection]}
        slug_nl={slug_nl}
        slug_nl_be={slug_nl_be}
        slug_en={slug_en}
        slug_fr={slug_fr}
        slug_fr_be={slug_fr_be}
      >
        <Header
          index={activeSection}
          title={content.headerNavigation[activeSection]}
          img={_get(content, `headerImageOrVideo[${activeSection}].headerImage.file.url`)}
          video={_get(content, `headerImageOrVideo[${activeSection}]`)}
        />
        <Navigation
          handleNavigationClick={this.handleNavigationClick}
          navigation={content.headerNavigation}
          activeSection={activeSection}
          chooseCategoryText={content.chooseACategory}
        />

        {activeSection === 0 || activeSection === undefined ? (
          <NewsBlock
            news={news}
            location={location}
            highlightedEvent={highlightedEvent}
            content={content}
          />
        ) : null}
        {activeSection === 1 ? (
          <EventsBlock location={location} events={events} content={content} />
        ) : null}
        {activeSection === 2 ? (
          <div>
            <Publications
              publications={publications}
              handleSubscription={this.handleSubscription}
              handleSelectSubscription={this.handleSelectSubscription}
            />
            {this.state.subscriptionForm && (
              <SubscriptionForm
                publications={publications}
                subscriptionType={subscriptionType}
                subscriptionFormData={subscriptionFormData}
                handleSubscription={this.handleSubscription}
                subscriptionName={selectedSubscriptionName}
                subscriptionDescription={selectedSubscriptionDescription}
              />
            )}
          </div>
        ) : null}
        {activeSection === 3 ? (
          <Stories
            btnText={content.buttonReadStory}
            storyText={content.storyIntroTitle}
            storyLink={content.singleStoryLink}
            location={location}
            stories={stories}
          />
        ) : null}
        {activeSection === 4 ? <Press location={location} press={press} content={content} /> : null}
        {activeSection === 5 ? (
          <Awards location={location} linkToBrands={content.linkToBrands} awards={awards} />
        ) : null}
      </PageWrapper>
    );
  }
}
export default NewsPage;
