'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TooltipIcon } from 'reactackle-tooltip-icon';
import { AutoPosition } from 'reactackle-autoposition';
import { noop, isUndef, withTheme } from 'reactackle-core';
import { OptionPropTypeCustom } from '../OptionPropType/OptionPropTypeCustom';
import { OptionsListCustom } from '../OptionsListCustom/OptionsListCustom';
import { SelectBoxCustomStyled } from './styles/SelectBoxCustomStyled';
import { ContentBoxStyled } from '../styles/ContentBoxStyled';
import { WrapperStyled } from '../styles/WrapperStyled';
import { ButtonStyled } from './styles/ButtonStyled';
import { ButtonTextStyled } from './styles/ButtonTextStyled';
import { ArrowIconStyled } from './styles/ArrowIconStyled';
import { SelectBoxStyled } from '../styles/SelectBoxStyled';
import { SelectBoxLabelStyled } from '../styles/SelectBoxLabelStyled';
import { SelectBoxLabelTextStyled } from '../styles/SelectBoxLabelTextStyled';
import { SelectBoxInfoBoxStyled } from '../styles/SelectBoxInfoBoxStyled';
import { MessageStyled } from '../styles/MessageStyled';

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
  defaultValue: PropTypes.any,
  /**
   * Value of the SelectBox
   */
  value: PropTypes.any,
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
   * @ignore
   */
  theme: PropTypes.object.isRequired,
  /**
   * Determines options of the SelectBox
   */
  options: PropTypes.arrayOf(OptionPropTypeCustom),
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
  label: '',
  labelPosition: 'top',
  tooltip: '',
  bordered: false,
  colorScheme: 'neutral',
  options: [],
  onChange: noop,
};

let openSelectBox = null;

const clickHandler = event => {
  if (openSelectBox) {
    const listDOMNode = openSelectBox._optionsList;
    if (listDOMNode && !listDOMNode.contains(event.target))
      openSelectBox.close();
  }
};

const KEYS = {
  SPACE: 32,
  DOWN_ARROW: 40,
  UP_ARROW: 38,
};

let customSelectBoxesNum = 0;
let nextId = 0;

class _SelectBoxCustom extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: `select-box-${nextId++}`,
      value: isUndef(props.value) ? props.defaultValue : props.value,
      open: false,
      onTop: false,
      checkOverflowHeight: false,
    };

    this._optionsList = null;
    this._listWrapper = null;
    this._handleChange = this._handleChange.bind(this);
    this._createListRef = this._createListRef.bind(this);
    this._handleKeyDown = this._handleKeyDown.bind(this);
    this._handleLinkClick = this._handleLinkClick.bind(this);
    this._handleWrapperClick = this._handleWrapperClick.bind(this);
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.toggle = this.toggle.bind(this);
    this._createListWrapperRef = this._createListWrapperRef.bind(this);
  }

  componentWillMount() {
    if (!customSelectBoxesNum)
      window.addEventListener('click', clickHandler, false);

    customSelectBoxesNum++;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.props.value && isUndef(nextProps.value)) {
      this.setState({
        value: this.props.value,
      });
    }
  }

  componentWillUnmount() {
    customSelectBoxesNum--;

    if (!customSelectBoxesNum)
      window.removeEventListener('click', clickHandler, false);
  }

  _createListRef(ref) {
    this._optionsList = ref;
  }

  _createListWrapperRef(ref) {
    this._listWrapper = ref;
  }

  _getCurrentValue() {
    return isUndef(this.props.value) ? this.state.value : this.props.value;
  }

  _handleLinkClick() {
    this.open();
  }

  toggle() {
    if (this.state.open) this.close();
    else this._handleLinkClick();
  }

  open() {
    if (this.props.disabled || this.state.open) return;
    this.setState({
      open: true,
    });

    if (openSelectBox) openSelectBox.close();
    openSelectBox = this;
  }

  close() {
    if (!this.state.open) return;

    this.setState({
      open: false,
    });

    openSelectBox = null;
  }

  _handleChange({ value }) {
    const newState = {
      open: false,
    };

    openSelectBox = null;

    if (isUndef(this.props.value)) newState.value = value.value;

    this.setState(newState);

    this.props.onChange({
      value: value.value,
    });
  }

  _handleWrapperClick(event) {
    event.stopPropagation();
  }

  _handleKeyDown(e) {
    if (e.keyCode === KEYS.SPACE) {
      this._handleLinkClick();
      e.preventDefault();
    }
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
          focus={this.state.open}
        >
          {this.props.message}
        </MessageStyled>
      </SelectBoxInfoBoxStyled>
    );
  }

  render() {
    const data = this.props.reverse
      ? [...this.props.options].reverse()
      : this.props.options;

    const value = this._getCurrentValue(),
      hasValue = !isUndef(value) && value !== null;

    const selectedItem = hasValue
      ? data.find(item => item.value === value)
      : null;

    const text =
      hasValue && selectedItem ? selectedItem.text : this.props.placeholder;

    const label = this._renderLabel(),
      message = this._renderMessage();

    const iconSettingsPath = this.props.theme.reactackle.components.selectBox
      .icon.source;

    const icon = React.cloneElement(
      iconSettingsPath.src,
      { size: 'custom', color: 'currentColor' }// eslint-disable-line comma-dangle
    );

    return (
      <SelectBoxStyled>
        <SelectBoxCustomStyled onClick={this._handleWrapperClick}>
          <ContentBoxStyled labelPosition={this.props.labelPosition}>
            {label}
            <WrapperStyled innerRef={this._createListWrapperRef}>
              <ButtonStyled
                fullWidth={this.props.fullWidth}
                dense={this.props.dense}
                bordered={this.props.bordered}
                disabled={this.props.disabled}
                focused={this.state.open}
                colorScheme={this.props.colorScheme}
                tabIndex={0}
                onClick={this._handleLinkClick}
                onKeyDown={this._handleKeyDown}
              >
                <ButtonTextStyled
                  dense={this.props.dense}
                  fullWidth={this.props.fullWidth}
                  bordered={this.props.bordered}
                >
                  {text}
                </ButtonTextStyled>
                <ArrowIconStyled
                  fullWidth={this.props.fullWidth}
                  dense={this.props.dense}
                  disabled={this.props.disabled}
                  focused={this.state.open}
                  colorScheme={this.props.colorScheme}
                  type={iconSettingsPath.type}
                >
                  {icon}
                </ArrowIconStyled>
              </ButtonStyled>
              <AutoPosition
                parent={this._listWrapper}
                positionX="left"
                positionY="top"
                type="inner"
                direction="vertical"
                visible={this.state.open}
              >
                <OptionsListCustom
                  createListRef={this._createListRef}
                  options={data}
                  selectedItem={selectedItem}
                  placeholder={this.props.placeholder}
                  onChange={this._handleChange}
                />
              </AutoPosition>
            </WrapperStyled>
          </ContentBoxStyled>
          {message}
        </SelectBoxCustomStyled>
      </SelectBoxStyled>
    );
  }
}

_SelectBoxCustom.propTypes = propTypes;
_SelectBoxCustom.defaultProps = defaultProps;
_SelectBoxCustom.displayName = 'SelectBoxCustom';

export const SelectBoxCustom = withTheme(_SelectBoxCustom);
