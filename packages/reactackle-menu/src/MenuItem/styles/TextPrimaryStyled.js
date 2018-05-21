import styled, { css } from 'styled-components';

import {
  extractThemeOrDefault,
  getValueString,
  transition,
} from 'reactackle-core';

const font = ({ theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);

  const {
    fontSize,
    lineHeight,
  } = theme.reactackle.components.menu.item;

  return css`
    font-size: ${getValueString(fontSize)};
    line-height: ${lineHeight}; 
  `;
};


export const TextPrimaryStyled = styled.div`
  color: currentColor;
  ${font}
  ${transition('color')}
`;

TextPrimaryStyled.displayName = 'TextPrimaryStyled';
