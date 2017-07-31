'use strict';

import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import {
  extractThemeOrDefault,
  getValueString,
  transition,
} from 'reactackle-core';

const propTypes = {
  fullWidth: PropTypes.bool,
  dense: PropTypes.bool,
  disabled: PropTypes.bool,
  focused: PropTypes.bool,
  bordered: PropTypes.bool,
  colorScheme: PropTypes.oneOf(['neutral', 'error', 'success']),
  /**
   * Define theme
   * See https://github.com/styled-components/styled-components/blob/master/docs/theming.md
   * for more information
   */
  theme: PropTypes.object,
};

const defaultProps = {
  fullWidth: false,
  dense: false,
  disabled: false,
  focused: false,
  bordered: false,
  colorScheme: 'neutral',
};

/** Prop Receivers */
const sizeProps = ({ fullWidth, theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const { minWidth } = theme.reactackle.components.selectBox.selectBox;

  let sizeDependentStyles = null;
  if (fullWidth) {
    sizeDependentStyles = `
      display: flex;
      align-items: center;
    `;
  }

  return css`
    min-width: ${getValueString(minWidth)};    
    ${sizeDependentStyles}
  `;
};

const styleProps = ({
  disabled,
  focused,
  colorScheme,
  theme: themeFromProvider,
}) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const source = theme.reactackle.components.selectBox.selectBox.style;

  if (disabled) {
    return `
      cursor: default;
      user-select: none;
      
      &,
      &:hover,
      &:focus {
        background-color: ${source.disabled.backgroundColor};
        color: ${source.disabled.fontColor};
        border-color: ${source.disabled.borderColor};
        border-style: ${source.disabled.borderStyle};
        outline: none;
      }
    `;
  }

  if (colorScheme === 'neutral') {
    if (focused) {
      return `
        outline: none;
        cursor: pointer; 
        background-color: ${source.focus.backgroundColor};
        color: ${source.focus.fontColor};
        border-color: ${source.focus.borderColor};
        border-style: ${source.focus.borderStyle};
      `;
    }

    return css`
      background-color: ${source.backgroundColor};
      color: ${source.fontColor};
      border-color: ${source.borderColor};
      border-style: ${source.borderStyle};
      cursor: pointer;
      
      &:hover {
        outline: none;
        background-color: ${source.hover.backgroundColor};
        color: ${source.hover.fontColor};
        border-color: ${source.hover.borderColor};
        border-style: ${source.hover.borderStyle};
      }
    `;
  }

  return css`
    background-color: ${source[colorScheme].backgroundColor};
    color: ${source[colorScheme].fontColor};
    border-color: ${source[colorScheme].borderColor};
    border-style: ${source[colorScheme].borderStyle};
    cursor: pointer;
    
    &:hover {
      outline: none;
      background-color: ${source[colorScheme].hover.backgroundColor};
      color: ${source[colorScheme].hover.fontColor};
      border-color: ${source[colorScheme].hover.borderColor};
      border-style: ${source[colorScheme].hover.borderStyle};
    }
    
    &:focus {
      outline: none;
      background-color: ${source[colorScheme].hover.backgroundColor};
      color: ${source[colorScheme].hover.fontColor};
      border-color: ${source[colorScheme].hover.borderColor};
      border-style: ${source[colorScheme].hover.borderStyle};
    }
  `;
};

const borderProps = ({ bordered, fullWidth, theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const source = bordered
    ? theme.reactackle.components.selectBox.selectBox.bordered
    : theme.reactackle.components.selectBox.selectBox.underlined;

  const { borderWidth, borderRadius } = source;

  return bordered
    ? css`
      border-width: ${fullWidth ? '0' : getValueString(borderWidth)};
      border-radius: ${getValueString(borderRadius)};
    `
    : css`
      border-width: 0;
      border-bottom-width: ${fullWidth ? '0' : getValueString(borderWidth)};
      border-radius: ${getValueString(borderRadius)};      
    `;
};

/** Styles */
export const ButtonStyled = styled.button`
  display: flex;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex-grow: 1;
  user-select: none;
  max-width: 100%;
  position: relative;
  align-items: center;
  text-align: left;
  padding: 0;
  ${sizeProps} ${styleProps} ${borderProps} ${transition(
      'color, background, border',
    )} &:focus {
    outline: none;
  }
`;

ButtonStyled.propTypes = propTypes;
ButtonStyled.defaultProps = defaultProps;
ButtonStyled.displayName = 'ButtonStyled';
