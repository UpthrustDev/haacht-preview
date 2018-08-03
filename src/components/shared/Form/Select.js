import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

class Select extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    value: PropTypes.string,
  };

  state = {
    isChecked: false,
  };

  toggleSelectChange = () => {
    const { onChange, value } = this.props;

    this.setState(
      ({ isChecked }) => ({
        isChecked: !isChecked,
      }),
      () => {
        onChange(this.state.isChecked ? value : null);
      }
    );
  };

  onChange(e) {
    //console.log(e.target.value)
    this.props.parentFunction(e.target.value);
  }

  render() {
    const { standardValue, data, name, value, valid, firstOption, ...other } = this.props;
    const { isChecked } = this.state;
    const className = cx({
      'selectStyle u-form-field': true,
      'selectStyle u-form-field--error': valid ? (value.length != 0 ? false : true) : false,
      'selectStyle u-form-field--success': valid ? (value.length != 0 ? true : false) : false,
    });
    //console.log(data);

    return (
      <select onChange={this.onChange.bind(this)} className={className} name="select">
        <option value="start" selected="selected" disabled>
          {firstOption ? firstOption : standardValue}
        </option>
        {data.map(item => <option value={item}>{item}</option>)}
      </select>
    );
  }
}

export default Select;
