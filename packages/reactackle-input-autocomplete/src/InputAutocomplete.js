import React, { Component } from 'react';
import PropTypes from 'prop-types';
import pick from 'lodash.pick';
import { TextField } from 'reactackle-text-field';
import { AutoPosition } from 'reactackle-autoposition';
import {
  noop,
  getKey,
  isUndef,
  withTheme,
  registerDefaultComponentTheme,
  keyboardCodes,
} from 'reactackle-core';
import { InputAutocompleteStyled } from './styles/InputAutocompleteStyled';
import { OptionsListStyled } from './styles/OptionsListStyled';
import { OptionStyled } from './styles/OptionStyled';
import componentTheme from './styles/theme';

registerDefaultComponentTheme('inputAutocomplete', componentTheme);

const propTypes = {
  ...TextField.propTypes,
  /**
   * Value of the TextField
   */
  value: PropTypes.any,
  /**
   * Default value of the TextField
   */
  defaultValue: PropTypes.any,
  /**
   * Array of options
   */
  options: PropTypes.array,
  /**
   * Handler for TextField change event
   */
  onChange: PropTypes.func,
  /**
   * Handler for TextField focus event
   */
  onFocus: PropTypes.func,
  /**
   * Handler for TextField blur event
   */
  onBlur: PropTypes.func,
  /**
   * Specify maximum amount of options, visible at the same time without
   * scrolling
   */
  maxOptionsVisible: PropTypes.number,
  /**
   * Define boundaries to which the options list will be positioned
   */
  wrapper: PropTypes.object,
};

const defaultProps = {
  ...TextField.defaultProps,
  options: [],
  onChange: noop,
  onFocus: noop,
  onBlur: noop,
  maxOptionsVisible: 5,
  wrapper: window,
};

const keysInputPropTypes = Object.keys(TextField.propTypes);

class _InputAutocomplete extends Component {
  constructor(props) {
    super(props);

    this._optionsInFocus = false;
    this._needUpdatePositionOptions = false;

    this._handleChange = this._handleChange.bind(this);
    this._handleOptionClick = this._handleOptionClick.bind(this);
    this._handleFocusInput = this._handleFocusInput.bind(this);
    this._handleBlurInput = this._handleBlurInput.bind(this);
    this._handleKeyDown = this._handleKeyDown.bind(this);
    this._handleOptionMouseEnter = this._handleOptionMouseEnter.bind(this);
    this._handleOptionMouseLeave = this._handleOptionMouseLeave.bind(this);
    this._handleUpdatePortal = this._handleUpdatePortal.bind(this);
    this._saveRefInputWrapper = this._saveRefInputWrapper.bind(this);
    this._saveRefAutoPosition = this._saveRefAutoPosition.bind(this);
    this._saveRefInput = this._saveRefInput.bind(this);
    this._saveOptionsListRef = this._saveOptionsListRef.bind(this);
    // eslint-disable-next-line max-len
    this._setScrollPositionByOptionKey = this._setScrollPositionByOptionKey.bind(
      this,
    );

    this._input = null;
    this._autoPosition = null;
    this._optionsList = null;
    this._optonsRefsByIndex = {};

    const value = isUndef(props.value) ? props.defaultValue : props.value;

    this.state = {
      inputRef: null,
      value,
      highlightedOption: -1,
      showOptions: false,
    };

    this.userValue = value;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.props.value) {
      const newState = {};
      let needUpdateState = false;

      if (isUndef(nextProps.value)) {
        newState.value = this.props.value;
        needUpdateState = true;
      }

      if (nextProps.options.length) {
        newState.showOptions = true;
        needUpdateState = true;
      }

      if (needUpdateState) this.setState(newState);
    }

