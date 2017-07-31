'use strict';

import React from 'react';

import {
  RouteStructure,
} from '../../components/Route/RouteStructure';

export const TabsRoute = props => (
  <RouteStructure
    componentTitle="Tabs"
    tabs={[
      {
        text: 'General Info',
        href: '/tabs',
      },
      {
        text: 'Use Cases',
        href: '/tabs/demo',
      },
    ]}
  >
    { props.children }
  </RouteStructure>
);
TabsRoute.displayName = 'TabsRoute';
