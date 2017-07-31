'use strict';

import styled from 'styled-components';
import {
  baseModule,
  fontWeightSemibold,
  fontSizeSmall,
} from '../../../../theme/styleHelpers';

export const TitleStyled = styled.div`
  width: 100%;
  margin: 0;
  list-style-type: none;
  padding: ${baseModule(1)}px ${baseModule(2)}px;
  margin-bottom: ${baseModule(0.5)}px;
  background-color: rgba(0, 0, 0, 0.07);
  color: rgba(255, 255, 255, 0.6);
  text-transform: uppercase;
  font-weight: ${fontWeightSemibold};
  font-size: ${fontSizeSmall}px;
  letter-spacing: 0.5px;
`;

TitleStyled.displayName = 'TitleStyled';