    if (nextProps.options.length !== this.props.options.length)
      this._needUpdatePositionOptions = true;
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this._handleKeyDown, false);
  }

  _handleFocusInput() {
    window.addEventListener('keydown', this._handleKeyDown, false);

    if (this.props.options.length && !this.state.showOptions) {
      this.setState({
        showOptions: true,
      });
    }

    this.props.onFocus();
  }

  focus() {
    this._input.focus();
  }

  _handleBlurInput() {
    window.removeEventListener('keydown', this._handleKeyDown, false);

    if (!this._optionsInFocus) {
      this.setState({
        showOptions: false,
        highlightedOption: -1,
      });
    }

    this.props.onBlur();
  }

  _handleKeyDown(e) {
    if (!this.state.showOptions) return;

    if (e.keyCode === keyboardCodes.DOWN) {
      e.preventDefault();
      this._nextOption();
    }

    if (e.keyCode === keyboardCodes.UP) {
      e.preventDefault();
      this._prevOption();
    }

    if (e.keyCode === keyboardCodes.ENTER) {
      const option = this._getCurrentOption();
      const newState = {
        showOptions: false,
        highlightedOption: -1,
      };

      if (option) {
        const { value } = option;

        this.props.onChange({
          value,
          option,
          complete: true,
        });

        if (isUndef(this.props.value)) newState.value = value;
      }

      this.setState(newState);
    }

    if (e.keyCode === keyboardCodes.ESC) {
      if (this.props.options.length) {
        this.setState({
          highlightedOption: -1,
          showOptions: false,
        });

        this.props.onBlur();
      }
    }
  }

  _handleChange({ value }) {
    this.userValue = value;
    this.props.onChange({
      value,
      option: this._getCurrentOption(),
      complete: false,
    });

    const newState = {
      showOptions: !!value,
    };

    if (isUndef(this.props.value)) newState.value = value;

    this.setState(newState);
  }

  _handleOptionClick({ nativeEvent }) {
    const { target } = nativeEvent,
      index = target.getAttribute('data-index'),
      value = this.props.options[index].value;

    this._optionsInFocus = false;

    this.props.onChange({
      value,
      option: this._getCurrentOption(),
      complete: true,
    });

    const newState = {
      showOptions: false,
      highlightedOption: -1,
    };

    if (isUndef(this.props.value)) newState.value = value;

    this.setState(newState);
  }

  _handleOptionMouseEnter({ nativeEvent }) {
    const { relatedTarget } = nativeEvent,
      index = relatedTarget.getAttribute('data-index');

    this._optionsInFocus = true;

    this.setState({
      highlightedOption: parseInt(index, 10),
    });
  }

  _handleOptionMouseLeave() {
    this._optionsInFocus = false;

    this.setState({
      highlightedOption: -1,
    });
  }

  _handleUpdatePortal() {
    if (this._needUpdatePositionOptions) {
      this._recalculateOptionsPosition();
      this._needUpdatePositionOptions = false;
    }
  }

  _getCurrentOption() {
    return this._getOption(this.state.highlightedOption);
  }

  _getOption(index) {
    if (index === -1) return null;
    return this.props.options[index];
  }

  _nextOption() {
    let index = this.state.highlightedOption + 1;

    if (index > this.props.options.length - 1) index = 0;

    this._highlightOption(index);
    this._setScrollPositionByOptionKey(index);
  }

  _prevOption() {
    let index = this.state.highlightedOption - 1;

    if (index <= -1) index = this.props.options.length - 1;
    this._highlightOption(index);
    this._setScrollPositionByOptionKey(index);
  }

  _highlightOption(index) {
    const newState = {
      highlightedOption: index,
    };

    let value = '';

    if (index === -1) value = this.userValue;
    else value = this.props.options[index].value;

    this.props.onChange({
      value,
      option: index !== -1 ? this.props.options[index] : null,
      complete: false,
    });

    if (isUndef(this.props.value)) newState.value = value;

    this.setState(newState);
  }

  _recalculateOptionsPosition() {
    if (this._autoPosition) this._autoPosition.recalculatePosition();
  }

  _saveRefInput(ref) {
    this._input = ref;
  }

  _saveRefInputWrapper(inputWrapperRef) {
    this.setState({ inputWrapperRef });
  }

  _saveRefAutoPosition(ref) {
    this._autoPosition = ref;
  }

  _saveOptionsListRef(ref) {
    this._optionsList = ref;
  }

  _saveOptionRefByIndex(index) {
    return ref => {
      this._optonsRefsByIndex[index] = ref;
    };
  }

  _setScrollPositionByOptionKey(key) {
    const paddingY = this.props.theme.reactackle.components.inputAutocomplete
      .optionsList.paddingY;
    this._optionsList.scrollTop =
      this._optonsRefsByIndex[key].offsetTop - paddingY;
  }

  _renderOptions() {
    if (!this.props.options.length || !this.state.showOptions) return null;

    const options = this.props.options.map((option, index) => {
      const key = getKey(option, index);

      return (
        <OptionStyled
          key={key}
          innerRef={this._saveOptionRefByIndex(index)}
          data-index={index}
          onClick={this._handleOptionClick}
          onMouseEnter={this._handleOptionMouseEnter}
          onMouseLeave={this._handleOptionMouseLeave}
          focused={this.state.highlightedOption === index}
        >
          {option.value}
        </OptionStyled>
      );
    });
    
    return (
      <AutoPosition
        wrapper={this.props.wrapper}
        ref={this._saveRefAutoPosition}
        parent={this.state.inputWrapperRef}
        positionX="left"
        positionY="bottom"
        type="outer"
        direction="vertical"
        onUpdate={this._handleUpdatePortal}
        visible
      >
        <OptionsListStyled
          maxLines={this.props.maxOptionsVisible}
          innerRef={this._saveOptionsListRef}
        >
          {options}
        </OptionsListStyled>
      </AutoPosition>
    );
  }

  _renderInput() {
    const pickProps = pick(this.props, keysInputPropTypes);
    const value = isUndef(this.props.value)
      ? this.state.value
      : this.props.value;

    return (
      <TextField
        {...pickProps}
        ref={this._saveRefInput}
        value={value}
        onChange={this._handleChange}
        onFocus={this._handleFocusInput}
        onBlur={this._handleBlurInput}
      />
    );
  }

  render() {
    const TextField = this._renderInput(),
      options = this._renderOptions();

    return (
      <InputAutocompleteStyled>
        <div ref={this._saveRefInputWrapper}>
          {TextField}
        </div>
        {options}
      </InputAutocompleteStyled>
    );
  }
}

_InputAutocomplete.defaultProps = defaultProps;
_InputAutocomplete.propTypes = propTypes;
_InputAutocomplete.displayName = 'InputAutocomplete';

const InputAutocomplete = withTheme(_InputAutocomplete);
InputAutocomplete.withoutHOC = _InputAutocomplete;
export default InputAutocomplete;
