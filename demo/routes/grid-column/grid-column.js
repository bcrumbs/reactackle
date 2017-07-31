'use strict';

import React from 'react';
import {
  RouteStructure,
} from '../../components/Route/RouteStructure';

export const GridColumnRoute = props => (
  <RouteStructure
    componentTitle="GridColumn"
    section="Grid"
    tabs={[
      {
        text: 'General Info',
        href: '/grid-column',
      },
      {
        text: 'Use Cases',
        href: '/grid-column/demo',
      },
    ]}
  >
    { props.children }
  </RouteStructure>
);

GridColumnRoute.displayName = 'GridColumnRoute';
