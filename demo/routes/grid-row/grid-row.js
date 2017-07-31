'use strict';

import React from 'react';
import {
  RouteStructure,
} from '../../components/Route/RouteStructure';

export const GridRowRoute = props => (
  <RouteStructure
    componentTitle="GridRow"
    section="Grid"
    tabs={[
      {
        text: 'General Info',
        href: '/grid-row',
      },
      {
        text: 'Use Cases',
        href: '/grid-row/demo',
      },
    ]}
  >
    { props.children }
  </RouteStructure>
);

GridRowRoute.displayName = 'GridRowRoute';
