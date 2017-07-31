'use strict';

import React from 'react';
import {
  RouteStructure,
} from '../../components/Route/RouteStructure';

export const CardRoute = props => (
  <RouteStructure
    componentTitle="Card"
    tabs={[
      {
        text: 'General Info',
        href: '/card',
      },
      {
        text: 'Use Cases',
        href: '/card/demo',
      },
    ]}
  >
    { props.children }
  </RouteStructure>
);


CardRoute.displayName = 'CardRoute';
