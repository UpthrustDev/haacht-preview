import React from 'react';
import PropTypes from 'prop-types';

class Checkbox extends React.Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string,
  };

  state = {
    isChecked: false,
  };

  unCheck = () => {
    const { onChange, value } = this.props;
    this.setState({
      isChecked: false,
    });
    onChange(null);
  };

  toggleCheckboxChange = () => {
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

  render() {
    const { onChange, value, ...other } = this.props;
    const { isChecked } = this.state;

    return (
      <input type="checkbox" checked={isChecked} onChange={this.toggleCheckboxChange} {...other} />
    );
  }
}

export default Checkbox;
