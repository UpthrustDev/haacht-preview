import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

class Number extends React.Component {
  render() {
    const { value, valid, onChange, ...other } = this.props;
    const className = cx({
      'u-form-field': true,
      'u-form-field--error': valid === false,
      'u-form-field--success': valid,
    });
    console.log(this.props);
    return (
      <input
        type="text"
        {...other}
        className={className}
        value={value || 0}
        onChange={e => onChange(parseInt(e.currentTarget.value, 10))}
      />
    );
  }
}

Number.propTypes = {
  value: PropTypes.number,
  onChange: PropTypes.func.isRequired,
};

export default Number;
