import styled, { css } from 'styled-components';
import { extractThemeOrDefault, getValueString } from 'reactackle-core';

const size = ({ theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);

  const {
    paddingTop,
    paddingBottom,
    paddingX,
  } = theme.reactackle.components.menu.listTitle;

  const itemPx = theme.reactackle.components.menu.item.paddingX;

  return css`
    padding:
      ${getValueString(paddingTop)} 
      ${getValueString(paddingX || itemPx)} 
      ${getValueString(paddingBottom || paddingTop)};
  `;
};

const typography = ({ theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);

  const {
    fontSize,
    fontWeight,
    fontColor,
    lineHeight,
    textTransform,
  } = theme.reactackle.components.menu.listTitle;

  return css`
    font-size: ${getValueString(fontSize)};
    font-weight: ${fontWeight};
    line-height: ${lineHeight};
    text-transform: ${textTransform};
    color: ${fontColor};
  `;
};

export const TitleStyled = styled.div`
  margin: 0;
  list-style-type: none;
  display: block;
  ${typography}
  ${size}
`;

TitleStyled.displayName = 'TitleStyled';
