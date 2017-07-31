'use strict';

import styled, { css } from 'styled-components';
import { media, extractThemeOrDefault } from 'reactackle';

const mediaQueries = ({ theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);

  return css`
    ${media(theme.reactackle.breakpoints.medium)`
      opacity: 1;
      position: relative;
      pointer-events: initial;
    `}
  `;
};

/** STYLES */
export const HeaderRowStyled = styled.thead`
  line-height: 1.5;
  opacity: 0;
  position: fixed;
  pointer-events: none;
  ${mediaQueries}
`;

HeaderRowStyled.displayName = 'HeaderRowStyled';
