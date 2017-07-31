'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TooltipIcon } from 'reactackle-tooltip-icon';
import { noop, isUndef } from 'reactackle-core';
import { OptionsListNative } from '../OptionsListNative/OptionsListNative';
import { OptionPropTypeNative } from '../OptionPropType/OptionPropTypeNative';
import { SelectBoxStyled } from '../styles/SelectBoxStyled';
import { SelectBoxLabelStyled } from '../styles/SelectBoxLabelStyled';
import { SelectBoxLabelTextStyled } from '../styles/SelectBoxLabelTextStyled';
import { SelectBoxInfoBoxStyled } from '../styles/SelectBoxInfoBoxStyled';
import { MessageStyled } from '../styles/MessageStyled';
import { ContentBoxStyled } from '../styles/ContentBoxStyled';
import { WrapperStyled } from '../styles/WrapperStyled';
import { SelectBoxNativeStyled } from './styles/SelectBoxNativeStyled';

const propTypes = {
  /**
   * Determines whether SelectBox is full width
   */
  fullWidth: PropTypes.bool,
  /**
   * Determines dense of the SelectBox
   */
  dense: PropTypes.bool,
  /**
   * Determines whether SelectBox is disabled
   */
  disabled: PropTypes.bool,
  /**
   * Default value of the SelectBox
   */
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * Default value of the SelectBox
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * Reverse options list
   */
  reverse: PropTypes.bool,
  /**
   * Define help or error message
   */
  message: PropTypes.string,
  /**
   * Determines placeholder of the SelectBox
   */
  placeholder: PropTypes.string,
  /**
   * Tooltip text of the SelectBox
   */
  tooltip: PropTypes.string,
  /**
   * Label text of the SelectBox
   */
  label: PropTypes.string,
  /**
   * Determines label position
   */
  labelPosition: PropTypes.oneOf(['top', 'side']),
  /**
   * Determines whether SelectBox is bordered
   */
  bordered: PropTypes.bool,
  /**
   * Color scheme of the SelectBox
   */
  colorScheme: PropTypes.oneOf(['neutral', 'error', 'success']),
  /**
   * Determines options of the SelectBox
   */
  options: PropTypes.arrayOf(OptionPropTypeNative),
  /**
   * Specify function to call on SelectBox value change
   */
  onChange: PropTypes.func,
};
const defaultProps = {
  fullWidth: false,
  dense: false,
  disabled: false,
  defaultValue: void 0,
  value: void 0,
  reverse: false,
  message: '',
  placeholder: '',
  tooltip: '',
  label: '',
  labelPosition: 'top',
  bordered: false,
  colorScheme: 'neutral',
  options: [],
  onChange: noop,
};

let nextId = 0;

export class SelectBoxNative extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: `select-box-${nextId++}`,
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

  _handleChange({ value }) {
    if (isUndef(this.props.value)) {
      this.setState({
        value: value.value,
      });
    }

    this.props.onChange({
      value: value.value,
    });
  }

  _renderLabel() {
    const tooltip = this.props.tooltip
      ? <TooltipIcon text={this.props.tooltip} />
      : null;

    return (
      <SelectBoxLabelStyled
        htmlFor={this.state.id}
        dense={this.props.dense}
        fullWidth={this.props.fullWidth}
        labelPosition={this.props.labelPosition}
        bordered={this.props.bordered}
        disabled={this.props.disabled}
        colorScheme={this.props.colorScheme}
        focus={this.state.open}
      >
        <SelectBoxLabelTextStyled>
          {this.props.label}
        </SelectBoxLabelTextStyled>
        {tooltip}
      </SelectBoxLabelStyled>
    );
  }

  _renderMessage() {
    if (!this.props.message) return null;

    return (
      <SelectBoxInfoBoxStyled
        dense={this.props.dense}
        fullWidth={this.props.fullWidth}
        labelPosition={this.props.labelPosition}
        bordered={this.props.bordered}
        disabled={this.props.disabled}
      >
        <MessageStyled
          colorScheme={this.props.colorScheme}
          disabled={this.props.disabled}
        >
          {this.props.message}
        </MessageStyled>
      </SelectBoxInfoBoxStyled>
    );
  }

  render() {
    const options = this.props.reverse
      ? [...this.props.options].reverse()
      : this.props.options;

    const currentValue = isUndef(this.props.value)
      ? this.state.value
      : this.props.value;

    const value = options.findIndex(item => item.value === currentValue);

    const label = this._renderLabel(),
      message = this._renderMessage();

    return (
      <SelectBoxStyled>
        <SelectBoxNativeStyled>
          <ContentBoxStyled>
            {label}
            <WrapperStyled>
              <OptionsListNative
                options={options}
                value={value}
                disabled={this.props.disabled}
                placeholder={this.props.placeholder}
                dense={this.props.dense}
                fullWidth={this.props.fullWidth}
                bordered={this.props.bordered}
                colorScheme={this.props.colorScheme}
                onChange={this._handleChange}
              />
            </WrapperStyled>
          </ContentBoxStyled>
          {message}
        </SelectBoxNativeStyled>
      </SelectBoxStyled>
    );
  }
}

SelectBoxNative.propTypes = propTypes;
SelectBoxNative.defaultProps = defaultProps;
SelectBoxNative.displayName = 'SelectBoxNative';
