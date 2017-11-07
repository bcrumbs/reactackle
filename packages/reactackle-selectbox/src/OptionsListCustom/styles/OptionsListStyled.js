'use strict';

import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  extractThemeOrDefault,
  getValueString,
  boxShadow,
} from 'reactackle-core';

const propTypes = {
  fullWidth: PropTypes.bool,
  dense: PropTypes.bool,
  /**
   * Define  theme
   * See https://github.com/styled-components/styled-components/blob/master/docs/theming.md
   * for more information
   */
  theme: PropTypes.object,
};

const defaultProps = {
  fullWidth: false,
  dense: false,
};

/** Prop Receivers */
const baseProps = ({ theme: themeFromProvider, maxLines }) => {
  const theme = extractThemeOrDefault(themeFromProvider);

  const {
    borderRadius,
    backgroundColor,
    minWidth,
    maxWidth,
    size: {
      paddingY,
    },
  } = theme.reactackle.components.selectBox.optionsList;
  
  const {
    fontSize,
    paddingY: itemPaddingY,
    lineHeight,
  } = theme.reactackle.components.selectBox.option.size;

  const fontFamily =
    theme.reactackle.fontFamily[theme.reactackle.body.fontFamily];

  const py = getValueString(paddingY),
    itemPy = getValueString(itemPaddingY),
    textHeight = lineHeight * maxLines;

  const maxHeight = `calc(${py} * 2 + ${textHeight}em + ${itemPy} * ${2 *
    maxLines})`;

  return `
    font-size: ${getValueString(fontSize)};
    min-width: ${getValueString(minWidth)};
    max-width: ${getValueString(maxWidth)};
    max-height: ${maxHeight};
    background-color:  ${backgroundColor};
    border-radius: ${getValueString(borderRadius)};
    
    &,
    & *,
    *::after,
    *::before {
      font-family: ${fontFamily};
      box-sizing: border-box;
    }
  `;
};

const sizeProps = ({ theme: themeFromProvider, dense, fullWidth }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const path = theme.reactackle.components.selectBox.optionsList.size;
  let source = path;

  if (dense && !fullWidth) source = path.dense;
  else if (fullWidth && !dense) source = path.fullWidth;
  else if (fullWidth && dense) source = path.denseFullWidth;

  const { paddingY, paddingX } = source;

  return `padding: ${getValueString(paddingY)} ${getValueString(paddingX)};`;
};

/** Styles */
export const OptionsListStyled = styled.ul`
  overflow-y: auto;
  max-height: 100vh;
  list-style-type: none;
  width: 100%;
  z-index: 1;
  user-select: none;
  margin: 0;
  ${boxShadow(1)} ${baseProps} ${sizeProps};
`;

OptionsListStyled.propTypes = propTypes;
OptionsListStyled.defaultProps = defaultProps;
OptionsListStyled.displayName = 'OptionsListStyled';
