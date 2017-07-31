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
  selected: PropTypes.bool,
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
  selected: false,
};

/** Prop Receivers */
const styleProps = ({ theme: themeFromProvider, disabled, selected }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const path = theme.reactackle.components.selectBox.option.style;
  let source = path;

  if (disabled) source = path.disabled;
  else if (selected) source = path.selected;

  return css`
    color: ${source.fontColor};
    background-color:  ${source.backgroundColor};
    
    ${!disabled && !selected
      ? `
        color: ${source.fontColor};
        background-color:  ${source.backgroundColor};
        
        &:hover {          
          color: ${source.hover.fontColor};
          background-color:  ${source.hover.backgroundColor};
        }
        
        &:focus {          
          color: ${source.focus.fontColor};
          background-color:  ${source.focus.backgroundColor};
          outline: none;
        }
      `
      : `
        &,
        &:hover,
        &:focus {
          color: ${source.fontColor};
          background-color:  ${source.backgroundColor};
          outline: none;
        }
      `}
  `;
};

const sizeProps = ({ theme: themeFromProvider, dense, fullWidth }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const path = theme.reactackle.components.selectBox.option.size;
  let source = path;

  if (dense && !fullWidth) source = path.dense;
  else if (fullWidth && !dense) source = path.fullWidth;
  else if (fullWidth && dense) source = path.denseFullWidth;

  const { paddingY, paddingX, lineHeight, fontSize } = source;

  return `
    padding: ${getValueString(paddingY)} ${getValueString(paddingX)};
    line-height: ${lineHeight};
    font-size: ${getValueString(fontSize)};
  `;
};

/** STYLES */
export const OptionCustomStyled = styled.li`
  cursor: pointer;
  ${styleProps} ${sizeProps} ${transition('color, background-color')};
`;

OptionCustomStyled.propTypes = propTypes;
OptionCustomStyled.defaultProps = defaultProps;
OptionCustomStyled.displayName = 'OptionCustomStyled';
