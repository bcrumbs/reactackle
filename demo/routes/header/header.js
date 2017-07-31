'use strict';

import React from 'react';
import {
  RouteStructure,
} from '../../components/Route/RouteStructure';

export const HeaderRoute = props => (
  <RouteStructure
    componentTitle="Header"
    tabs={[
      {
        text: 'General Info',
        href: '/header',
      },
      {
        text: 'Use Cases',
        href: '/header/demo',
      },
    ]}
  >
    { props.children }
  </RouteStructure>
);

HeaderRoute.displayName = 'HeaderRoute';
