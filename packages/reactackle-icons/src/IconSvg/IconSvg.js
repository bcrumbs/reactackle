import React from 'react';
import { registerDefaultComponentTheme } from 'reactackle-core';
import { PropTypes } from 'prop-types';
import IconSvgStyled from './styles/IconSvgStyled';
import componentTheme from './styles/theme';
import IconDefault from './icons/IconDefault';

registerDefaultComponentTheme('iconSvg', componentTheme);
  
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
  colorScheme: PropTypes.oneOf(['light', 'dark']),
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
  colorScheme: 'dark',
  color: '',
  backgroundColor: '',
  flip: 'none',
  rotate: 0,
};

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
    {children || IconDefault}
  </IconSvgStyled>
);

IconSvg.propTypes = propTypes;
IconSvg.defaultProps = defaultProps;
IconSvg.displayName = 'IconSvg';
