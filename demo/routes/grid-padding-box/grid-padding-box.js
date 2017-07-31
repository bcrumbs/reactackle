'use strict';

import React from 'react';
import {
  RouteStructure,
} from '../../components/Route/RouteStructure';

export const GridPaddingBoxRoute = props => (
  <RouteStructure
    componentTitle="GridPaddingBox"
    section="Grid"
    tabs={[
      {
        text: 'General Info',
        href: '/grid-padding-box',
      },
      {
        text: 'Use Cases',
        href: '/grid-padding-box/demo',
      },
    ]}
  >
    { props.children }
  </RouteStructure>
);

GridPaddingBoxRoute.displayName = 'GridPaddingBoxRoute';
