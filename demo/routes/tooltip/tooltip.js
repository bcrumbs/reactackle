'use strict';

import React from 'react';
import {
  RouteStructure,
} from '../../components/Route/RouteStructure';

export const TooltipRoute = props => (
  <RouteStructure
    componentTitle="Tooltip"
    tabs={[
      {
        text: 'General Info',
        href: '/tooltip',
      },
      {
        text: 'Use Cases',
        href: '/tooltip/demo',
      },
    ]}
  >
    { props.children }
  </RouteStructure>
);

TooltipRoute.displayName = 'TooltipRoute';
