'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { noop, getKey } from 'reactackle-core';
import { OptionPropTypeNative } from '../OptionPropType/OptionPropTypeNative';
import { SelectElementStyled } from './styles/SelectElementStyled';

const propTypes = {
  fullWidth: PropTypes.bool,
  dense: PropTypes.bool,
  bordered: PropTypes.bool,
  options: PropTypes.arrayOf(OptionPropTypeNative),
  value: PropTypes.number,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  colorScheme: PropTypes.oneOf(['neutral', 'error', 'success']),
  onChange: PropTypes.func,
};

const defaultProps = {
  fullWidth: false,
  dense: false,
  bordered: false,
  colorScheme: 'neutral',
  options: [],
  value: -1,
  disabled: false,
  placeholder: '',
  onChange: noop,
};

export class OptionsListNative extends Component {
  constructor(props) {
    super(props);

    this._handleChange = this._handleChange.bind(this);
  }

  _handleChange(event) {
    this.setState({
      value: event.target.value,
    });

    this.props.onChange({
      value: this.props.options[event.target.value] || null,
    });
  }

  _renderOptions() {
    if (!this.props.options.length) return null;

    return [
      <option value={-1} key={-1} disabled>
        {this.props.placeholder}
      </option>,
      ...this.props.options.map((item, idx) =>
        <option
          value={idx}
          key={getKey(item, idx)}
          disabled={item.disabled || false}
        >
          {item.text}
        </option>,
      ),
    ];
  }

  render() {
    const options = this._renderOptions();

    return (
      <div>
        <SelectElementStyled
          value={this.props.value}
          disabled={this.props.disabled}
          dense={this.props.dense}
          fullWidth={this.props.fullWidth}
          bordered={this.props.bordered}
          colorScheme={this.props.colorScheme}
          onChange={this._handleChange}
        >
          {options}
        </SelectElementStyled>
      </div>
    );
  }
}

OptionsListNative.propTypes = propTypes;
OptionsListNative.defaultProps = defaultProps;
OptionsListNative.displayName = 'OptionsListNative';
