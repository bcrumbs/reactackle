'use strict';

import React from 'react';
import {
  RouteStructure,
} from '../../components/Route/RouteStructure';

export const RadioRoute = props => (
  <RouteStructure
    componentTitle="Radio"
    tabs={[
      {
        text: 'General Info',
        href: '/radio',
      },
      {
        text: 'Use Cases',
        href: '/radio/demo',
      },
    ]}
  >
    { props.children }
  </RouteStructure>
);

RadioRoute.displayName = 'RadioRoute';
