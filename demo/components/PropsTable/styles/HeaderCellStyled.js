'use strict';

import styled from 'styled-components';

import {
  baseModule,
  colorBorder,
  paletteBlueGrey25,
  fontWeightSemibold,
} from '../../../theme/styleHelpers';

export const HeaderCellStyled = styled.td`
  vertical-align: bottom;
  flex-direction: column;
  border: 1px solid ${colorBorder};
  text-align: center;
  background-color: ${paletteBlueGrey25};
  padding: ${baseModule(1)}px ${baseModule(2)}px;
  font-weight: ${fontWeightSemibold};
  
  &:first-child {
    text-align: left;
  }  
`;

HeaderCellStyled.displayName = 'HeaderCellStyled';
