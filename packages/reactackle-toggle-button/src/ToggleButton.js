'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TooltipIcon } from 'reactackle-tooltip-icon';
import { noop, isUndef, registerDefaultComponentTheme } from 'reactackle-core';

import { ToggleStyled } from './styles/ToggleStyled';
import { ToggleBarBoxStyled } from './styles/ToggleBarBoxStyled';
import { ToggleBarStyled } from './styles/ToggleBarStyled';
import { ToggleInputStyled } from './styles/ToggleInputStyled';
import { ToggleLabelStyled } from './styles/ToggleLabelStyled';
import { ToggleLabelTextBoxStyled } from './styles/ToggleLabelTextBoxStyled';
import { ToggleLabelTextStyled } from './styles/ToggleLabelTextStyled';
import { ToggleTooltipBoxStyled } from './styles/ToggleTooltipBoxStyled';
import componentTheme from './styles/theme';

registerDefaultComponentTheme('toggleButton', componentTheme);

const propTypes = {
  /**
   * Determines whether ToggleButton is checked
   */
  checked: PropTypes.bool,
  /**
   * Determines whether ToggleButton is checked by default
   */
  defaultChecked: PropTypes.bool,
  /**
   * Determines whether ToggleButton is disabled
   */
  disabled: PropTypes.bool,
  /**
   * Determines ToggleButton label
   */
  label: PropTypes.string,
  /**
   * Determines ToggleButton tooltip
   */
  tooltip: PropTypes.string,
  /**
   * Determines ToggleButton label position
   */
  labelPosition: PropTypes.oneOf(['left', 'right']),
  /**
   * Specify function to call on ToggleButton state change
   */
  onChange: PropTypes.func,
};
const defaultProps = {
  checked: void 0,
  defaultChecked: false,
  disabled: false,
  label: '',
  tooltip: '',
  labelPosition: 'left',
  onChange: noop,
};

let nextId = 0;

export default class ToggleButton extends Component {
  constructor(props) {
    super(props);

    this._inputId = `toggle-${nextId++}`;

    this.state = {
      checked: isUndef(props.checked) ? props.defaultChecked : props.checked,
      hovered: false,
      focused: false,
    };

    this._handleChange = this._handleChange.bind(this);
    this._handleMouseEnter = this._handleMouseEnter.bind(this);
    this._handleMouseLeave = this._handleMouseLeave.bind(this);
    this._handleFocus = this._handleFocus.bind(this);
    this._handleBlur = this._handleBlur.bind(this);
  }

  _handleChange(event) {
    const checked = event.target.checked;
    this.props.onChange({
      value: checked,
    });

    if (isUndef(this.props.checked)) this.setState({ checked });
  }

  _handleMouseEnter() {
    this.setState({
      hovered: true,
    });
  }

  _handleMouseLeave() {
    this.setState({
      hovered: false,
    });
  }

  _handleFocus() {
    this.setState({ focused: true });
  }

  _handleBlur() {
    this.setState({ focused: false });
  }

  _renderTooltip() {
    if (!this.props.tooltip) return null;

    return (
      <ToggleTooltipBoxStyled>
        <TooltipIcon text={this.props.tooltip} />
      </ToggleTooltipBoxStyled>
    );
  }

  _renderLabel() {
    if (!this.props.label) return null;

    const tooltip = this._renderTooltip(),
      checked = isUndef(this.props.checked)
        ? this.state.checked
        : this.props.checked;

    return (
      <ToggleLabelTextBoxStyled
        disabled={this.props.disabled}
        checked={checked}
        hasTooltip={this.props.tooltip}
        labelPosition={this.props.labelPosition}
      >
        <ToggleLabelTextStyled hasTooltip={this.props.tooltip}>
          {this.props.label}
        </ToggleLabelTextStyled>
        {tooltip}
      </ToggleLabelTextBoxStyled>
    );
  }

  render() {
    const checked = isUndef(this.props.checked)
      ? this.state.checked
      : this.props.checked;

    const label = this._renderLabel();

    return (
      <ToggleStyled
        onMouseEnter={this._handleMouseEnter}
        onMouseLeave={this._handleMouseLeave}
        disabled={this.props.disabled}
      >
        <ToggleLabelStyled
          htmlFor={this._inputId}
          disabled={this.props.disabled}
        >
          <ToggleBarBoxStyled
            labelPosition={this.props.labelPosition}
            disabled={this.props.disabled}
          >
            <ToggleBarStyled
              htmlFor={this._inputId}
              checked={checked}
              disabled={this.props.disabled}
              hover={this.state.hovered}
              focus={this.state.focused}
            />
            <ToggleInputStyled
              id={this._inputId}
              type="checkbox"
              disabled={this.props.disabled}
              checked={checked}
              onChange={this._handleChange}
              tabIndex={0}
              onFocus={this._handleFocus}
              onBlur={this._handleBlur}
            />
          </ToggleBarBoxStyled>
          {label}
        </ToggleLabelStyled>
      </ToggleStyled>
    );
  }
}

ToggleButton.propTypes = propTypes;
ToggleButton.defaultProps = defaultProps;
ToggleButton.displayName = 'ToggleButton';
