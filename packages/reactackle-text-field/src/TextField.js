import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TooltipIcon } from 'reactackle-tooltip-icon';

import {
  withTheme,
  noop,
  returnTrue,
  isUndef,
  registerDefaultComponentTheme,
} from 'reactackle-core';

import { InfoBoxStyled } from './styles/InfoBoxStyled';
import { IconOuterStyled } from './styles/IconOuterStyled';
import { IconInnerStyled } from './styles/IconInnerStyled';
import { InnerButton } from './styles/InnerButton';
import { LabelSlidingStyled } from './styles/LabelSlidingStyled';
import { LabelStyled } from './styles/LabelStyled';
import { LabelTextStyled } from './styles/LabelTextStyled';
import { MessageStyled } from './styles/MessageStyled';
import { CounterStyled } from './styles/CounterStyled';
import { PrefixStyled } from './styles/PrefixStyled';
import { PrefixTextStyled } from './styles/PrefixTextStyled';
import { PostfixStyled } from './styles/PostfixStyled';
import { PostfixTextStyled } from './styles/PostfixTextStyled';
import { TextFieldStyled } from './styles/TextFieldStyled';
import { TextFieldGroupStyled } from './styles/TextFieldGroupStyled';
import {
  InputStyled,
  TextareaAutosizeStyled,
  TextareaStyled,
} from './styles/TextFieldElementStyled';
import { TextFieldContentBoxStyled } from './styles/TextFieldContentBoxStyled';
import { TextFieldRowStyled } from './styles/TextFieldRowStyled';
import componentTheme from './styles/theme';

registerDefaultComponentTheme('textfield', componentTheme);

const propTypes = {
  /**
   * Value of the TextField
   */
  value: PropTypes.string,
  /**
   * Default value of the TextField
   */
  defaultValue: PropTypes.string,
  /**
   * Placeholder of the TextField
   */
  placeholder: PropTypes.string,
  /**
   * Type of the TextField
   */
  type: PropTypes.oneOf([
    'text',
    'number',
    'email',
    'tel',
    'url',
    'password',
  ]),
  /**
   * If bordered = false, Input will have only bottom border
   */
  bordered: PropTypes.bool,
  /**
   * Full-width Input doesn't have borders
   */
  fullWidth: PropTypes.bool,
  /**
   * If TextField is dense it has smaller paddings
   */
  dense: PropTypes.bool,
  /**
   * If TextField's max symbol amount defined, symbol counter will be revealed
   */
  symbolLimit: PropTypes.number,
  /**
   * Determines whether TextField is disabled
   */
  disabled: PropTypes.bool,
  /**
   * Defines label text
   */
  label: PropTypes.string,
  /**
   * Defines TextField message (help or error text)
   */
  message: PropTypes.string,
  /**
   * If clearingIcon = true, TextField can be cleared by clicking on clearing-icon
   */
  clearingIcon: PropTypes.bool,
  /**
   * Add icon behind TextField (see IconSvg or IconCustom props)
   */
  iconOuter: PropTypes.element,
  /**
   * Show icon inside TextField's boundaries (see IconSvg or IconCustom props)
   */
  iconInner: PropTypes.element,
  /**
   * Define label position
   */
  labelPosition: PropTypes.oneOf(['top', 'side']),
  /**
   * If slidingLabel = true, label will float to top
   * when parent TextField is focused or filled
   */
  slidingLabel: PropTypes.bool,
  /**
   * Automatically scroll window to the focused input
   */
  scrollOnFocus: PropTypes.bool,
  /**
   * This prop will be passed to inner input element
   */
  autoComplete: PropTypes.string,
  /**
   * Adds tooltip
   */
  tooltip: PropTypes.string,
  /**
   * Defines component's colorScheme
   */
  colorScheme: PropTypes.oneOf(['neutral', 'error', 'success']),
  /**
   * Add prefix text
   */
  prefix: PropTypes.string,
  /**
   * Add postfix text
   */
  postfix: PropTypes.string,
  /**
   * Determines whether to render TextField in textarea mode
   */
  multiline: PropTypes.bool,
  /**
   * Determines max and min row amount, applies only if multiline prop is true
   */
  multilineRows: PropTypes.shape({
    min: PropTypes.number,
    max: PropTypes.number,
  }),
  /**
   * Specify type of resizing, only applied in multiline TextField
   */
  resize: PropTypes.oneOf(['none', 'manual', 'auto']),
  /**
   * @ignore
   */
  theme: PropTypes.object,
  /**
   * Determines pattern to test input
   */
  pattern: PropTypes.object,
  /**
   * Determines pattern function to test input
   */
  patternFn: PropTypes.func,
  /**
   * Specify function to call on TextField value change
   */
  onChange: PropTypes.func,
  /**
   * Specify function to call on TextField focus
   */
  onFocus: PropTypes.func,
  /**
   * Specify function to call on onBlur
   */
  onBlur: PropTypes.func,
  /**
   * Specify function to call on pattern error
   */
  onPatternError: PropTypes.func,
  /**
   * Specify function to call on length error
   */
  onLengthError: PropTypes.func,
  /**
   * Specify function to call on TextField click
   */
  onClick: PropTypes.func,
};

