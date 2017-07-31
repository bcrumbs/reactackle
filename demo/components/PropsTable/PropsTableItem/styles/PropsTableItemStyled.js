'use strict';

import styled, { css } from 'styled-components';
import { extractThemeOrDefault, media } from 'reactackle';

import {
  baseModule,
  colorBorder,
  fontSizeBody,
} from '../../../../theme/styleHelpers';

const mediaQueries = ({ theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);

  return css`
    ${media(theme.reactackle.breakpoints.medium)`
      padding: 0;
      display: table-row;
     
      & + & {
        border-top-color: transparent;
      }
    `}
  `;
};

/** STYLES */
export const PropsTableItemStyled = styled.tr`
  line-height: 1.5;
  font-size: ${fontSizeBody}px;
  padding: ${baseModule(1)}px 0;
  display: block;
  
  & + & {
    border-top: 1px solid ${colorBorder};
  }
  
  ${mediaQueries}
`;

PropsTableItemStyled.displayName = 'PropsTableItemStyled';
