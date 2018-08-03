import React from 'react';
import cx from 'classnames';

class Text extends React.Component {
  render() {
    const { valid, ...props } = this.props;
    const className = cx({
      'u-form-field': true,
      'u-form-field--error': valid === false,
      'u-form-field--success': valid,
    });

    const classNameDiv = cx({
      'u-form-field-wrapper': true,
      'u-form-field--error-wrapper': valid === false,
      'u-form-field--success-wrapper': valid,
    });

    return (
      <div className={classNameDiv}>
        <input {...props} className={className} type="text" />
      </div>
    );
  }
}

export default Text;
