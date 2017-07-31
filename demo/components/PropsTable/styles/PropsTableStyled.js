'use strict';

import styled from 'styled-components';

import { baseModule } from '../../../theme/styleHelpers';

export const PropsTableStyled = styled.table`
  border-collapse: collapse;
  width: 100%;
  margin-bottom: ${baseModule(4)}px;
`;

PropsTableStyled.displayName = 'PropsTableStyled';
