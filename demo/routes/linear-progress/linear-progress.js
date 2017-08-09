'use strict';

import React from 'react';
import {
  RouteStructure,
} from '../../components/Route/RouteStructure';

export const LinearProgressRoute = props => (
  <RouteStructure
    componentTitle="LinearProgress"
    section="Progress"
    tabs={[
      {
        text: 'General Info',
        href: '/linear-progress',
      },
      {
        text: 'Use Cases',
        href: '/linear-progress/demo',
      },
    ]}
  >
    { props.children }
  </RouteStructure>
);

LinearProgressRoute.displayName = 'LinearProgressRoute';
