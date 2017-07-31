'use strict';

import React from 'react';
import {
  RouteStructure,
} from '../../components/Route/RouteStructure';

export const GridFlexRegionRoute = props => (
  <RouteStructure
    componentTitle="GridFlexRegion"
    section="Grid"
    tabs={[
      {
        text: 'General Info',
        href: '/grid-flex-region',
      },
      {
        text: 'Use Cases',
        href: '/grid-flex-region/demo',
      },
    ]}
  >
    { props.children }
  </RouteStructure>
);

GridFlexRegionRoute.displayName = 'GridFlexRegionRoute';
