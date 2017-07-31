'use strict';

import React from 'react';
import {
  RouteStructure,
} from '../../components/Route/RouteStructure';

export const AppRoute = props => (
  <RouteStructure
    componentTitle="App"
    tabs={[
      {
        text: 'General Info',
        href: '/app',
      },
      {
        text: 'Use Cases',
        href: '/app/demo',
      },
    ]}
  >
    { props.children }
  </RouteStructure>
);

AppRoute.displayName = 'AppRoute';
