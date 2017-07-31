'use strict';

import React from 'react';
import {
  RouteStructure,
} from '../../components/Route/RouteStructure';

export const SelectBoxRoute = props => (
  <RouteStructure
    componentTitle="SelectBox"
    tabs={[
      {
        text: 'General Info',
        href: '/select-box',
      },
      {
        text: 'Use Cases',
        href: '/select-box/demo',
      },
    ]}
  >
    { props.children }
  </RouteStructure>
);

SelectBoxRoute.displayName = 'SelectBoxRoute';
