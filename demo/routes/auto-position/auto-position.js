'use strict';

import React from 'react';
import {
  RouteStructure,
} from '../../components/Route/RouteStructure';

export const AutoPositionRoute = props => (
  <RouteStructure
    componentTitle="AutoPosition"
    tabs={[
      {
        text: 'General Info',
        href: '/auto-position',
      },
      {
        text: 'Use Cases',
        href: '/auto-position/demo',
      },
    ]}
  >
    { props.children }
  </RouteStructure>
);

AutoPositionRoute.displayName = 'AutoPositionRoute';
