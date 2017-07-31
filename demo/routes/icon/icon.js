'use strict';

import React from 'react';
import {
  RouteStructure,
} from '../../components/Route/RouteStructure';

export const IconRoute = props => (
  <RouteStructure
    componentTitle="Icon"
    tabs={[
      {
        text: 'General Info',
        href: '/icon',
      },
      {
        text: 'Use Cases',
        href: '/icon/demo',
      },
    ]}
  >
    { props.children }
  </RouteStructure>
);

IconRoute.displayName = 'IconRoute';
