import React from 'react';
import PropTypes from 'prop-types';
import _get from 'lodash/get';
//import Link from '../shared/Link'
import Link from '../shared/Link';

class NavPrimary extends React.Component {
  handleOnMenuItemHover = key => e => {
    e.preventDefault();
    this.props.onMenuItemHover(key);
  };

  render() {
    const { links, location, locale } = this.props;

    const currentLanguage = "";

    return (
      <div className="nav-primary">
        <ul className="main-nav u-inline-list">
          {links.map((link, idx) => (
            <li key={link.id} data-menu={idx + 1} onMouseEnter={this.handleOnMenuItemHover(link)}>
              <Link
                to={`${currentLanguage}/${_get(link.slug, 'slug')}`}
                activeClassName={'is-active'}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
NavPrimary.propTypes = {
  locale: PropTypes.string,
  links: PropTypes.arrayOf(PropTypes.object),
  onMenuItemHover: PropTypes.func.isRequired,
};
export default NavPrimary;
