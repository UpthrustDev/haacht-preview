import React from 'react';
import PropTypes from 'prop-types';
import Logo from './Logo';
import NavBurger from './NavBurger';
import Link from '../shared/Link';
import cx from 'classnames';
import _find from 'lodash/find';
import _map from 'lodash/map';
import _get from 'lodash/get';
import { getPartOfUrl } from '../helpers/navigationUrl';

class GlobalMenu extends React.Component {
  state = {
    activeNavigationItem: 'default',
    hoveredIndex: '',
    languageIsOpen: false,
  };

  handleNavigationItemHover = navigationItem => () => {
    this.setState({ hoveredIndex: navigationItem, activeNavigationItem: navigationItem });
  };

  handleNavigationItemExit = () => {
    this.setState({ activeNavigationItem: 'default' });
  };

  handleMobileNavigationItemExit = () => {
    this.setState({ activeNavigationItem: 'default', hoveredIndex: '' });
  };

  handleLanguageSelectionClick = () => {
    this.setState(prevState => ({
      languageIsOpen: !prevState.languageIsOpen,
    }));
  };

  render() {
    const { handleHamburgerClick, footerMenu, location, locale } = this.props;
    const { activeNavigationItem, hoveredIndex, languageIsOpen } = this.state;
    const contactReference = footerMenu.contactReference || {};
    const instagramReference = footerMenu.instagramReference || {};
    const youtubeLink = footerMenu.youtubeLink || {};
    const facebookLink = footerMenu.facebookLink || {};
    const jobReference = footerMenu.jobReference || {};
    const shopReference = footerMenu.shopReference || {};
    const languages = footerMenu.languages || [];
    const currentLanguage = locale || getPartOfUrl(location, 1).toLowerCase();
    const language = _find(languages, item => item.slug.slug === currentLanguage) || {
      slug: {},
    };
    const classNames = cx({ 'is-active': languageIsOpen });
    return (
      <div className={`global-menu js-global-menu sub-${activeNavigationItem}-active`}>
        <header className="global-menu__header">
          <Logo locale={getPartOfUrl(location, 1)} />
          <NavBurger onHamburgerMenuClick={handleHamburgerClick} />
        </header>

        <div className={`global-menu__lang ${classNames}`}>
          <button
            onClick={this.handleLanguageSelectionClick}
            className="c-button js-language-trigger"
          >
            {language.title}
          </button>
        </div>

        <div className={`language-selection-box js-language-selection ${classNames}`}>
          <ul className="language-options">
            {languages.map(
              (item, index) =>
                item !== language && (
                  <li key={index} className="language-option">
                    <Link to={item.slug.slug}>
                      <div className="language-option__icon">
                        <img src={_get(item, 'image.file.url')} alt={item.title} />
                      </div>
                      <div className="language-option__label">{item.title}</div>
                    </Link>
                  </li>
                )
            )}
          </ul>
        </div>

        <div className="global-menu__menu">
          <div className="global-menu__inner">
            <ul className="global-menu__nav js-global-menu-nav">
              {_map(footerMenu.footerMenu, (item, index) => (
                <li className={`${hoveredIndex === item.title ? 'active' : ''}`} key={index}>
                  <a
                    onMouseEnter={this.handleNavigationItemHover(item.title)}
                    onMouseLeave={this.handleNavigationItemExit}
                    data-sub-trigger={item.title}
                  >
                    {item.title}
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="8"
                        height="11"
                        viewBox="0 0 8 11"
                      >
                        <path
                          fill="#C2A572"
                          fillRule="evenodd"
                          d="M.92 8.869l1.237 1.237 4.95-4.95-4.95-4.95L.92 1.445l3.712 3.713L.92 8.869z"
                        />
                      </svg>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
            <ul className="global-menu__subnav">
              {jobReference.linkSlug && (
                <li>
                  <Link to={`${currentLanguage}/${jobReference.linkSlug}`}>
                    {jobReference.title}
                  </Link>
                </li>
              )}
              <li>
                <Link to={`${currentLanguage}/${contactReference.linkSlug}`}>
                  {contactReference.title}
                </Link>
              </li>
              <li>
                <a href={shopReference.linkSlug} target="_blank">
                  {shopReference.title}
                </a>
              </li>
            </ul>
            <div className="global-menu__social">
              <div className="social-label">{instagramReference.title}</div>
              <ul className="social-links">
                <li>
                  <a
                    style={{ marginRight: '10px' }}
                    href={instagramReference.linkSlug}
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill="#FFF"
                        d="M78,0 C75.2833333,0 74.9441667,0.0125 73.8775,0.06 C72.8125,0.11 72.0875,0.2775 71.45,0.525 C70.7925,0.78 70.2341667,1.1225 69.6783333,1.67833333 C69.1225,2.23416667 68.7791667,2.79166667 68.525,3.45 C68.2775,4.0875 68.1091667,4.8125 68.06,5.8775 C68.01,6.94416667 68,7.28333333 68,10 C68,12.7166667 68.0125,13.0558333 68.06,14.1225 C68.11,15.1866667 68.2775,15.9125 68.525,16.55 C68.78,17.2066667 69.1225,17.7658333 69.6783333,18.3216667 C70.2341667,18.8766667 70.7916667,19.2208333 71.45,19.475 C72.0883333,19.7216667 72.8133333,19.8908333 73.8775,19.94 C74.9441667,19.99 75.2833333,20 78,20 C80.7166667,20 81.0558333,19.9875 82.1225,19.94 C83.1866667,19.89 83.9125,19.7216667 84.55,19.475 C85.2066667,19.22 85.7658333,18.8766667 86.3216667,18.3216667 C86.8766667,17.7658333 87.2208333,17.2091667 87.475,16.55 C87.7216667,15.9125 87.8908333,15.1866667 87.94,14.1225 C87.99,13.0558333 88,12.7166667 88,10 C88,7.28333333 87.9875,6.94416667 87.94,5.8775 C87.89,4.81333333 87.7216667,4.08666667 87.475,3.45 C87.22,2.7925 86.8766667,2.23416667 86.3216667,1.67833333 C85.7658333,1.1225 85.2091667,0.779166667 84.55,0.525 C83.9125,0.2775 83.1866667,0.109166667 82.1225,0.06 C81.0558333,0.01 80.7166667,0 78,0 Z M78,1.8 C80.6691667,1.8 80.9875,1.81333333 82.0416667,1.85916667 C83.0166667,1.905 83.5458333,2.06666667 83.8975,2.205 C84.3658333,2.38583333 84.6975,2.6025 85.0491667,2.95166667 C85.3983333,3.30166667 85.615,3.63416667 85.7958333,4.1025 C85.9325,4.45416667 86.0958333,4.98333333 86.14,5.95833333 C86.1875,7.01333333 86.1983333,7.33 86.1983333,10 C86.1983333,12.67 86.1858333,12.9875 86.1366667,14.0416667 C86.0858333,15.0166667 85.9233333,15.5458333 85.7858333,15.8975 C85.5991667,16.3658333 85.3866667,16.6975 85.0366667,17.0491667 C84.6875,17.3983333 84.35,17.615 83.8866667,17.7958333 C83.5366667,17.9325 82.9991667,18.0958333 82.0241667,18.14 C80.9625,18.1875 80.65,18.1983333 77.975,18.1983333 C75.2991667,18.1983333 74.9866667,18.1858333 73.9258333,18.1366667 C72.95,18.0858333 72.4125,17.9233333 72.0625,17.7858333 C71.5883333,17.5991667 71.2625,17.3866667 70.9133333,17.0366667 C70.5625,16.6875 70.3383333,16.35 70.1633333,15.8866667 C70.0258333,15.5366667 69.8641667,14.9991667 69.8133333,14.0241667 C69.7758333,12.9741667 69.7625,12.65 69.7625,9.9875 C69.7625,7.32416667 69.7758333,6.99916667 69.8133333,5.93666667 C69.8641667,4.96166667 70.0258333,4.425 70.1633333,4.075 C70.3383333,3.6 70.5625,3.275 70.9133333,2.92416667 C71.2625,2.575 71.5883333,2.35 72.0625,2.17583333 C72.4125,2.0375 72.9383333,1.875 73.9133333,1.825 C74.9758333,1.7875 75.2883333,1.775 77.9625,1.775 L78,1.8 L78,1.8 Z M78,4.865 C75.1625,4.865 72.865,7.165 72.865,10 C72.865,12.8375 75.165,15.135 78,15.135 C80.8375,15.135 83.135,12.835 83.135,10 C83.135,7.1625 80.835,4.865 78,4.865 Z M78,13.3333333 C76.1583333,13.3333333 74.6666667,11.8416667 74.6666667,10 C74.6666667,8.15833333 76.1583333,6.66666667 78,6.66666667 C79.8416667,6.66666667 81.3333333,8.15833333 81.3333333,10 C81.3333333,11.8416667 79.8416667,13.3333333 78,13.3333333 Z M84.5383333,4.6625 C84.5383333,5.325 84,5.8625 83.3383333,5.8625 C82.6758333,5.8625 82.1383333,5.32416667 82.1383333,4.6625 C82.1383333,4.00083333 82.6766667,3.46333333 83.3383333,3.46333333 C83.9991667,3.4625 84.5383333,4.00083333 84.5383333,4.6625 Z"
                        transform="translate(-68)"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a style={{ marginRight: '10px' }} href={youtubeLink} target="_blank">
                    <svg
                      aria-labelledby="simpleicons-youtube-icon"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <title id="simpleicons-youtube-icon">YouTube icon</title>
                      <path
                        fill="#FFF"
                        d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a style={{ marginRight: '10px' }} href={facebookLink} target="_blank">
                    <svg
                      aria-labelledby="simpleicons-facebook-icon"
                      role="img"
                      width="20px"
                      height="20px"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title id="simpleicons-facebook-icon">Facebook icon</title>
                      <path
                        fill="#FFF"
                        d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.408.593 24 1.324 24h11.494v-9.294H9.689v-3.621h3.129V8.41c0-3.099 1.894-4.785 4.659-4.785 1.325 0 2.464.097 2.796.141v3.24h-1.921c-1.5 0-1.792.721-1.792 1.771v2.311h3.584l-.465 3.63H16.56V24h6.115c.733 0 1.325-.592 1.325-1.324V1.324C24 .593 23.408 0 22.676 0"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {_map(footerMenu.footerMenu, (item, index) => (
          <div
            key={index}
            className={`global-menu__sub ${hoveredIndex === item.title ? 'is-active' : ''}`}
            data-sub={item.title.toLowerCase()}
          >
            <ul>
              {_map(item.links, (item, index) => (
                <li
                  key={index}
                  className={
                    location.pathname === `/${currentLanguage}/${_get(item, 'slug.slug')}`
                      ? 'active'
                      : ''
                  }
                >
                  <Link to={`${currentLanguage}/${_get(item, 'slug.slug')}`}>
                    {_get(item, 'title')}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="global-menu__images">
          {hoveredIndex === '' && (
            <div
              className="global-menu__bg u-full u-cover lazy is-active"
              data-src={_get(footerMenu, 'defaultImage.file.url')}
            />
          )}
          {_map(footerMenu.footerMenu, (item, index) => (
            <div
              className={`global-menu__bg u-full u-cover lazy ${
                hoveredIndex === item.title ? 'is-active' : ''
              }`}
              data-src={_get(item, 'image.file.url')}
              key={index}
            />
          ))}
        </div>
        <div
          onClick={this.handleMobileNavigationItemExit}
          className={`global-menu__overlay js-global-menu-overlay ${
            activeNavigationItem === 'default' ? '' : 'is-active'
          }`}
        />
      </div>
    );
  }
}

GlobalMenu.propTypes = {
  links: PropTypes.arrayOf(PropTypes.object),
};

export default GlobalMenu;
