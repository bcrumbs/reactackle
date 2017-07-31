'use strict';

import React from 'react';
import { RouteDemoStyled } from './styles/RouteDemoStyled';

export const RouteDemo = props => (
  <RouteDemoStyled>
    { props.children }
  </RouteDemoStyled>
);
