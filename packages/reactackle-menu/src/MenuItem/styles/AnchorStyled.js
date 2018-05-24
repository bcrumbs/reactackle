import styled, { css } from 'styled-components';
import {
  extractThemeOrDefault,
  getValueString,
  transition,
} from 'reactackle-core';


const size = ({ theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const {
    minHeight,
    paddingY,
    paddingX,
  } = theme.reactackle.components.menu.item;

  return css`
    min-height: ${getValueString(minHeight)};
    padding: ${getValueString(paddingY)} ${getValueString(paddingX)};
  `;
};

const colorScheme = ({ colorScheme, active, theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const path = theme.reactackle.components.menu.item.colorScheme[colorScheme];

  const {
    backgroundColor: defaultBgColor,
    backgroundColorHover,
    backgroundColorFocus,
    backgroundColorActive,
    color: defaultColor,
    colorHover,
    colorFocus,
    colorActive,
  } = path;

  return active
    ? css`
      &,
      &:hover,
      &:focus {
        background-color: ${backgroundColorActive || defaultBgColor};
        color: ${colorActive || defaultColor};
      }
    `
    : css`
      background-color: ${defaultBgColor};
      color: ${defaultColor};
      
      &:hover {
        background-color: ${backgroundColorHover || defaultBgColor};
        color: ${colorHover || defaultColor};
      }
      
      &:focus {
        background-color: ${backgroundColorFocus || defaultBgColor};
        color: ${colorFocus || defaultColor};
      }
    `;
};

export const AnchorStyled = styled.a`
  width: 100%;
  display: flex;
  flex-grow: 1;
  padding: 0;
  align-items: center;
  text-decoration: none;
  position: relative;
  cursor: pointer;
  user-select: none;
  ${size}
  ${colorScheme}
  ${transition('background-color')}
  
  &:hover,
  &:focus {
    outline: none;
  }
`;

AnchorStyled.displayName = 'AnchorStyled';
