import styled, { css } from 'styled-components';
import { extractThemeOrDefault, getValueString } from 'reactackle-core';

const size = ({ theme: themeFromProvider, inline }) => {
  const theme = extractThemeOrDefault(themeFromProvider);

  const {
    paddingY,
    paddingX,
  } = theme.reactackle.components.menu.list;

  return inline
   ? css`
      padding: ${getValueString(paddingX)} ${getValueString(paddingY)} ;
    `
    : css`
      padding: ${getValueString(paddingY)} ${getValueString(paddingX)};
    `;
};

const inline = ({ inline }) => inline && `
  display: flex;
  align-items: stretch;
  flex-direction: row;
`;

const bordered = ({
  inline,
  bordered,
  theme: themeFromProvider,
}) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const borderDir = inline ? 'left' : 'top';

  const {
    thickness,
    color,
    style,
  } = theme.reactackle.components.menu.separator;

  return bordered && css`
    border-${borderDir}: ${getValueString(thickness)} ${style} ${color};
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
