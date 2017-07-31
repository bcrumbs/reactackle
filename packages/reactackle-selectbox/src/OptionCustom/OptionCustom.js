'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { noop } from 'reactackle-core';
import { OptionCustomStyled } from './styles/OptionCustomStyled';

const propTypes = {
  fullWidth: PropTypes.bool,
  dense: PropTypes.bool,
  selected: PropTypes.bool,
  disabled: PropTypes.bool,
  text: PropTypes.string,
  onClick: PropTypes.func,
  onKeyDown: PropTypes.func,
  index: PropTypes.number,
};

const defaultProps = {
  fullWidth: false,
  dense: false,
  selected: false,
  disabled: false,
  text: '',
  onClick: noop,
  onKeyDown: noop,
  index: 0,
};

export class OptionCustom extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this._handleKeyDown = this._handleKeyDown.bind(this);
    this._handleClick = this._handleClick.bind(this);
  }

  _handleKeyDown(event) {
    if (event.keyCode === 32) {
      event.preventDefault();
      this.props.onClick(this.props.index);
    }
    this.props.onKeyDown(this.props.index, event);
  }

  _handleClick() {
    this.props.onClick(this.props.index);
  }

  render() {
    const itemProps = !this.props.disabled
      ? {
          onClick: this._handleClick,
          onKeyDown: this._handleKeyDown,
          tabIndex: 0,
        }
      : {};

    return (
      <OptionCustomStyled
        {...itemProps}
        disabled={this.props.disabled}
        selected={this.props.selected}
        dense={this.props.dense}
        fullWidth={this.props.fullWidth}
      >
        {this.props.text}
      </OptionCustomStyled>
    );
  }
}

OptionCustom.propTypes = propTypes;
OptionCustom.defaultProps = defaultProps;
OptionCustom.displayName = 'OptionCustom';
