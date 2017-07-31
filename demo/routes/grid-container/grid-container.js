'use strict';

import React from 'react';

import {
  RouteStructure,
} from '../../components/Route/RouteStructure';

export const GridContainerRoute = props => (
  <RouteStructure
    componentTitle="GridContainer"
    section="Grid"
    tabs={[
      {
        text: 'General Info',
        href: '/grid-container',
      },
      {
        text: 'Use Cases',
        href: '/grid-container/demo',
      },
    ]}
  >
    { props.children }
  </RouteStructure>
);

GridContainerRoute.displayName = 'GridContainerRoute';
