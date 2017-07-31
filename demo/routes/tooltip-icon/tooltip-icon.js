'use strict';

import React from 'react';
import {
  RouteStructure,
} from '../../components/Route/RouteStructure';

export const TooltipIconRoute = props => (
  <RouteStructure
    componentTitle="TooltipIcon"
    tabs={[
      {
        text: 'General Info',
        href: '/tooltip-icon',
      },
      {
        text: 'Use Cases',
        href: '/tooltip-icon/demo',
      },
    ]}
  >
    { props.children }
  </RouteStructure>
);

TooltipIconRoute.displayName = 'TooltipIconRoute';
