'use strict';

import React from 'react';
import {
  RouteStructure,
} from '../../components/Route/RouteStructure';

export const CheckboxRoute = props => (
  <RouteStructure
    componentTitle="Checkbox"
    tabs={[
      {
        text: 'General Info',
        href: '/checkbox',
      },
      {
        text: 'Use Cases',
        href: '/checkbox/demo',
      },
    ]}
  >
    { props.children }
  </RouteStructure>
);

CheckboxRoute.displayName = 'CheckboxRoute';
