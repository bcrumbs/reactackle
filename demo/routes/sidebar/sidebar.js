'use strict';

import React from 'react';
import {
  RouteStructure,
} from '../../components/Route/RouteStructure';

export const SidebarRoute = props => (
  <RouteStructure
    componentTitle="Sidebar"
    tabs={[
      {
        text: 'General Info',
        href: '/sidebar',
      },
      {
        text: 'Use Cases',
        href: '/sidebar/demo',
      },
    ]}
  >
    { props.children }
  </RouteStructure>
);

SidebarRoute.displayName = 'SidebarRoute';
