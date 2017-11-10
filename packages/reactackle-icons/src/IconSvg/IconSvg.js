import React from 'react';
import { PropTypes } from 'prop-types';
import IconSvgStyled from './styles/IconSvgStyled';
  
const propTypes = {
  /** Turns on/off icon's border */
  border: PropTypes.bool,
  /** Set icon's border width */
  borderWidth: PropTypes.number,
  /** Make icon rounded */
  rounded: PropTypes.bool,
  /** Set icon size */
  size: PropTypes.oneOf(['custom', 'small', 'normal', 'large', 'xlarge']),
  /** Set icon's color scheme */
  colorScheme: PropTypes.oneOf(['light', 'dark', 'default']),
  /** Set exact icon's border color */
  color: PropTypes.string,
  /** Set icon's background color */
  backgroundColor: PropTypes.string,
  /** Set icon's flipping plane */
  flip: PropTypes.oneOf(['none', 'horizontal', 'vertical']),
  /** Rotate icon by some degree */
  rotate: PropTypes.number,
};

const defaultProps = {
  border: false,
  borderWidth: 0,
  rounded: false,
  size: 'normal',
  colorScheme: 'default',
  color: '',
  backgroundColor: '',
  flip: 'none',
  rotate: 0,
};

const ICON_DEFAULT = (
  <svg viewBox="0 0 24 24" preserveAspectRatio='xMidYMid meet'>
    <path d="M19,5.5c0-0.1,0-0.1,0-0.2c-0.1-0.1-0.1-0.2-0.3-0.3c-0.1,0-0.1,0-0.2,0h-10C8.4,5,8.4,5,8.3,5c-0.1,0-0.1,0.1-0.2,0.1l-3,3
	c0,0-0.1,0.1-0.1,0.2c0,0.1,0,0.1,0,0.2v10C5,18.8,5.2,19,5.5,19h10c0.1,0,0.1,0,0.2,0c0.1,0,0.1-0.1,0.2-0.1l3-3
	c0,0,0.1-0.1,0.1-0.2c0-0.1,0-0.1,0-0.2V5.5z M16,16h1.3L16,17.3V16z M18,15h-2V8.7l2-2V15z M9,9h6v6H9V9z M8,8H6.7L8,6.7V8z M9,6
	h8.3l-2,2H9V6z M6,9h2v6.5C8,15.8,8.2,16,8.5,16H15v2H6V9z" />
  </svg>
);

export const IconSvg = ({
  children,
  backgroundColor,
  colorScheme,
  color,
  size,
  border,
  borderWidth,
  flip,
  rounded,
  rotate,
  ...props
}) => (
  <IconSvgStyled
    backgroundColor={backgroundColor}
    customColor={color}
    colorScheme={colorScheme}
    flip={flip}
    sizeKey={size}
    rotate={rotate}
    border={border}
    borderWidth={borderWidth}
    rounded={rounded}
    {...props}
  >
    {children || ICON_DEFAULT}
  </IconSvgStyled>
);

IconSvg.propTypes = propTypes;
IconSvg.defaultProps = defaultProps;
IconSvg.displayName = 'IconSvg';
