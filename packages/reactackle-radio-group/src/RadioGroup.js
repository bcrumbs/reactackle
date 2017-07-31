'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { noop, getKey, isUndef } from 'reactackle-core';
import { Radio } from './Radio/Radio';
import { RadioGroupStyled } from './styles/RadioGroupStyled';

const propTypes = {
  /**
   * Default value of the RadioGroup
   */
  defaultValue: PropTypes.any,
  /**
   * Value of the RadioGroup
   */
  value: PropTypes.any,
  /**
   * Options of the RadioGroup
   */
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.any.isRequired,
      text: PropTypes.string,
      disabled: PropTypes.bool,
    }),
  ),
  /**
   * Specify function to call on RadioGroup value change
   */
  onChange: PropTypes.func,
};
const defaultProps = {
  defaultValue: void 0,
  value: void 0,
  options: [],
  onChange: noop,
};

export default class RadioGroup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: isUndef(props.value) ? props.defaultValue : props.value,
    };

    this._handleChange = this._handleChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.props.value && isUndef(nextProps.value)) {
      this.setState({
        value: this.props.value,
      });
    }
  }

  _getCurrentValue() {
    return isUndef(this.props.value) ? this.state.value : this.props.value;
  }

  _handleChange({ value }) {
    const currentValue = this._getCurrentValue();

    if (currentValue === value) return;

    if (isUndef(this.props.value)) {
      this.setState({
        value,
      });
    }

    this.props.onChange({
      value,
    });
  }

  _renderOptions() {
    const value = this._getCurrentValue();

    return this.props.options.map((item, k) =>
      <Radio
        {...item}
        key={getKey(item, k)}
        index={k}
        onChange={this._handleChange}
        checked={value === item.value}
      />,
    );
  }

  render() {
    const options = this._renderOptions();

    return (
      <RadioGroupStyled>
        {options}
      </RadioGroupStyled>
    );
  }
}

RadioGroup.propTypes = propTypes;
RadioGroup.defaultProps = defaultProps;
RadioGroup.displayName = 'RadioGroup';
