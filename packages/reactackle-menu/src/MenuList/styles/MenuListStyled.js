import styled, { css } from 'styled-components';
import { extractThemeOrDefault, getValueString } from 'reactackle-core';

const size = ({ theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);

  const {
    paddingY,
    paddingX,
  } = theme.reactackle.components.menu.list;

  return css`
    padding: ${getValueString(paddingY)} ${getValueString(paddingX)};
  `;
};

const inline = ({ inline }) => inline && `
  display: flex;
  align-items: stretch;
  flex-direction: row;
`;

const bordered = ({
  bordered,
  theme: themeFromProvider,
}) => {
  const theme = extractThemeOrDefault(themeFromProvider);

  const {
    thickness,
    color,
    style,
  } = theme.reactackle.components.menu.separator;

  return bordered && css`
    border-top: ${getValueString(thickness)} ${style} ${color};
  `;
};

export const MenuListStyled = styled.ul`
  margin: 0;
  list-style-type: none;
  display: block;
  ${size}
  ${bordered}
  ${inline}
`;

MenuListStyled.displayName = 'MenuListStyled';
