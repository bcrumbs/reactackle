import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { noop, getKey } from 'reactackle-core';
import { Button } from 'reactackle-button';

import {
  AlertStyled,
  ContentStyled,
  ActionsStyled,
  ActionsWrapperStyled,
} from './styles';

const buttonAdditionalProps = {
  /**
   * Close alert on button click
   */
  closeAlert: PropTypes.bool,
};

const propTypes = {
  /*
   * Alert item id
   */
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  /*
   * Changes Alert layout direction to vertical (buttons will be placed under
   * Alert content)
   */
  vertical: PropTypes.bool,
  /*
   * Alert color scheme
   */
  colorScheme: PropTypes.oneOf([
    'default',
    'warning',
    'error',
    'success',
    'info',
  ]),
  /*
   * Array of Alert's buttons
   */
  buttons: PropTypes.arrayOf(
    PropTypes.shape(Button.propTypes, ...buttonAdditionalProps),
  ),
  /*
   * Function to be called on Close button click
   */
  onClose: PropTypes.func,
  /*
   * Speed of exit animation
   */
  closeAnimation: PropTypes.bool,
};
const defaultProps = {
  id: '',
  colorScheme: 'default',
  vertical: false,
  buttons: [],
  onClose: noop,
  closeAnimation: false,
};

export default class Alert extends Component {
  constructor(props) {
    super(props);
    
    this._handleClose = this._handleClose.bind(this);
  }
  
  _handleClose() {
    this.props.onClose(this.props.id);
  }
  
  _renderButtonsArea() {
    if (this.props.buttons && this.props.buttons.length) {
      const buttons = this.props.buttons.map((button, index) => {
        const pressHandler = () => {
          if (button.action) button.action();
          if (button.closeAlert) this._handleClose();
        };

        return (
          <Button
            {...button}
            colorScheme={button.colorScheme || 'flatLight'}
            onPress={pressHandler}
            key={getKey(button, index)}
          />
        );
      });
    
      return (
        <ActionsStyled>
          <ActionsWrapperStyled>
            {buttons}
          </ActionsWrapperStyled>
        </ActionsStyled>
      );
    }
    return null;
  }
  
  render() {
    const buttonsArea = this._renderButtonsArea();
    
    return (
      <AlertStyled
        vertical={this.props.vertical}
        colorScheme={this.props.colorScheme}
        animateExit={this.props.closeAnimation}
        role="alert"
      >
        <ContentStyled>
          {this.props.children}
        </ContentStyled>
        {buttonsArea}
      </AlertStyled>
    );
  }
}

Alert.propTypes = propTypes;
Alert.defaultProps = defaultProps;
Alert.displayName = 'Alert';
