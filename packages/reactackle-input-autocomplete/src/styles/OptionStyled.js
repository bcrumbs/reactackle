'use strict';

import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  extractThemeOrDefault,
  getValueString,
  transition,
} from 'reactackle-core';

const propTypes = {
  focused: PropTypes.bool,
  theme: PropTypes.object,
};

const defaultProps = {
  focused: false,
};

const base = ({ theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);

  const {
    fontSize,
    lineHeight,
    textTransform,
    paddingY,
    paddingX,
    borderRadius,
  } = theme.reactackle.components.inputAutocomplete.option;

  return `
    padding: ${getValueString(paddingY)} ${getValueString(paddingX)};
    border-radius: ${getValueString(borderRadius)};
    font-size: ${getValueString(fontSize)};
    line-height: ${lineHeight};
    text-transform: ${textTransform};
  `;
};

const style = ({ theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const source = theme.reactackle.components.inputAutocomplete.option.style;

  return `
    color: ${source.fontColor};
    background-color: ${source.backgroundColor};
    font-weight: ${source.fontWeight};
    
    &:hover {
      color: ${source.hover.fontColor};
      background-color: ${source.hover.backgroundColor};
      font-weight: ${source.hover.fontWeight};
    }
    
    &:focus {
      color: ${source.focus.fontColor};
      background-color: ${source.focus.backgroundColor};
      font-weight: ${source.focus.fontWeight};
    }    
  `;
};

const focused = ({ theme: themeFromProvider, focused }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const source = theme.reactackle.components.inputAutocomplete.option.style;

  return focused
    ? `
      color: ${source.focus.fontColor};
      background-color: ${source.focus.backgroundColor};
      font-weight: ${source.focus.fontWeight};  
    `
    : '';
};

export const OptionStyled = styled.li`
  cursor: pointer;
  ${base};
  ${style};
  ${focused};
  ${transition('color, background-color')};
`;

OptionStyled.propTypes = propTypes;
OptionStyled.defaultProps = defaultProps;
OptionStyled.displayName = 'OptionStyled';
