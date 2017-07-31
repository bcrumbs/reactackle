'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { noop } from 'reactackle-core';
import { IconFontAwesomeStyled } from './styles/IconFontAwesomeStyled';

const propTypes = {
  /** Set icon's name (required for font-awesome icons */
  name: PropTypes.string,
  /** Turns on/off icon's border */
  border: PropTypes.bool,
  /** Make icon rounded */
  rounded: PropTypes.bool,
  /** Set icon size */
  size: PropTypes.oneOf(['inherit', 'small', 'normal', 'large']),
  /** Scale icon */
  sizeMultiplier: PropTypes.number,
  /** Set icon's color scheme */
  colorScheme: PropTypes.oneOf(['light', 'dark']),
  /** Set exact icon's color */
  color: PropTypes.string,
  /** Set icon's background color */
  backgroundColor: PropTypes.string,

  /** Set icon's flipping plane */
  flip: PropTypes.oneOf(['none', 'horizontal', 'vertical']),
  /** Rotate icon by some degree */
  rotate: PropTypes.number,
  /** Make icon spinning infinitely & smooth */
  spin: PropTypes.bool,
  /** Make icon spinning infinitely & with steps */
  pulse: PropTypes.bool,
  /**
   * Specify function to call on Icon click
   */
  onClick: PropTypes.func,
  /**
   * Specify the tab order of an element
   */
  tabIndex: PropTypes.number,
};
const defaultProps = {
  name: 'font-awesome',
  border: false,
  rounded: false,
  size: 'normal',
  sizeMultiplier: 1,
  colorScheme: 'dark',
  color: '',
  backgroundColor: '',

  flip: 'none',
  rotate: 0,
  spin: false,
  pulse: false,

  onClick: noop,
  tabIndex: -1,
};

export const IconFontAwesome = props => {
  const className = `fa fa-${props.name}`;

  const attributes = {
    className,
    onClick: props.onClick,
  };

  if (props.tabIndex !== -1) attributes.tabIndex = props.tabIndex;

  return (
    <IconFontAwesomeStyled
      {...attributes}
      border={props.border}
      rounded={props.rounded}
      sizeMultiplier={props.sizeMultiplier}
      sizeKey={props.size}
      colorScheme={props.colorScheme}
      userColor={props.color}
      bgColor={props.backgroundColor}
      flip={props.flip}
      rotate={props.rotate}
      spin={props.spin}
      pulse={props.pulse}
    />
  );
};

IconFontAwesome.propTypes = propTypes;
IconFontAwesome.defaultProps = defaultProps;
IconFontAwesome.displayName = 'IconFontAwesome';
