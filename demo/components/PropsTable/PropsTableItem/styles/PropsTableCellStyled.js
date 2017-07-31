'use strict';

import styled, { css } from 'styled-components';
import { extractThemeOrDefault, media } from 'reactackle';
import { baseModule, colorBorder } from '../../../../theme/styleHelpers';

const cellSpacing = baseModule(2),
  verticalPad = baseModule(1);

const mediaQueries = ({ theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);

  return css`
    ${media(theme.reactackle.breakpoints.medium)`
      padding: ${verticalPad}px ${cellSpacing}px;
      display: table-cell;
      border: 1px solid ${colorBorder};
  
      &:first-child {    
        padding-left: ${cellSpacing}px;
      }
  
      &:nth-child(2),
      &:nth-child(3) {
        padding-top: ${verticalPad}px;
        padding-bottom: ${verticalPad}px;
      }
    `}
  `;
};

/** STYLES */
export const PropsTableCellStyled = styled.td`
  vertical-align: top;
  display: flex;
  flex-direction: column;
  padding: ${baseModule(1)}px 0 ${baseModule(1)}px ${baseModule(2)}px;
  
  &:first-child {    
    padding-left: 0;
  }
  
  &:nth-child(2),
  &:nth-child(3) {
    padding-top: 0;
    padding-bottom: 0;
  }
  
  ${mediaQueries}
`;

PropsTableCellStyled.displayName = 'PropsTableCellStyled';
