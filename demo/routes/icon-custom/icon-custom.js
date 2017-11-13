import React from 'react';
import {
  RouteStructure,
} from '../../components/Route/RouteStructure';

export const IconCustomRoute = props => (
  <RouteStructure
    componentTitle="IconCustom"
    tabs={[
      {
        text: 'General Info',
        href: '/icon-custom',
      },
      {
        text: 'Use Cases',
        href: '/icon-custom/demo',
      },
    ]}
  >
    { props.children }
  </RouteStructure>
);

IconCustomRoute.displayName = 'IconCustomRoute';
