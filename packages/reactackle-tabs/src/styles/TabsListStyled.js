'use strict';

import styled from 'styled-components';
import { transition } from 'reactackle-core';

export const TabsListStyled = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  ${transition('transform')};
`;

TabsListStyled.displayName = 'TabsListStyled';
