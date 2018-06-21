import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { noop, isUndef, registerDefaultComponentTheme, keyboardCodes } from 'reactackle-core';
import { TooltipIcon } from 'reactackle-tooltip-icon';
import { CheckboxStyled } from './styles/CheckboxStyled';
import { CheckboxElementStyled } from './styles/CheckboxElementStyled';
import { CheckboxInputStyled } from './styles/CheckboxInputStyled';
import { CheckboxLabelStyled } from './styles/CheckboxLabelStyled';
import { LabelElementStyled } from './styles/LabelElementStyled';
import { LabelTextStyled } from './styles/LabelTextStyled';
import { MessageStyled } from './styles/MessageStyled';
import CheckboxIcon from './CheckboxIcon';
import componentTheme from './styles/theme';

registerDefaultComponentTheme('checkbox', componentTheme);

const propTypes = {
  /**
   * Determines whether to check Checkbox by default
   */
  defaultChecked: PropTypes.bool,
  /**
   * Determines Checkbox checked state
   */
  checked: PropTypes.bool,
  /**
   * Determines whether to disable checkbox
   */
  disabled: PropTypes.bool,
  /**
   * Label of Checkbox
   */
  label: PropTypes.string,
  /**
   * Label Component
   */
  labelElement: PropTypes.element,
  /**
   * Add tooltip
   */
  tooltip: PropTypes.string,
  /**
   * Pass error message
   */
  errorMessage: PropTypes.string,
  /**
   * Specify function that will be called on Checkbox checked state change
   */
  onChange: PropTypes.func,
};

const defaultProps = {
  defaultChecked: false,
  checked: void 0,
  disabled: false,
  label: '',
  tooltip: '',
  errorMessage: '',
  labelElement: null,
  onChange: noop,
};

let nextId = 0;

export default class Checkbox extends Component {
  constructor(props) {
    super(props);

    this._inputId = `checkbox-${nextId++}`;

    this.state = {
      checked: isUndef(props.checked) ? props.defaultChecked : props.checked,
      focused: false,
    };

    this._handleChange = this._handleChange.bind(this);
    this._handleFocus = this._handleFocus.bind(this);
    this._handleBlur = this._handleBlur.bind(this);
    this._changeCheckedState = this._changeCheckedState.bind(this);
    this._keyboardListener = this._keyboardListener.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.checked !== this.props.checked &&
      isUndef(nextProps.checked)
    ) {
      this.setState({
        checked: this.props.checked,
      });
    }
    const isDefaultValueChanged =
      nextProps.defaultChecked !== this.props.defaultChecked;
      
    if (isDefaultValueChanged) {
      this.setState({ checked: nextProps.defaultChecked });
    }
  }

  get disabled() {
    return this.props.disabled || !!this.props.errorMessage;
  }

  _handleChange(event) {
    this._changeCheckedState(event.target.checked);
  }

  _changeCheckedState(checked) {
    if (isUndef(this.props.checked)) {
      this.setState({
        checked,
      });
    }

    this.props.onChange({
      value: checked,
    });
  }

  _handleFocus() {
    this._toggleKeyboardListener(true);
    this.setState({ focused: true });
  }

  _handleBlur() {
    this._toggleKeyboardListener(false);
    this.setState({ focused: false });
  }

  _keyboardListener(e) {
    const key = e.keyCode || e.which;
    if (key === keyboardCodes.SPACE) {
      this._changeCheckedState(!this.state.checked);
    }
  }
  _toggleKeyboardListener(condition) {
    if (condition) {
      document.addEventListener('keypress', this._keyboardListener);
    } else {
      document.removeEventListener('keypress', this._keyboardListener);
    }
  }

  render() {
    const checked = isUndef(this.props.checked)
      ? this.state.checked
      : this.props.checked;

    const tooltip =
      this.props.tooltip && (this.props.label || this.props.labelElement)
        ? <TooltipIcon text={this.props.tooltip} />
        : null;

    const label = this.props.label
      ? <span>
          <LabelTextStyled hasTooltip={!!this.props.tooltip}>
            {this.props.label}
          </LabelTextStyled>
          {tooltip}
        </span>
      : null;

    const labelElement = this.props.labelElement
      ? <LabelElementStyled hasTooltip={!!this.props.tooltip}>
          {this.props.labelElement}
          {tooltip &&
            <LabelTextStyled>
              {tooltip}
            </LabelTextStyled>}
        </LabelElementStyled>
      : null;

    const checkboxIcon =
      !this.props.label && !this.props.labelElement
        ? <CheckboxIcon
            disabled={this.disabled}
            checked={checked}
            tooltipText={this.props.tooltip}
          />
        : <CheckboxIcon
            disabled={this.props.disabled}
            checked={checked}
          />;

    const message = this.props.errorMessage
      ? <MessageStyled>
          {this.props.errorMessage}
        </MessageStyled>
      : null;

    return (
      <CheckboxStyled>
        <CheckboxElementStyled
          textFree={!this.props.label && !this.props.labelElement}
        >
          <CheckboxInputStyled
            id={this._inputId}
            type="checkbox"
            checked={checked}
            disabled={this.disabled}
            onChange={this._handleChange}
            tabIndex={-1}
          />
          <CheckboxLabelStyled
            textFree={!this.props.label && !this.props.labelElement}
            disabled={this.disabled}
            checked={checked}
            htmlFor={this._inputId}
            tabIndex={this.disabled ? -1 : 0}
            onFocus={this._handleFocus}
            onBlur={this._handleBlur}
          >
            {checkboxIcon}
            {label}
            {labelElement}
          </CheckboxLabelStyled>
        </CheckboxElementStyled>
        {message}
      </CheckboxStyled>
    );
  }
}

Checkbox.propTypes = propTypes;
Checkbox.defaultProps = defaultProps;
Checkbox.displayName = 'Checkbox';
