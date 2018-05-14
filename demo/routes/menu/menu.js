'use strict';

import React from 'react';
import { RouteStructure } from '../../components/Route/RouteStructure';

export const MenuRoute = props => (
  <RouteStructure
    componentTitle="Menu"
    tabs={[
      {
        text: 'General Info',
        href: '/menu',
      },
      {
        text: 'Use Cases',
        href: '/menu/demo',
      },
    ]}
  >
    {props.children}
  </RouteStructure>
);

MenuRoute.displayName = 'MenuRoute';
