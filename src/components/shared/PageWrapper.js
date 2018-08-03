import React from 'react';
import PropTypes from 'prop-types';
import { Navigation } from '../navigation';
import DeviceClass from './DeviceClass';
import Popup from './Popup';
import Footer from './footer/FooterMenu';
import DocumentMeta from 'react-document-meta';

class PageWrapper extends React.PureComponent {
  state = {
    cookiesAccepted: false,
    legalDrinkingAge: false,
  };

  getChildContext() {
    return {
      locale: this.props.locale,
    };
  }

  setCookie = (cname, cvalue, exdays) => {
    const d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    const expires = `expires=${d.toUTCString()}`;
    document.cookie = `${cname}=${cvalue};${expires};path=/`;
  };

  getCookie = cname => {
    const name = `${cname}=`;
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return '';
  };

  handleAcceptCookies = () => {
    this.setState({ cookiesAccepted: false });
    this.setCookie('cookiesAccepted', true, 7);
  };

  handleAcceptAge = () => {
    this.setState({ legalDrinkingAge: false });
    this.setCookie('legalDrinkingAge', true, 7);
  };

  componentDidMount() {
    const legalDrinkingAge = this.getCookie('legalDrinkingAge');
    const cookiesAccepted = this.getCookie('cookiesAccepted');
    if (!legalDrinkingAge) {
      this.setState({ legalDrinkingAge: true });
    }
    if (!cookiesAccepted) {
      this.setState({ cookiesAccepted: true });
    }
  }

  render() {
    const {
      children,
      noFooter,
      cfNavigation,
      footerMenu,
      locale,
      classNames,
      white,
      agePopup,
      cookiesPopup,
      location,
      title,
      description,
      slug_nl,
      slug_nl_be,
      slug_en,
      slug_fr,
      slug_fr_be,
    } = this.props;

    const { legalDrinkingAge, cookiesAccepted } = this.state;

    let canonical;
    if (typeof window !== 'undefined') {
      canonical = `${window.location.hostname}${location.pathname}`;
    }

    const meta = {
      title: title || 'Brouwerij Haacht',
      description,
      canonical,
      meta: {
        charset: 'utf-8',
      },
    };

    return (
      <DeviceClass locale={locale} classNames={classNames}>
        <DocumentMeta {...meta}>
          {cfNavigation && (
            <Navigation
              white={white}
              location={location}
              footerMenu={footerMenu}
              cfLinks={cfNavigation.links}
              locale={locale}
              slug_nl_be={slug_nl_be}
              slug_nl={slug_nl}
              slug_en={slug_en}
              slug_fr={slug_fr}
              slug_fr_be={slug_fr_be}
            />
          )}
          <Popup
            age={legalDrinkingAge}
            cookies={cookiesAccepted}
            agePopup={agePopup}
            cookiesPopup={cookiesPopup}
            acceptCookies={this.handleAcceptCookies}
            acceptAge={this.handleAcceptAge}
            location={location}
            hideBackground={false}
          />
          {children}
          {!noFooter && <Footer location={location} footerMenu={footerMenu} locale={locale} />}
        </DocumentMeta>
      </DeviceClass>
    );
  }
}

PageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  cfNavigation: PropTypes.shape({
    id: PropTypes.string,
    links: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string,
  }).isRequired,
  locale: PropTypes.string.isRequired,
  agePopup: PropTypes.object.isRequired,
  cookiesPopup: PropTypes.object.isRequired,
  footerMenu: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

PageWrapper.childContextTypes = {
  locale: PropTypes.string,
};

export default PageWrapper;