const defaultProps = {
  value: void 0,
  defaultValue: '',
  placeholder: '',
  type: 'text',
  bordered: false,
  fullWidth: false,
  multiline: false,
  multilineRows: { min: 2, max: 4 },
  resize: 'auto',
  dense: false,
  symbolLimit: 0,
  disabled: false,
  label: '',
  message: '',
  clearingIcon: false,
  iconOuter: null,
  iconInner: null,
  labelPosition: 'top',
  slidingLabel: false,
  scrollOnFocus: false,
  autoComplete: 'off',
  tooltip: null,
  colorScheme: 'neutral',
  prefix: '',
  postfix: '',
  theme: {},
  pattern: /.*/,
  patternFn: returnTrue,
  onChange: noop,
  onFocus: noop,
  onBlur: noop,
  onPatternError: noop,
  onLengthError: noop,
  onClick: noop,
};

class _TextField extends Component {
  constructor(props) {
    super(props);
    this.id = `${this.constructor.displayName}_${this.constructor.nextId++}`;

    this.state = {
      hidden: props.type === 'password' ? true : null,
      value: this._valueDefined() ? props.value : props.defaultValue,
      focus: false,
      lengthError: false,
      patternError: false,
    };
    this.textFieldComponent = this._getTextFieldComponentStyled();
    this._saveRef = this._saveRef.bind(this);
    this._saveRefWrap = this._saveRefWrap.bind(this);
    this._handleHideValue = this._handleHideValue.bind(this);
    this._handleClearValue = this._handleClearValue.bind(this);
    this._handleBlur = this._handleBlur.bind(this);
    this._handleChange = this._handleChange.bind(this);
    this._handleFocus = this._handleFocus.bind(this);
    this._handleClick = this._handleClick.bind(this);
    this._handleChange = this._handleChange.bind(this);
    this.focus = this.focus.bind(this);
    this.getValue = this.getValue.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const isTypeChanged = this.props.type !== nextProps.type;
    const isTextFieldChanged = this.props.multiline !== nextProps.multiline;

    const isValueChanged = nextProps.value !== this.props.value;
    const isDefaultValueChanged =
      nextProps.defaultValue !== this.props.defaultValue;

    if (isValueChanged && this._valueDefined(nextProps))
      this.setState({ value: nextProps.value });
    if (isDefaultValueChanged && !this.state.value.length)
      this.setState({ value: nextProps.defaultValue });
    if (isTypeChanged)
      this.setState({ hidden: nextProps.type === 'password' ? true : null });
    if (isTextFieldChanged)
      this.textFieldComponent = this._getTextFieldComponentStyled();
  }

  getValue() {
    return this._valueDefined() ? this.props.value : this.state.value;
  }

  focus() {
    if (this._domNodeInput && typeof this._domNodeInput.focus === 'function')
      this._domNodeInput.focus();

    this.setState({ focus: true });

    this.props.onFocus();
  }

  _valueDefined(source = this.props) {
    return !isUndef(source.value);
  }

  _getTextFieldComponentStyled() {
    if (!this.props.multiline) return InputStyled;

    return this.props.resize === 'auto'
      ? TextareaAutosizeStyled
      : TextareaStyled;
  }

  _parseValue(value) {
    return value;
  }

  _handleHideValue() {
    this.setState(({ hidden }) => ({ hidden: !hidden }));
  }

  _handleFocus(event) {
    if (
      this.props.scrollOnFocus &&
      this._domNodeWrap &&
      typeof this._domNodeWrap.scrollIntoView === 'function'
    )
      this._domNodeWrap.scrollIntoView();

    this.setState({ focus: true });

    this.props.onFocus(event);
  }

  _handleBlur(event) {
    this.setState({ focus: false });

    this.props.onBlur(event);
  }

  _handleClick(event) {
    this.props.onClick(event);
  }

