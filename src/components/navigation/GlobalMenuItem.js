import React from 'react';
import PropTypes from 'prop-types';
import DelayedClassName from './DelayedClassName';

class GlobalMenuItem extends React.Component {
  state = { active: false };

  handleGlobalMenuItemClick = () => {
    this.setState(state => ({
      active: !state.active,
    }));
  };

  render() {
    const { link } = this.props;

    return (
      <DelayedClassName el={'li'} className={this.state.active ? 'is-active' : ''}>
        <a href={link.url} className="has-submenu">
          {link.name}
        </a>
        <div onClick={this.handleGlobalMenuItemClick} className="nav-toggle">
          <div className="u-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="8" viewBox="0 0 11 8">
              <path
                fill="#C2A572"
                fillRule="evenodd"
                d="M52.0252348,11.9372096 L53.38674,13.2987148 L58.7987148,7.88674003 L53.38674,2.47476522 L52.0252348,3.83627047 L56.0757043,7.88674003 L52.0252348,11.9372096 Z"
                transform="rotate(90 32.412 -19.113)"
              />
            </svg>
          </div>
        </div>
        <div className="mobile-nav-submenu">
          <ul data-subs={link.sublinks.length.toString()}>
            {link.sublinks.map(sublink => (
              <li key={sublink.id} className="">
                <a href={sublink.url}>{sublink.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </DelayedClassName>
    );
  }
}

GlobalMenuItem.propTypes = {
  link: PropTypes.shape({
    id: PropTypes.string,
    key: PropTypes.string,
    name: PropTypes.string,
    sublinks: PropTypes.arrayOf(PropTypes.object),
    url: PropTypes.string,
  }),
};

export default GlobalMenuItem;
