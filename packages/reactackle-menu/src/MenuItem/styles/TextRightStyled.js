import styled, { css } from 'styled-components';
import {
  extractThemeOrDefault,
  getValueString,
} from 'reactackle-core';

const size = ({ theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);

  const {
    marginLeft,
    marginRight,
  } = theme.reactackle.components.menu.item.textRight;

  return css`
    padding: 0 ${getValueString(marginRight)} 0 ${getValueString(marginLeft)};
  `;
};

const font = ({ theme: themeFromProvider, colorScheme, active }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const path = theme.reactackle.components.menu.item.textRight;
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

export const TextRightStyled = styled.div`
  ${size}
  ${font}
`;

TextRightStyled.displayName = 'TextRightStyled';
