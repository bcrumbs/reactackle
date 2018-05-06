import styled, { css } from 'styled-components';
import { extractThemeOrDefault, getValueString } from 'reactackle-core';

const size = ({ theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);

  const {
    maxWidth,
  } = theme.reactackle.components.breadcrumbs.item;

  return css`
    ${maxWidth && `max-width: ${getValueString(maxWidth)};`}
  `;
};

const colorScheme = ({ colorScheme, theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);

  const { color } = theme.reactackle.components.breadcrumbs.item
    .colorScheme[colorScheme].default;

  return `
    color: ${color};
  `;
};

export const BreadcrumbsItemStyled = styled.li`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  color: inherit;
  position: relative;
  user-select: none;
  ${size}
  ${colorScheme}
`;
