'use strict';

import React from 'react';
import {
  RouteStructure,
} from '../../components/Route/RouteStructure';

export const DialogRoute = props => (
  <RouteStructure
    componentTitle="Dialog"
    tabs={[
      {
        text: 'General Info',
        href: '/dialog',
      },
      {
        text: 'Use Cases',
        href: '/dialog/demo',
      },
    ]}
  >
    { props.children }
  </RouteStructure>
);

DialogRoute.displayName = 'DialogRoute';
