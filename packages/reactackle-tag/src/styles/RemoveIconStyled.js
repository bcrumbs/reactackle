import styled, { css } from 'styled-components';
import {
  extractThemeOrDefault,
  getValueString,
  iconSizeMixin,
  transition,
} from 'reactackle-core';

const size = ({ theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);

  const {
    height,
    width,
    imgHeight,
    imgWidth,
    iconTextSpacing,
  } = theme.reactackle.components.tag.removeIcon;

  return css`
    margin-left: ${getValueString(iconTextSpacing)};
    
    ${iconSizeMixin(
      getValueString(height),
      getValueString(imgHeight || height),
      getValueString(width || height),
      getValueString(imgWidth || imgHeight || height),
    )}
  `;
};

const style = ({ theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const path = theme.reactackle.components.tag.removeIcon.state;

  const {
    color,
    backgroundColor,
  } = path;

  const {
    color: hoverColor,
    backgroundColor: hoverBG,
  } = path.hover;

  const {
    color: focusColor,
    backgroundColor: focusBG,
  } = path.focus;


  return css`
    color: ${color};
    background-color: ${backgroundColor};
    
    &:hover {
      color: ${hoverColor || color};
      background-color: ${hoverBG || backgroundColor};    
    }
    
    &:focus {
      color: ${focusColor || hoverColor || color};
      background-color: ${focusBG || hoverBG || backgroundColor};    
    }
  `;
};

export const RemoveIconStyled = styled.button`  
  &,
  &:hover,
  &:focus {
    cursor: pointer;
    outline: none;
    box-shadow: none;
    border: 0;
    padding: 0;
  }
  
  ${size}
  ${style}
  ${transition('color, background-color')}
`;
