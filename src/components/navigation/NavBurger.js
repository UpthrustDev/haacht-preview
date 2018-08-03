import React from 'react';
import PropTypes from 'prop-types';

const NavBurger = ({ onHamburgerMenuClick }) => {
  return (
    <div onClick={onHamburgerMenuClick} className="nav-burger">
      <button className="button button--menu">
        <div className="nav-burger__inner">
          <div className="burger">
            <div className="line" />
            <div className="line" />
            <div className="line" />
          </div>
        </div>
      </button>
    </div>
  );
};

NavBurger.propTypes = {
  onHamburgerMenuClick: PropTypes.func.isRequired,
};

export default NavBurger;
