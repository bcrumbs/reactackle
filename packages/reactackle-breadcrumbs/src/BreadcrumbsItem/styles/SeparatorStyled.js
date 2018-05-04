import styled, { css } from 'styled-components';
import {
  extractThemeOrDefault,
  getValueString,
  iconSizeMixin,
} from 'reactackle-core';

const size = ({ theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);

  const {
    height,
    width,
    imgHeight,
    imgWidth,
    fontSize,
    marginY,
    marginX,
  } = theme.reactackle.components.breadcrumbs.item.separator;

  return css`
    font-size: ${getValueString(fontSize)};
    line-height: ${height};
    margin: ${getValueString(marginY)} ${getValueString(marginX)};
    
    ${iconSizeMixin(
      getValueString(height),
      getValueString(imgHeight || height),
      getValueString(width || height),
      getValueString(imgWidth || imgHeight || height),
    )}
  `;
};

const colorScheme = ({ colorScheme, theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const path = theme.reactackle.components.breadcrumbs.item.separator;

  return `
    opacity: ${path.opacity};
    color: ${path.colorScheme[colorScheme].color};
  `;
};

export const SeparatorStyled = styled.div`
  display: inline-flex;
  align-items: center;
  text-align: center;
  ${size}
  ${colorScheme}
  
  li:last-child & {
    display: none;
    pointer-events: none;
    position: fixed;
    width: 0;
    height: 0;
  }
`;

