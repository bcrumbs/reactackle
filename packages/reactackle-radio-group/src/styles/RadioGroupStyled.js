'use strict';

import styled from 'styled-components';
import { extractThemeOrDefault } from 'reactackle-core';

const base = ({ theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);

  const fontFamily =
    theme.reactackle.fontFamily[theme.reactackle.body.fontFamily];

  return `
    &,
    & *,
    *::after,
    *::before {
      font-family: ${fontFamily};
      box-sizing: border-box;
    }
  `;
};

/** STYLES */
export const RadioGroupStyled = styled.div`
  ${/* Prettier workarount until issue is not fixed: https://github.com/prettier/prettier/issues/2291 */ ''};
  ${base};
`;

RadioGroupStyled.displayName = 'RadioGroupStyled';
