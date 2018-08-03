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
