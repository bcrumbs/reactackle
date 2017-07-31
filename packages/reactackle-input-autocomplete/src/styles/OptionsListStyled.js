'use strict';

import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  extractThemeOrDefault,
  getValueString,
  boxShadow,
  animations,
} from 'reactackle-core';

const propTypes = {
  maxLines: PropTypes.number,
  theme: PropTypes.object,
};

const defaultProps = {
  maxLines: 5,
};

const style = ({ theme: themeFromProvider, maxLines }) => {
  const theme = extractThemeOrDefault(themeFromProvider);

  const {
    backgroundColor,
    paddingY,
    paddingX,
    borderRadius,
    minWidth,
    maxWidth,
  } = theme.reactackle.components.inputAutocomplete.optionsList;

  const {
    lineHeight,
    paddingY: itemPaddingY,
  } = theme.reactackle.components.inputAutocomplete.option;

  const fontFamily =
    theme.reactackle.fontFamily[theme.reactackle.body.fontFamily];

  const py = getValueString(paddingY),
    itemPy = getValueString(itemPaddingY),
    textHeight = lineHeight * maxLines - 1;

  const maxHeight = `calc(${py} * 2 + ${textHeight}em + ${itemPy} * ${2 *
    maxLines})`;

  return `
    padding: ${py} ${getValueString(paddingX)};
    background-color: ${backgroundColor};
    border-radius: ${getValueString(borderRadius)};
    max-height: ${maxHeight};
    width: 100%;
    min-width: ${getValueString(minWidth)};
    max-width: ${getValueString(maxWidth)};
    animation: ${animations.fadeInDownSmall} 150ms ease-in;
    animation-fill-mode: both;
    
    &,
    & *,
    *::after,
    *::before {
      font-family: ${fontFamily};
      box-sizing: border-box;
    }
  `;
};

export const OptionsListStyled = styled.ul`
  margin: 0;
  list-style-type: none;
  width: 100%;
  overflow-y: auto;
  z-index: 1;
  user-select: none;
  ${style};
  ${boxShadow(3)};
`;

OptionsListStyled.propTypes = propTypes;
OptionsListStyled.defaultProps = defaultProps;
OptionsListStyled.displayName = 'OptionsListStyled';
