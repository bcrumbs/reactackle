import styled, { css } from 'styled-components';
import {
  extractThemeOrDefault,
  getValueString,
  transition,
} from 'reactackle-core';

const font = ({ theme: themeFromProvider, colorScheme, active }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const path = theme.reactackle.components.menu.item.textSecondary;
  const colorPath = path.colorScheme[colorScheme];
  const defaultColor = colorPath.default.color;
  const defaultOpacity = colorPath.default.opacity;

  const {
    fontSize,
    lineHeight,
  } = path;

  return css`
    font-size: ${getValueString(fontSize)};
    line-height: ${lineHeight};
    
    ${active
      ? css`
        color: ${colorPath.active.color || defaultColor};
        opacity: ${colorPath.active.opacity || defaultOpacity};
      `
      : `
        color: ${defaultColor};
        opacity: ${defaultOpacity};
      `
    }
  `;
};

const spacing = ({ theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);

  const spacingTop =
    theme.reactackle.components.menu.item.textSecondary.spacingTop;

  return css`
    padding-top: ${getValueString(spacingTop)};
  `;
};

export const TextSecondaryStyled = styled.div`
  ${font}
  ${spacing}
  ${transition('color')}
`;

TextSecondaryStyled.displayName = 'TextSecondaryStyled';
