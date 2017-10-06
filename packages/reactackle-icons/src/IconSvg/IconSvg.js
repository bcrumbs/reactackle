import React from 'react';
import { registerDefaultComponentTheme } from 'reactackle-core';
import { iconsPropType } from '../iconsPropType';
import IconSvgStyled from './styles/IconSvgStyled';
import componentTheme from './styles/theme';
import IconDefault from './icons/IconDefault';

registerDefaultComponentTheme('iconSvg', componentTheme);
  
const propTypes = {
  ...iconsPropType,
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
