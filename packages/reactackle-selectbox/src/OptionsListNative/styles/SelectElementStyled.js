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
const sizeProps = ({
  dense,
  fullWidth,
  bordered,
  theme: themeFromProvider,
}) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const path = theme.reactackle.components.selectBox.selectBox,
    styleKey = bordered ? 'bordered' : 'underlined';
  let source = path[styleKey].size;

  if (dense && !fullWidth) source = path[styleKey].size.dense;
  else if (dense && fullWidth) source = path[styleKey].size.denseFullWidth;
  else if (!dense && fullWidth) source = path[styleKey].size.fullWidth;

  const { paddingY, paddingX, lineHeight, fontSize } = source;

  const { minWidth } = path;

  let sizeDependentStyles = null;
  if (fullWidth) {
    sizeDependentStyles = `
      display: flex;
      align-items: center;
    `;
  }

  return css`
    padding: ${getValueString(paddingY)} ${getValueString(paddingX)};
    line-height: ${lineHeight};
    font-size: ${getValueString(fontSize)};
    min-height: ${lineHeight}em;
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

  const fontFamily =
    theme.reactackle.fontFamily[theme.reactackle.body.fontFamily];

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
  } else if (colorScheme === 'neutral' && !focused) {
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
      
      &:focus {
        outline: none;
        cursor: pointer; 
        background-color: ${source.focus.backgroundColor};
        color: ${source.focus.fontColor};
        border-color: ${source.focus.borderColor};
        border-style: ${source.focus.borderStyle};
      }
    `;
  }

  return css`
    &,
    &:hover,
    &:focus {
      background-color: ${source[colorScheme].backgroundColor};
      color: ${source[colorScheme].fontColor};
      border-color: ${source[colorScheme].borderColor};
      border-style: ${source[colorScheme].borderStyle};
      outline: none;
      cursor: pointer;  
    }
    
    &,
    & *,
    *::after,
    *::before {
      font-family: ${fontFamily};
      box-sizing: border-box;
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
export const SelectElementStyled = styled.select`
  position: relative;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
  position: relative;
  flex-grow: 1;
  font-family: inherit;
  ${sizeProps} ${styleProps} ${borderProps} ${transition(
      'color, background, border',
    )};
`;

SelectElementStyled.propTypes = propTypes;
SelectElementStyled.defaultProps = defaultProps;
SelectElementStyled.displayName = 'SelectElementStyled';
