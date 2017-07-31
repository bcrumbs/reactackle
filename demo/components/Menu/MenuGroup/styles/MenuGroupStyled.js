'use strict';

import styled from 'styled-components';
import { baseModule } from '../../../../theme/styleHelpers';

const hasTitle = ({ hasTitle }) => hasTitle
  ? 'padding-top: 0;'
  : '';

export const MenuGroupStyled = styled.menu`
  width: 100%;
  margin: 0;
  list-style-type: none;
  padding: ${baseModule(1)}px 0;
  ${hasTitle}
`;

MenuGroupStyled.displayName = 'MenuGroupStyled';

