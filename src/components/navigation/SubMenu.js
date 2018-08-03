import React from 'react';
import PropTypes from 'prop-types';
import _get from 'lodash/get';
import enhanceWithClickOutside from 'react-click-outside';
import Link from '../shared/Link';
import { getPartOfUrl } from '../helpers/navigationUrl';

class SubMenu extends React.Component {
  handleMenuItemClick = e => {
    const root = document.documentElement;
    root.style.overflow = '';
  };

  //This function is used by the enhanceWithClickOutside library
  handleClickOutside() {
    this.props.onSubMenuClose();
  }

  render() {
    const { subMenuLink, location, locale } = this.props;

    const currentLanguage = locale || getPartOfUrl(location, 1);

    return subMenuLink.links ? (
      <div className="nav-submenu" data-submenu={subMenuLink.animationKey}>
        <ul className="inline-list" data-subs={subMenuLink.links.length.toString()}>
          {subMenuLink.links.map(link => (
            <li key={link.id}>
              <Link
                to={`${currentLanguage}/${link.slug.slug}`}
                style={
                  link.image && {
                    backgroundImage: `url(${_get(link.image, 'file.url')})`,
                    backgroundSize: 'cover',
                  }
                }
                onClick={this.handleMenuItemClick}
                activeClassName={'is-active'}
              >
                <span>{link.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    ) : null;
  }
}

SubMenu.propTypes = {
  activeMenuItem: PropTypes.string.isRequired,
  onSubMenuClose: PropTypes.func.isRequired,
  subMenuLink: PropTypes.object.isRequired,
  locale: PropTypes.string,
};

export default enhanceWithClickOutside(SubMenu);
