import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import HeadRoom from 'react-headrooms';
import _find from 'lodash/find';
import _get from 'lodash/get';
import { getPartOfUrl } from '../helpers/navigationUrl';
import Logo from './Logo';
import NavBurger from './NavBurger';
import NavPrimary from './NavPrimary';
import NavSecondary from './NavSecondary';
import SubMenu from './SubMenu';
import GlobalMenu from './GlobalMenu';
import DelayedClassName from './DelayedClassName';
import LanguageSelection from './LanguageSelection';
require('ie-array-find-polyfill');

class Navigation extends React.Component {
  state = {
    activeMenuItem: null,
    languageIsOpen: false,
  };

  handleMenuItemHover = link => {
    if (link.links) {
      const root = document.documentElement;
      root.style.overflow += 'hidden';
    }
    this.setState({ activeMenuItem: link.id });
  };

  handleLanguageSelection = () => {
    this.setState(prevState => ({
      languageIsOpen: !prevState.languageIsOpen,
    }));
  };
  handleHamburgerMenuClick = () => {
    //document.querySelector('html').classList.toggle('no-scroll');
    if (this.state.activeMenuItem === null) {
      this.setState({ activeMenuItem: 'global' });
    } else {
      this.setState({ activeMenuItem: null });
    }
  };

  handleSubMenuClose = () => {
    const root = document.documentElement;
    root.style.overflow = '';
    this.setState({ activeMenuItem: null });
  };

  changeLanguage(language){
    console.log(language)
    window.location.href = "/?id=MHQ0SGIhmCYo6q2gGY2Yg&lang="+language;
  }

  render() {
    const {
      cfLinks,
      footerMenu,
      location,
      white,
      locale,
      slug_nl,
      slug_nl_be,
      slug_en,
      slug_fr,
      slug_fr_be,
    } = this.props;
    if (!cfLinks) {
      return null;
    }
    const link = cfLinks.find(link => link.id === this.state.activeMenuItem);
    console.log(link);
    const languages = footerMenu.languages || [];
    const shopReference = footerMenu.shopReference || {};

    const currentLanguage = getPartOfUrl(location, 1).toLowerCase();
    const language = _find(languages, item => _get(item, 'slug.slug') === currentLanguage) || {};

    const classNames = cx({
      'global-menu-active': this.state.activeMenuItem === 'global',
      [`submenu-${link && link.animationKey}-active`]: true,
      'language-selection-active': this.state.languageIsOpen,
    });

    return (
      <DelayedClassName className={classNames}>
        <HeadRoom
          classes={{
            pinned: 'header--down',
            unpinned: 'header--up',
            top: 'headroom--top',
            notTop: 'headroom--not-top',
          }}
        >
          <header
            className={`global-header ${white ? 'global-header--white' : ''}`}
            role="navigation"
          >
            <Logo locale={locale} />
            <NavBurger onHamburgerMenuClick={this.handleHamburgerMenuClick} />
            <NavPrimary
              location={location}
              links={cfLinks}
              onMenuItemHover={this.handleMenuItemHover}
              locale={locale}
            />
            {footerMenu && (
              <NavSecondary
                handleLanguageSelection={this.handleLanguageSelection}
                footerMenu={footerMenu} // TODO: We should only send the required properties, not the whole footerMenu
                location={location}
                locale={locale}
                slug_nl={slug_nl}
                slug_nl_be={slug_nl_be}
                slug_en={slug_en}
                slug_fr={slug_fr}
                slug_fr_be={slug_fr_be}
              />
            )}
            <LanguageSelection
              language={language}
              languages={languages}
              slug_en={slug_en}
              slug_nl={slug_nl}
              slug_fr={slug_fr}
              slug_nl_be={slug_nl_be}
              slug_fr_be={slug_fr_be}
              changeLanguage={this.changeLanguage.bind(this)}
            />
            {this.state.activeMenuItem && this.state.activeMenuItem !== 'global' ? (
              <SubMenu
                location={location}
                activeMenuItem={this.state.activeMenuItem}
                subMenuLink={this.state.activeMenuItem ? link : []}
                onSubMenuClose={this.handleSubMenuClose}
                locale={locale}
              />
            ) : null}
          </header>
        </HeadRoom>

        {footerMenu && (
          <GlobalMenu
            footerMenu={footerMenu}
            handleHamburgerClick={this.handleHamburgerMenuClick}
            activeMenuItem={this.state.activeMenuItem}
            location={location}
            locale={locale}
          />
        )}

        <div
          id="u-overlay"
          className="u-overlay"
          onMouseEnter={this.handleSubMenuClose}
          style={
            this.state.activeMenuItem ? { visibility: 'visible', opacity: link.links ? 1 : 0 } : {}
          }
        />
      </DelayedClassName>
    );
  }
}

Navigation.propTypes = {
  links: PropTypes.arrayOf(PropTypes.object),
  cfLinks: PropTypes.arrayOf(PropTypes.object),
  locale: PropTypes.string,
};

export default Navigation;

function getAllUrlParams(url) {

  // get query string from url (optional) or window
  var queryString = url ? url.split('?')[1] : window.location.search.slice(1);

  // we'll store the parameters here
  var obj = {};

  // if query string exists
  if (queryString) {

    // stuff after # is not part of query string, so get rid of it
    queryString = queryString.split('#')[0];

    // split our query string into its component parts
    var arr = queryString.split('&');

    for (var i=0; i<arr.length; i++) {
      // separate the keys and the values
      var a = arr[i].split('=');

      // in case params look like: list[]=thing1&list[]=thing2
      var paramNum = undefined;
      var paramName = a[0].replace(/\[\d*\]/, function(v) {
        paramNum = v.slice(1,-1);
        return '';
      });

      // set parameter value (use 'true' if empty)
      var paramValue = typeof(a[1])==='undefined' ? true : a[1];

      // (optional) keep case consistent
      paramName = paramName.toLowerCase();
      paramValue = paramValue;

      // if parameter name already exists
      if (obj[paramName]) {
        // convert value to array (if still string)
        if (typeof obj[paramName] === 'string') {
          obj[paramName] = [obj[paramName]];
        }
        // if no array index number specified...
        if (typeof paramNum === 'undefined') {
          // put the value on the end of the array
          obj[paramName].push(paramValue);
        }
        // if array index number specified...
        else {
          // put the value at that index number
          obj[paramName][paramNum] = paramValue;
        }
      }
      // if param name doesn't exist yet, set it
      else {
        obj[paramName] = paramValue;
      }
    }
  }

  return obj;
}
