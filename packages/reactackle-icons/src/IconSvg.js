import React from 'react';
import PropTypes from 'prop-types';
import { registerDefaultComponentTheme, withTheme } from 'reactackle-core';
import IconSvgStyled from './styles/IconSvgStyled';
import componentTheme from './styles/theme';

registerDefaultComponentTheme('iconSvg', componentTheme);

const defaultProps = {
  theme: {},
  backgroundColor: '',
  border: false,
  color: '',
  colorScheme: 'dark',
  flip: 'none',
  rotate: 0,
  rounded: false,
  size: 'normal',
  height: undefined,
  width: undefined,
};

const propTypes = {
  /** Set icon's theme */
  theme: PropTypes.object,
  /** Set icon's background color */
  backgroundColor: PropTypes.string,
  /** Turns on/off icon's border */
  border: PropTypes.bool,
  /** Set icon's color scheme */
  colorScheme: PropTypes.string,
  /** Set icon's fill color */
  color: PropTypes.string,
  /** Set icon's flipping plane */
  flip: PropTypes.string,
  /** Make icon rounded */
  rounded: PropTypes.bool,
  // ** Rotate icon by some degree */
  rotate: PropTypes.number,
  /** Set icon's size */
  size: PropTypes.string,
  /** Set icon's height */
  height: PropTypes.number,
  /** Set icon's width */
  width: PropTypes.number,
};


const IconSvg = ({
  children,
  theme,
  backgroundColor,
  colorScheme,
  color,
  size,
  border,
  flip,
  rounded,
  height,
  width,
  rotate,
  ...props
}) => (
  <IconSvgStyled
    preserveAspectRatio='xMidYMid meet'
    backgroundColor={backgroundColor}
    color={color}
    colorScheme={colorScheme}
    flip={flip}
    size={size}
    rotate={rotate}
    border={border}
    rounded={rounded}
    height={height}
    width={width}
    {...props}
  >
    {children}
  </IconSvgStyled>
);

IconSvg.propTypes = propTypes;
IconSvg.defaultProps = defaultProps;
IconSvg.displayName = 'IconSvg';

export default withTheme(IconSvg);
