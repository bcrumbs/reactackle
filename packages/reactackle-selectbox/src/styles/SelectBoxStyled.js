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
export const SelectBoxStyled = styled.div`
  display: flex;
  width: 100%;
  max-width: 100%;
  ${base};
`;

SelectBoxStyled.displayName = 'SelectBoxStyled';
