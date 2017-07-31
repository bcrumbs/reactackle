'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { registerDefaultComponentTheme, noop, isUndef } from 'reactackle-core';
import { RadioStyled } from './styles/RadioStyled';
import { RadioLabelStyled } from './styles/RadioLabelStyled';
import componentTheme from '../styles/theme';

registerDefaultComponentTheme('radio', componentTheme);

let nextId = 0;

const propTypes = {
  /**
   * Value of the radio
   */
  value: PropTypes.any,
  /**
   * Determines whether radio is checked
   */
  checked: PropTypes.bool,
  /**
   * Determines whether radio is checked by default
   */
  defaultChecked: PropTypes.bool,
  /**
   * Determines whether radio is diables
   */
  disabled: PropTypes.bool,
  /**
   * Determines label text of the radio
   */
  text: PropTypes.string,
  /**
   * Specify function to call on radio value change
   */
  onChange: PropTypes.func,
  /**
   * Item's index for group binding
   */
  index: PropTypes.number,
};
const defaultProps = {
  value: void 0,
  checked: void 0,
  defaultChecked: false,
  disabled: false,
  text: '',
  onChange: noop,
  index: 0,
};

export class Radio extends Component {
  constructor(props) {
    super(props);

    this._inputId = `radio-${nextId++}`;

    this.state = {
      checked: isUndef(this.props.checked)
        ? props.defaultChecked
        : this.props.checked,
    };

    this._handleChange = this._handleChange.bind(this);
  }

  _handleChange(event) {
    const checked = event.target.checked;

    this.props.onChange({
      value: this.props.value,
      index: this.props.index,
    });

    if (this.props.checked === null) this.setState({ checked });
  }

  render() {
    const checked = isUndef(this.props.checked)
      ? this.state.checked
      : this.props.checked;

    return (
      <RadioStyled>
        <input
          id={this._inputId}
          type="radio"
          checked={checked}
          disabled={this.props.disabled}
          onChange={this._handleChange}
          tabIndex="0"
        />
        <RadioLabelStyled
          checked={checked}
          disabled={this.props.disabled}
          htmlFor={this._inputId}
        >
          {this.props.text}
        </RadioLabelStyled>
      </RadioStyled>
    );
  }
}

Radio.propTypes = propTypes;
Radio.defaultProps = defaultProps;
Radio.displayName = 'Radio';
