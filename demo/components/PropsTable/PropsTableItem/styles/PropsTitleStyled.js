'use strict';

import styled from 'styled-components';
import {
  fontWeightSemibold,
  colorMain,
} from '../../../../theme/styleHelpers';

export const PropsTitleStyled = styled.div`
  display: block;
  font-weight: ${fontWeightSemibold};
  color: ${colorMain};
`;

PropsTitleStyled.displayName = 'PropsTitleStyled';
