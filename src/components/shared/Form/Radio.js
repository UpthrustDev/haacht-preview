import React from 'react';
import cx from 'classnames';

class Radio extends React.Component {
  render() {
    const { valid, ...props } = this.props;
    const className = cx({
      'u-form-field': true,
      'u-form-field--error': valid == false,
      'u-form-field--success': valid,
    });

    return <input type="radio" className={className} {...props} />;
  }
}

export default Radio;
