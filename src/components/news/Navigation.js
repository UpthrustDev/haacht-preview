import React from 'react';
import cx from 'classnames';
import Link from '../shared/Link';

class Navigation extends React.Component {
  state = {
    isOpen: false,
  };

  handleOpenMenu = e => {
    e.preventDefault();
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    const { navigation, activeSection, handleNavigationClick, chooseCategoryText } = this.props;
    const { isOpen } = this.state;

    const classNames = cx({
      'is-active': isOpen && window && window.innerWidth < 1024,
    });

    return (
      <div className={`c-page-tabs js-page-tabs ${classNames}`}>
        <button
          onClick={this.handleOpenMenu}
          className="c-button c-button--primary c-button--toggle js-page-tabs-button"
        >
          <div className="c-button--toggle__inner">
            <span>{chooseCategoryText}</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="11" viewBox="0 0 8 11">
              <path
                fill="#C2A572"
                fillRule="evenodd"
                d="M6.90685425,33.6568542 L8.65685425,33.6568542 L8.65685425,26.6568542 L1.65685425,26.6568542 L1.65685425,28.4068542 L6.90685425,28.4068542 L6.90685425,33.6568542 Z"
                transform="rotate(45 33.835 14.036)"
              />
            </svg>
          </div>
        </button>
        <ul>
          {navigation.map((item, index) => (
            <li
              key={index}
              onClick={handleNavigationClick(index, item)}
              className={activeSection === index ? 'active' : ''}
            >
              <Link onClick={this.handleOpenMenu}>{item}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default Navigation;