  _handleChange(event) {
    let value = this._parseValue(
      (event.currentTarget || event.target).value, // TODO fix tests
    );

    const lengthError =
      this.props.symbolLimit > 0 && value.length > this.props.symbolLimit;

    if (lengthError) {
      value = value.slice(0, this.props.symbolLimit);
      this.props.onLengthError();
    }

    const patternError = !(
      this.props.patternFn(value) && this.props.pattern.test(value)
    );

    if (patternError) this.props.onPatternError();
    else this.props.onChange({ value });

    if (!this._valueDefined()) this.setState({ value });

    this.setState({
      lengthError,
      patternError,
    });
  }

  _saveRefWrap(ref) {
    this._domNodeWrap = ref;
  }

  _saveRef(ref) {
    this._domNodeInput = ref;
  }

  _handleClearValue() {
    this.setState({
      value: '',
      lengthError: false,
      patternError: false,
    });
    this.props.onChange({ value: '' });
  }

  _renderCounter() {
    if (!this.props.symbolLimit) return null;

    return (
      <CounterStyled
        error={this.state.lengthError}
        disabled={this.props.disabled}
        focus={this.state.focus}
      >
        <span>
          {this.state.value.length}
        </span>
        <span> / </span>
        <span>
          {this.props.symbolLimit}
        </span>
      </CounterStyled>
    );
  }

  _renderMessage() {
    if (!this.props.message) return null;

    return (
      <MessageStyled
        colorScheme={this.props.colorScheme}
        disabled={this.props.disabled}
        focus={this.state.focus}
      >
        {this.props.message}
      </MessageStyled>
    );
  }

  _renderLowerLine() {
    if (!this.props.message && !this.props.symbolLimit) return null;

    const message = this._renderMessage(),
      counter = this._renderCounter();

    return (
      <InfoBoxStyled
        bordered={this.props.bordered}
        labelPosition={this.props.labelPosition}
        dense={this.props.dense}
        fullWidth={this.props.fullWidth}
        iconOuter={this.props.iconOuter}
      >
        {message}
        {counter}
      </InfoBoxStyled>
    );
  }

  _renderInnerButton() {
    const componentPath = this.props.theme.reactackle.components.textfield;

    const clearingIconElement = componentPath.clearingIconElement;

    const passwordIconElement = this.state.hidden
      ? componentPath.passwordIconShowElement
      : componentPath.passwordIconHideElement;

    if (typeof this.state.hidden === 'boolean') {
      return (
        <InnerButton
          disabled={this.props.disabled}
          focus={this.state.focus}
          dense={this.props.dense}
          fullWidth={this.props.fullWidth}
          colorScheme={this.props.colorScheme}
          onClick={this._handleHideValue}
        >
          {passwordIconElement}
        </InnerButton>
      );
    } else if (this.props.clearingIcon) {
      return (
        <InnerButton
          disabled={this.props.disabled}
          focus={this.state.focus}
          dense={this.props.dense}
          fullWidth={this.props.fullWidth}
          colorScheme={this.props.colorScheme}
          onClick={this._handleClearValue}
        >
          {clearingIconElement}
        </InnerButton>
      );
    }

    return null;
  }

  _renderIconOuter() {
    const { iconOuter } = this.props;
    if (!iconOuter) return null;

    return (
      <IconOuterStyled
        disabled={this.props.disabled}
        focus={this.state.focus}
        dense={this.props.dense}
        fullWidth={this.props.fullWidth}
        colorScheme={this.props.colorScheme}
        htmlFor={this.id}
      >
        {iconOuter}
      </IconOuterStyled>
    );
  }

  _renderIconInner() {
    const { iconInner } = this.props;
    if (!iconInner) return null;

    return (
      this.props.iconInner &&
      <IconInnerStyled
        disabled={this.props.disabled}
        focus={this.state.focus}
        dense={this.props.dense}
        fullWidth={this.props.fullWidth}
        colorScheme={this.props.colorScheme}
      >
        {iconInner}
      </IconInnerStyled>
    );
  }

  _renderPrefixText() {
    if (!this.props.prefix) return null;

    return (
      <PrefixTextStyled
        disabled={this.props.disabled}
        bordered={this.props.bordered}
        colorScheme={this.props.colorScheme}
        focus={this.state.focus}
        dense={this.props.dense}
        fullWidth={this.props.fullWidth}
      >
        <span>
          {this.props.prefix}
        </span>
      </PrefixTextStyled>
    );
  }

  _renderLabel() {
    if (!this.props.label) return null;

    let tooltip = null;
    if (this.props.tooltip) tooltip = <TooltipIcon text={this.props.tooltip} />;
    const LabelTag = this.props.slidingLabel ? LabelSlidingStyled : LabelStyled;

    return (
      <LabelTag
        htmlFor={this.id}
        labelPosition={this.props.labelPosition}
        disabled={this.props.disabled}
        focus={this.state.focus}
        filled={!!this.state.value.length}
        dense={this.props.dense}
        fullWidth={this.props.fullWidth}
        colorScheme={this.props.colorScheme}
        iconOuter={this.props.iconOuter}
        bordered={this.props.bordered}
      >
        <LabelTextStyled>
          {this.props.label}
        </LabelTextStyled>
        {tooltip}
      </LabelTag>
    );
  }

