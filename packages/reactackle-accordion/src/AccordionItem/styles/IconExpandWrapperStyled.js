import styled, { css } from 'styled-components';
import {
  extractThemeOrDefault,
  getValueString,
} from 'reactackle-core';

const size = ({ theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const path = theme.reactackle.components.accordion.item;

  const {
    height,
    width,
  } = theme.reactackle.components.accordion.item.expandIcon;

  return css`
    min-height: ${getValueString(path.title.minHeight)};
    width: ${getValueString(width || height)};
  `;
};

export const IconExpandWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  ${size}
`;

IconExpandWrapperStyled.displayName = 'IconExpandWrapperStyled';
