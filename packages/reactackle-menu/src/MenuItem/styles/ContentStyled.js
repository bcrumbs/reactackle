import styled, { css } from 'styled-components';
import {
  extractThemeOrDefault,
  getValueString,
} from 'reactackle-core';

const size = ({ theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);

  const {
    paddingY,
    paddingX,
  } = theme.reactackle.components.menu.item;

  return css`
    padding-left: ${getValueString(paddingY)} ${getValueString(paddingX)};
  `;
};

export const ContentStyled = styled.div`
  flex-grow: 1;
  ${size}
`;

ContentStyled.displayName = 'ContentStyled';
