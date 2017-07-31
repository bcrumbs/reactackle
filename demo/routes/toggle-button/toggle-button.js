'use strict';

import React from 'react';
import {
  RouteStructure,
} from '../../components/Route/RouteStructure';

export const ToggleButtonRoute = props => (
  <RouteStructure
    componentTitle="ToggleButton"
    tabs={[
      {
        text: 'General Info',
        href: '/toggle-button',
      },
      {
        text: 'Use Cases',
        href: '/toggle-button/demo',
      },
    ]}
  >
    { props.children }
  </RouteStructure>
);

ToggleButtonRoute.displayName = 'ToggleButtonRoute';
