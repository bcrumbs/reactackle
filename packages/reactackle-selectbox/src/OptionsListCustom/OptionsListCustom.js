import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { noop, getKey } from 'reactackle-core';
import { OptionCustom } from '../OptionCustom/OptionCustom';
import { OptionPropTypeCustom } from '../OptionPropType/OptionPropTypeCustom';
import { OptionsListStyled } from './styles/OptionsListStyled';

const propTypes = {
  fullWidth: PropTypes.bool,
  dense: PropTypes.bool,
  options: PropTypes.arrayOf(OptionPropTypeCustom),
  selectedItem: OptionPropTypeCustom,
  onChange: PropTypes.func,
  createListRef: PropTypes.func,
};

const defaultProps = {
  fullWidth: false,
  dense: false,
  options: [],
  selectedItem: {},
  onChange: noop,
  createListRef: noop,
};

export class OptionsListCustom extends Component {
  constructor(props) {
    super(props);

    this._handleOptionClick = this._handleOptionClick.bind(this);
  }

  _handleOptionClick(index) {
    this.select(this.props.options[index]);
  }

  select(item) {
    this.props.onChange({
      value: item,
    });
  }

  _renderOptions() {
    return this.props.options.map((item, index) =>
      <OptionCustom
        key={getKey(item, index)}
        text={item.text}
        selected={item === this.props.selectedItem}
        disabled={item.disabled}
        item={item}
        index={index}
        dense={this.props.dense}
        fullWidth={this.props.fullWidth}
        onClick={this._handleOptionClick}
      />,
    );
  }

  render() {
    const options = this._renderOptions();

    return (
      <OptionsListStyled
        innerRef={this.props.createListRef}
        dense={this.props.dense}
        fullWidth={this.props.fullWidth}
      >
        {options}
      </OptionsListStyled>
    );
  }
}

OptionsListCustom.propTypes = propTypes;
OptionsListCustom.defaultProps = defaultProps;
OptionsListCustom.displayName = 'OptionsListCustom';
