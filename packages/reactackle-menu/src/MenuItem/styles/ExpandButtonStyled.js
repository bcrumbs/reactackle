import styled, { css } from 'styled-components';
import {
  extractThemeOrDefault,
  getValueString,
  transition,
} from 'reactackle-core';

const size = ({ theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);

  const {
    marginLeft,
    marginRight,
    borderRadius,
  } = theme.reactackle.components.menu.item.expandButton;

  const {
    height,
    width,
  } = theme.reactackle.components.menu.item.expandButton.icon;

  return css`
    width: ${getValueString(width || height)};
    height: ${getValueString(height)};
    line-height: ${getValueString(height)};
    margin-left: ${getValueString(marginLeft)};
    margin-right: ${getValueString(marginRight)};
    border-radius: ${getValueString(borderRadius)};
  `;
};

const colorScheme = ({ colorScheme, active, theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const colorKey = active ? 'active' : 'default';
  const path =
    theme.reactackle.components.menu.item.expandButton.colorScheme[colorScheme];

  const defaultBgColor = path.default.backgroundColor;
  const defaultColor = path.default.color;
  const defaultOpacity = path.default.opacity;

  const {
    backgroundColor,
    color,
    opacity,
  } = path[colorKey];

  return css`
    background-color: ${backgroundColor || defaultBgColor};
    color: ${color || defaultColor};
    opacity: ${opacity || defaultOpacity};
    
    &:hover {
      background-color:
        ${path[colorKey].hover.backgroundColor || defaultBgColor};
      color: ${path[colorKey].hover.color || defaultColor};
      opacity: ${path[colorKey].hover.opacity || defaultOpacity};
    }
    
    &:focus {
      background-color:
        ${path[colorKey].focus.backgroundColor || defaultBgColor};
      color: ${path[colorKey].focus.color || defaultColor};
      opacity: ${path[colorKey].focus.opacity || defaultOpacity};
    }
  `;
};

export const ExpandButtonStyled = styled.div`
  overflow: hidden;
  position: relative;
  background-size: cover;
  ${size}
  ${colorScheme}
  ${transition('background-color, color, opacity')}
`;

ExpandButtonStyled.displayName = 'ExpandButtonStyled';
