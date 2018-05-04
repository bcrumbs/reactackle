import styled, { css } from 'styled-components';
import { extractThemeOrDefault, getValueString } from 'reactackle-core';

const fontStyle = ({ colorScheme, theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const path = theme.reactackle.components.breadcrumbs.item.title;

  const {
    fontSize,
    lineHeight,
    fontWeight,
    textTransform,
  } = path;

  return css`
    font-size: ${getValueString(fontSize)};
    line-height: ${lineHeight};
    color: ${path.colorScheme[colorScheme].color};
    font-weight: ${fontWeight};
    text-transform: ${textTransform};
  `;
};

const state = ({ active, theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);
  const stateKey = active ? 'active' : 'default';
  const path =
    theme.reactackle.components.breadcrumbs.item.title.state[stateKey];

  const { textDecoration } = path;

  const hoverTD = path.hover.textDecoration || textDecoration;

  return css`
    text-decoration: ${textDecoration};
    
    li:hover & {
      text-decoration: ${hoverTD};
    }
    
    li:focus & {
      text-decoration: ${path.focus.textDecoration || hoverTD};    
    }
  `;
};

export const TitleStyled = styled.div`
  ${fontStyle}
  ${state}
`;

