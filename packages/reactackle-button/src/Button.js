import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { noop, registerDefaultComponentTheme } from 'reactackle-core';

import { ButtonStyled } from './styles/ButtonStyled';
import { ButtonTextStyled } from './styles/ButtonTextStyled';
import { ButtonTitleStyled } from './styles/ButtonTitleStyled';
import { ButtonSubtitleStyled } from './styles/ButtonSubtitleStyled';
import { ButtonIconBoxStyled } from './styles/ButtonIconStyled';

import componentTheme from './styles/theme';

registerDefaultComponentTheme('button', componentTheme);

const propTypes = {
  /** Define button's main text */
  text: PropTypes.string,
  /**
   * Define button's alternate text for the user,
   * if he/she for some reason can't see the component
   */
  alternateTitle: PropTypes.string,
  /** Define button's subtitle */
  subtitle: PropTypes.string,
  /** Define button's size */
  size: PropTypes.oneOf(['inline', 'small', 'normal', 'large']),
  /** Narrow button has smaller horizontal paddings */
  narrow: PropTypes.bool,
  /** Define button's color */
  colorScheme: PropTypes.oneOf([
    'primary',
    'secondary',
    'alert',
    'success',
    'warning',
    'info',
    'flat',
    'flatLight',
    'white',
    'link',
  ]),
  /** Outlined button has border and transparent background */
  outlined: PropTypes.bool,
  /** Define button's radius */
  radius: PropTypes.oneOf(['none', 'default', 'rounded']),
  /** Raised button has shadow */
  raised: PropTypes.bool,
  /** Set disable to true if interaction with button isn't available to user */
  disabled: PropTypes.bool,
  /** Swap icon and text position */
  iconPositionRight: PropTypes.bool,
  /**
   * Define icon (see IconSvg or IconCustom props)
   */
  icon: PropTypes.node,
  /**
   * Stop onClick event's propagation and only call onPress
   */
  stopPressPropagation: PropTypes.bool,
  /**
   * Specify function to call on Button press
   */
  onPress: PropTypes.func,
  /**
   * The URL to link to when the button is clicked
   */
  href: PropTypes.string,
};

const defaultProps = {
  text: '',
  alternateTitle: '',
  subtitle: '',
  size: 'normal',
  narrow: false,
  colorScheme: 'flat',
  outlined: false,
  radius: 'default',
  raised: false,
  disabled: false,
  iconPositionRight: false,
  icon: null,
  stopPressPropagation: false,
  onPress: noop,
  href: '',
};

export default class Button extends Component {
  constructor(props) {
    super(props);

    this._handleClick = this._handleClick.bind(this);
  }

  _handleClick(event) {
    if (!this.props.disabled) {
      if (this.props.stopPressPropagation) event.stopPropagation();
      this.props.onPress(event);
    }
  }

  render() {
    const icon = this.props.icon && React.cloneElement(this.props.icon, { size: 'custom' });

    const subtitle =
      this.props.text && this.props.subtitle
        ? <ButtonSubtitleStyled size={this.props.size}>
            {this.props.subtitle}
          </ButtonSubtitleStyled>
        : null;

    const buttonText = this.props.text
      ? <ButtonTextStyled
          text={this.props.text}
          subtitle={this.props.subtitle}
          size={this.props.size}
          iconPositionRight={this.props.iconPositionRight}
        >
          {subtitle}
          <ButtonTitleStyled size={this.props.size}>
            {this.props.text}
          </ButtonTitleStyled>
        </ButtonTextStyled>
      : null;

    const buttonIcon = this.props.icon
        ? <ButtonIconBoxStyled
            iconPositionRight={this.props.iconPositionRight}
            size={this.props.size}
            disabled={this.props.disabled}
          >
            {icon}
          </ButtonIconBoxStyled>
        : null;

    return (
      <ButtonStyled
        colorScheme={this.props.colorScheme}
        size={this.props.size}
        narrow={this.props.narrow}
        radius={this.props.radius}
        disabled={this.props.disabled}
        outlined={this.props.outlined}
        text={this.props.text}
        title={this.props.alternateTitle}
        subtitle={this.props.subtitle}
        raised={this.props.raised}
        onClick={this._handleClick}
        href={this.props.href}
      >
        {buttonIcon}
        {buttonText}
      </ButtonStyled>
    );
  }
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;
Button.displayName = 'Button';
