import styled, { css } from 'styled-components';
import {
  extractThemeOrDefault,
  getValueString,
  iconSizeMixin,
} from 'reactackle-core';

const ALIGN_MAP = {
  top: 'flex-start',
  center: 'center',
  bottom: 'flex-end',
};

const align = ({ theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const { alignSelf } = theme.reactackle.components.breadcrumbs.item.icon;

  return `align-self: ${ALIGN_MAP[alignSelf]};`;
};

const size = ({ theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);

  const {
    height,
    width,
    imgHeight,
    imgWidth,
    marginLeft,
    marginY,
  } = theme.reactackle.components.breadcrumbs.item.icon;

  return css`
    margin: ${getValueString(marginY)} 0;
    margin-left: ${getValueString(marginLeft)};
    
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
  const path = theme.reactackle.components.breadcrumbs.item.icon;

  return `
    color: ${path.colorScheme[colorScheme].color};
    opacity: ${path.opacity};
  `;
};

export const IconBoxStyled = styled.div`
  display: inline-flex;
  ${align}
  ${size}
  ${colorScheme}
`;

