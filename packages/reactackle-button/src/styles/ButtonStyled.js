import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import React from 'react';
import Color from 'color';

import {
  foreground,
  extractThemeOrDefault,
  getValueString,
  transition,
  boxShadow,
} from 'reactackle-core';

const propTypes = {
  /** Define button's main text */
  text: PropTypes.string,
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
  /**
   * Define component theme config
   * See https://github.com/styled-components/styled-components/blob/master/docs/theming.md
   * for more information
   */
  // eslint-disable-next-line react/require-default-props
  theme: PropTypes.object,
};

const defaultProps = {
  text: '',
  subtitle: '',
  size: 'normal',
  narrow: false,
  colorScheme: 'flat',
  outlined: false,
  radius: 'default',
  raised: false,
  disabled: false,
};

// PROP RECEIVERS
const sizeProps = ({
  size,
  narrow,
  text,
  radius,
  theme: themeFromProvider,
}) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const paddingY = theme.reactackle.components.button.size[size].paddingY;
  const paddingX = theme.reactackle.components.button.size[size].paddingX;

  const narrowPaddingX =
    theme.reactackle.components.button.size[size].narrowPaddingX;

  const roundedPaddingX =
    theme.reactackle.components.button.size[size].roundedPaddingX;

  const py = text ? getValueString(paddingY) : 0;

  let px = null;
  if (narrow) px = getValueString(narrowPaddingX);
  else if (!text) px = '0 !important';
  else if (radius === 'rounded') px = getValueString(roundedPaddingX);
  else px = getValueString(paddingX);

  return `padding: ${py} ${px};`;
};

const radiusProps = ({ radius, size, theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const minHeight = theme.reactackle.components.button.size[size].minHeight;
  const borderRadiusDefault =
    theme.reactackle.components.button.borderRadiusDefault;

  let rad = null;
  if (radius === 'rounded')
    rad = `border-radius: ${getValueString(minHeight)};`;
  else if (radius === 'default')
    rad = `border-radius: ${getValueString(borderRadiusDefault)};`;
  else rad = null;

  return rad;
};

const kindProps = ({ colorScheme, outlined, theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const backgroundColor =
    theme.reactackle.components.button.colorScheme[colorScheme].backgroundColor;

  const bgTransparency = Color(backgroundColor).alpha() === 1;

  const hoverBackgroundColor =
    theme.reactackle.components.button.colorScheme[colorScheme].hover
      .backgroundColor;

  const focusBackgroundColor =
    theme.reactackle.components.button.colorScheme[colorScheme].focus
      .backgroundColor;

  const colorDark = theme.reactackle.components.button.text.colorDark;
  const colorLight = theme.reactackle.components.button.text.colorLight;
  const fontColor =
    theme.reactackle.components.button.colorScheme[colorScheme].fontColor ||
    foreground(backgroundColor, colorDark, colorLight);

  const hoverFontColor =
    theme.reactackle.components.button.colorScheme[colorScheme].hover.fontColor;

  const focusFontColor =
    theme.reactackle.components.button.colorScheme[colorScheme].focus.fontColor;

  const borderWidth = theme.reactackle.components.button.borderWidth;
  const borderStyle = theme.reactackle.components.button.borderStyle;

  return css`        
    ${outlined
      ? `
        border-width: ${getValueString(borderWidth)};
        border-style: ${borderStyle};
        border-color: ${bgTransparency ? backgroundColor : fontColor};
        background-color: ${Color(backgroundColor).fade(1)};
        color: ${bgTransparency ? backgroundColor : fontColor};
        
        &:hover,
        &:focus,
        &:active {      
          border-color: ${bgTransparency
            ? hoverBackgroundColor
            : hoverFontColor};
          background-color: ${bgTransparency
            ? Color(hoverBackgroundColor).fade(0.9)
            : Color(hoverFontColor).fade(0.9)};
          color: ${bgTransparency ? hoverBackgroundColor : hoverFontColor};
        }
      `
      : `          
        background-color: ${backgroundColor};
        color: ${fontColor};
        border-width: 0;
  
        &:hover {
          background-color: ${hoverBackgroundColor};
          color: ${hoverFontColor};
        }
        
        &:focus,
        &:active {      
          background-color: ${focusBackgroundColor};
          color: ${focusFontColor};
        }
      `}
  `;
};

const elevation = ({ raised }) => `
  ${raised
    ? `${boxShadow(0)}
              
        &:hover,
        &:focus,
        &:active { 
          ${boxShadow(2)}    
        }
      `
    : `
      &:hover,
      &:focus,
      &:active { 
        box-shadow: none  
      }
    `}
`;

const disabled = ({ disabled, theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const backgroundColor =
    theme.reactackle.components.button.disabled.backgroundColor;

  const fontColor = theme.reactackle.components.button.disabled.fontColor;

  return css`
    ${disabled
      ? `
          box-shadow: none;
          &,
          &:hover,
          &:focus,
          &:active {
            cursor: default;
            background-color: ${backgroundColor};
            border-color: ${backgroundColor};
            color: ${fontColor};
            box-shadow: none;
          };
        `
      : null}
  `;
};

const textProps = ({ subtitle, size, theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const fontSize = theme.reactackle.components.button.size[size].fontSize;
  const lineHeight = theme.reactackle.components.button.size[size].lineHeight;
  const textTransform = theme.reactackle.components.button.text.textTransform;
  const fontWeight = theme.reactackle.components.button.text.fontWeight;

  const fontFamily =
    theme.reactackle.fontFamily[theme.reactackle.body.fontFamily];

  return `   
    font-size: ${getValueString(fontSize)};
    line-height: ${lineHeight};
    text-align: ${subtitle ? 'left' : 'center'};
    text-decoration: none;
    text-transform: ${textTransform};
    font-weight: ${fontWeight};
    
    &,
    & *,
    *::after,
    *::before {
      font-family: ${fontFamily};
      box-sizing: border-box;
    }
  `;
};

// STYLES
const Button = styled.button`
  -webkit-appearance: none;
  -moz-appearance: none;
  cursor: pointer;
  margin: 0;
  position: relative;
  display: inline-flex;
  user-select: none;
  vertical-align: middle;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  text-decoration: none;

  &:hover,
  &:focus,
  &:active {
    outline: none;
  }

  ${kindProps};
  ${textProps};
  ${sizeProps};
  ${radiusProps};
  ${elevation};
  ${disabled};
  ${transition('color, background-color, border, box-shadow')};
`;

const Anchor = Button.withComponent('a');

// eslint-disable-next-line react/prop-types
export const ButtonStyled = ({ href, ...props }) => href && href.length
  ? <Anchor href={href} {...props} />
  : <Button {...props} />;

ButtonStyled.propTypes = propTypes;
ButtonStyled.defaultProps = defaultProps;
ButtonStyled.displayName = 'ButtonStyled';
