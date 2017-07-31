'use strict';

import React from 'react';
import {
  RouteStructure,
} from '../../components/Route/RouteStructure';

export const ButtonRoute = props => (
  <RouteStructure
    componentTitle="Button"
    tabs={[
      {
        text: 'General Info',
        href: '/button',
      },
      {
        text: 'Use Cases',
        href: '/button/demo',
      },
    ]}
  >
    { props.children }
  </RouteStructure>
);

ButtonRoute.displayName = 'ButtonRoute';
