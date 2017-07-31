'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactackle-button';
import { noop } from 'reactackle-core';
import { DialogButtonStyled } from './styles/DialogButtonStyled';

const propTypes = {
  ...Button.propTypes,
  onCloseDialog: PropTypes.func,
};

const defaultProps = {
  ...Button.defaultProps,
  onCloseDialog: noop,
};

export default class DialogButton extends Component {
  constructor(props) {
    super(props);

    this._handleButtonPress = this._handleButtonPress.bind(this);
  }

  _handleButtonPress() {
    this.props.onPress(this.props.onCloseDialog);
  }

  render() {
    return (
      <DialogButtonStyled>
        <Button {...this.props} narrow onPress={this._handleButtonPress} />
      </DialogButtonStyled>
    );
  }
}

DialogButton.propTypes = propTypes;
DialogButton.defaultProps = defaultProps;
DialogButton.displayName = 'DialogButton';
