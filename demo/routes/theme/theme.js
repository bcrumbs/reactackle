'use strict';

import React from 'react';
import {
  RouteStructure,
} from '../../components/Route/RouteStructure';

export const ThemeRoute = props => (
  <RouteStructure
    componentTitle="Theme"
    tabs={[
      {
        text: 'General Info',
        href: '/theme',
      },
      {
        text: 'Use Cases',
        href: '/theme/demo',
      },
    ]}
  >
    { props.children }
  </RouteStructure>
);

ThemeRoute.displayName = 'ThemeRoute';