  _renderPrefix() {
    if (!this.props.prefix && !this.props.iconInner) return null;

    return (
      <PrefixStyled
        disabled={this.props.disabled}
        bordered={this.props.bordered}
        colorScheme={this.props.colorScheme}
        focus={this.state.focus}
        dense={this.props.dense}
        fullWidth={this.props.fullWidth}
        htmlFor={this.id}
      >
        {this._renderIconInner()}
        {this._renderPrefixText()}
      </PrefixStyled>
    );
  }

  _renderPostfixText() {
    return (
      <PostfixTextStyled
        disabled={this.props.disabled}
        bordered={this.props.bordered}
        colorScheme={this.props.colorScheme}
        focus={this.state.focus}
        dense={this.props.dense}
        fullWidth={this.props.fullWidth}
      >
        <span>
          {this.props.postfix}
        </span>
      </PostfixTextStyled>
    );
  }

  _renderPostfix() {
    if (!this.props.postfix) return null;

    const postfixText = this._renderPostfixText();

    return (
      <PostfixStyled
        disabled={this.props.disabled}
        bordered={this.props.bordered}
        colorScheme={this.props.colorScheme}
        focus={this.state.focus}
        dense={this.props.dense}
        fullWidth={this.props.fullWidth}
        htmlFor={this.id}
      >
        {postfixText}
      </PostfixStyled>
    );
  }

  /**
   * @virtual
   */
  _renderTextField(textFieldProps) {
    const TextFieldComponent = this.textFieldComponent;
    const isPasswordUnhidden = textFieldProps.type === 'password' && !this.state.hidden;
    const inputType = isPasswordUnhidden ? 'text' : textFieldProps.type;
    
    const props = textFieldProps;
    props.type = inputType;
    if (this.props.multiline && this.props.resize !== 'auto') {
      props.rows = this.props.multilineRows.min;
    }

    return <TextFieldComponent {...props} />;
  }

  render() {
    const iconOuter = this._renderIconOuter(),
      prefix = this._renderPrefix(),
      textField = this._renderTextField({
        resize: this.props.resize,
        saveRef: this._saveRef,
        id: this.id,
        dense: this.props.dense,
        fullWidth: this.props.fullWidth,
        placeholder: this.props.placeholder,
        bordered: this.props.bordered,
        colorScheme: this.props.colorScheme,
        focus: this.state.focus,
        type: this.props.type,
        value: this.state.value,
        autoComplete: this.props.autoComplete,
        onChange: this._handleChange,
        onFocus: this._handleFocus,
        onBlur: this._handleBlur,
        onClick: this._handleClick,
        maxRows: this.props.multilineRows.max,
        minRows: this.props.multilineRows.min,
        disabled: this.props.disabled,
      }),
      postfix = this._renderPostfix(),
      button = this._renderInnerButton(),
      label = this._renderLabel(),
      lowerLine = this._renderLowerLine();

    return (
      <TextFieldStyled
        innerRef={this._saveRefWrap}
        dense={this.props.dense}
        fullWidth={this.props.fullWidth}
      >
        <TextFieldContentBoxStyled labelPosition={this.props.labelPosition}>
          {label}
          <TextFieldRowStyled
            disabled={this.props.disabled}
            bordered={this.props.bordered}
            colorScheme={this.props.colorScheme}
            focus={this.state.focus}
            dense={this.props.dense}
            fullWidth={this.props.fullWidth}
            slidingLabel={this.props.slidingLabel}
          >
            {iconOuter}
            <TextFieldGroupStyled
              disabled={this.props.disabled}
              bordered={this.props.bordered}
              colorScheme={this.props.colorScheme}
              focus={this.state.focus}
              dense={this.props.dense}
              fullWidth={this.props.fullWidth}
            >
              {prefix}
              {textField}
              {button}
              {postfix}
            </TextFieldGroupStyled>
          </TextFieldRowStyled>
        </TextFieldContentBoxStyled>
        {lowerLine}
      </TextFieldStyled>
    );
  }
}

_TextField.nextId = 0;
_TextField.propTypes = propTypes;
_TextField.defaultProps = defaultProps;
_TextField.displayName = 'TextField';

const TextField = withTheme(_TextField);
TextField._withoutHOC = _TextField;
export default TextField;
