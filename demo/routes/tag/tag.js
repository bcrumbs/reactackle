'use strict';

import React from 'react';
import { RouteStructure } from '../../components/Route/RouteStructure';

export const TagRoute = props => (
  <RouteStructure
    componentTitle="Tag"
    tabs={[
      {
        text: 'General Info',
        href: '/tag',
      },
      {
        text: 'Use Cases',
        href: '/tag/demo',
      },
    ]}
  >
    {props.children}
  </RouteStructure>
);

TagRoute.displayName = 'TagRoute';
