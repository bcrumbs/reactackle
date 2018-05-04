import styled, { css } from 'styled-components';
import { extractThemeOrDefault, getValueString } from 'reactackle-core';

const size = ({ theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);

  const {
    paddingY,
    paddingX,
  } = theme.reactackle.components.breadcrumbs.item.textBox;

  return css`
    padding: ${getValueString(paddingY)} ${getValueString(paddingX)};
  `;
};

export const TextBoxStyled = styled.div`
  ${size}
`;

