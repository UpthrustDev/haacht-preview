import React from 'react';
import PropTypes from 'prop-types';

class DelayedClassName extends React.PureComponent {
  componentDidMount() {
    this.createTimeout();
  }

  componentDidUpdate() {
    this.createTimeout();
  }

  createTimeout = () => {
    setTimeout(() => {
      if (this.element) {
        this.element.className = this.props.className;
      }
    }, 100);
  };

  render() {
    const { el, ...other } = this.props;
    const Component = el;
    return <Component ref={element => (this.element = element)} {...other} />;
  }
}

DelayedClassName.defaultProps = {
  el: 'div',
};

DelayedClassName.propTypes = {
  el: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default DelayedClassName;
